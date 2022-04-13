--
-- 0001-create-database.sql
--

-- Delete user, database
DROP DATABASE IF EXISTS `api-server`;
DROP USER IF EXISTS 'admin';

-- Create user, database
CREATE DATABASE `api-server` DEFAULT CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_general_ci';
CREATE USER 'admin' IDENTIFIED BY 'admin';
GRANT ALL PRIVILEGES ON `api-server`.* TO admin@'%';
