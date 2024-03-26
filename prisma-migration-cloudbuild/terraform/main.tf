terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.13.0"
    }
  }
}

data "google_project" "project" {
}

resource "google_project_service" "secretmanager_api" {
  service            = "secretmanager.googleapis.com"
  disable_on_destroy = false
}

resource "google_project_service" "sqladmin_api" {
  service            = "sqladmin.googleapis.com"
  disable_on_destroy = false
}

resource "google_project_service" "cloudrun_api" {
  service            = "run.googleapis.com"
  disable_on_destroy = false
}

resource "google_sql_database_instance" "instance" {
  name             = "postgres-instance"
  region           = "asia-northeast1"
  database_version = "POSTGRES_15"
  settings {
    tier = "db-f1-micro"
  }
  deletion_protection = false
  depends_on          = [google_project_service.sqladmin_api]
}

resource "random_password" "pwd" {
  length  = 16
  special = false
}

resource "google_sql_user" "user" {
  name     = "user"
  instance = google_sql_database_instance.instance.name
  password = random_password.pwd.result
}

resource "google_secret_manager_secret" "db_url" {
  secret_id = "db-url"
  replication {
    auto {}
  }
  depends_on = [google_project_service.secretmanager_api]
}

resource "google_secret_manager_secret_version" "db_url_data" {
  secret      = google_secret_manager_secret.db_url.id
  secret_data = "postgresql://${google_sql_user.user.name}:${random_password.pwd.result}@127.0.0.1:5432/postgre?host=/cloudsql/${google_sql_database_instance.instance.connection_name}"
}

resource "google_secret_manager_secret_iam_member" "secretaccess_compute_db_url" {
  secret_id = google_secret_manager_secret.db_url.id
  role      = "roles/secretmanager.secretAccessor"
  member    = "serviceAccount:${data.google_project.project.number}-compute@developer.gserviceaccount.com" # Project's compute service account
}

resource "google_cloud_run_v2_service" "default" {
  name     = "cloudrun-service"
  location = "asia-northeast1"
  template {
    containers {
      image = "us-docker.pkg.dev/cloudrun/container/hello:latest"
      env {
        name = "DATABASE_URL"
        value_source {
          secret_key_ref {
            secret  = google_secret_manager_secret.db_url.secret_id
            version = "latest"
          }
        }
      }
    }
    volumes {
      name = "cloudsql"
      cloud_sql_instance {
        instances = [google_sql_database_instance.instance.connection_name]
      }
    }
  }
  client     = "terraform"
  depends_on = [google_project_service.secretmanager_api, google_project_service.cloudrun_api, google_project_service.sqladmin_api]
}
