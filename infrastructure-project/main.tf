provider "google" {
  credentials = file("../key.json") // 「SA のキーを取得する」で生成したkey.jsonまでのパスを指定
  project     = var.project_id // variable.tf を参照してる
  region      = var.default_region
}

resource "google_cloud_run_service" "test-cloud-run" {
  name     = var.project_id
  location = var.default_region

  template {
    spec {
      containers {
        image = "gcr.io/${var.project_id}/helloworld"
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}
