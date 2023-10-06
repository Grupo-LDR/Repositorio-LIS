SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


CREATE DATABASE IF NOT EXISTS `lis3` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `lis3`;

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `first_name` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `last_name` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `gender` tinyint(1) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '0: inactivo 1 activo',
  `document` int NOT NULL,
  `phone` int NOT NULL,
  `email` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `address` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `date_birth_at` date DEFAULT NULL,
  `password` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `date_create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `audit_record`;
CREATE TABLE IF NOT EXISTS `audit_record` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_employee` int UNSIGNED NOT NULL,
  `action`ENUM('create', 'update', 'delete'),
  `table` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'Registra tabla modificada',
  `record` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'datos exitentes en el registro modificado JSON',
  `date_create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)	
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar auditorías de cambios en datos';

DROP TABLE IF EXISTS `medical_conditions`;
CREATE TABLE IF NOT EXISTS `medical_conditions` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Registra condion medica relevante',
  `id_user` int UNSIGNED NOT NULL,
  `id_employee` int UNSIGNED NOT NULL,
  `condition` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '0: inactivo 1 activo',
  `date_create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar estados importantes de un paciente: embarazo, hipertension etc..';

DROP TABLE IF EXISTS `citys`;
CREATE TABLE IF NOT EXISTS `citys` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `date_update_at` datetime DEFAULT NULL,
  `date_create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)	
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar ciudades';

DROP TABLE IF EXISTS `employees`;
CREATE TABLE IF NOT EXISTS `employees` (
  `id` tinyint UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_user` int UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '0: inactivo 1 activo',
  `date_create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `roles` (
  `id` tinyint UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_employee` INT NOT NULL,
  `name` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `access_permissions` (
  `id` tinyint UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_employee` INT NOT NULL, 
  `resource` VARCHAR(255) NOT NULL,
  `permission` ENUM('read', 'write', 'delete') NOT NULL, 
  `date_create_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, 
 PRIMARY KEY(`id`,`id_employee`, `resource`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `audits`;
CREATE TABLE IF NOT EXISTS `audits` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_user` int UNSIGNED NOT NULL,
  `id_studie` int UNSIGNED NOT NULL,
  `action` ENUM('create', 'update', 'delete')  NOT NULL DEFAULT 'create',
  `result`varchar (500) NOT NULL,
  `comment`varchar (250) ,
  `date_create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar roles';

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_user` int UNSIGNED NOT NULL,
  `id_employee` tinyint UNSIGNED NOT NULL,
  `doctor` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `diagnostico` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT 'estados de ordenes TABLA',
  `date_create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `comment`varchar (250) ,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar ordenes estudio';

DROP TABLE IF EXISTS `studies`;
CREATE TABLE IF NOT EXISTS `studies` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_order` int UNSIGNED NOT NULL,
  `id_employee` tinyint UNSIGNED NOT NULL COMMENT ' id del empelado que relaiza el estudio', 
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT 'estados de estudio TABLA',
  `date_create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_validate` date DEFAULT NULL,
  `comment`varchar (250) ,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar estudios a relaizar';

DROP TABLE IF EXISTS `studie_results`;
CREATE TABLE IF NOT EXISTS `studie_results` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_studie` int UNSIGNED NOT NULL,
  `status` tinyint(1) DEFAULT '2' COMMENT 'estados de resultado en 1 valido, 0 no valido 2 en proceso ',
  `values` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `values_standard` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `date_create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_validate` date DEFAULT NULL,
  `comment`varchar (250),
   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar estudios a relaizar';

DROP TABLE IF EXISTS `samples`;
CREATE TABLE IF NOT EXISTS `samples` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_studie` int UNSIGNED NOT NULL,
  `status` tinyint(1) DEFAULT '1' COMMENT 'estados de muestra 1 valido, 0 no valido',
  `date_create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar muestras de pacientes';
DROP TABLE IF EXISTS `tests`;
CREATE TABLE IF NOT EXISTS `tests` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_test_type` int UNSIGNED NOT NULL,
  `name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `common_name` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '0: inactivo 1 activo',
  `date_create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `comment`varchar (250) ,
  `time_process` int NOT NULL COMMENT 'en dias habiles',
   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar esudios disponibles';

DROP TABLE IF EXISTS `test_types`;
CREATE TABLE IF NOT EXISTS `test_types` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `date_create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `comment`varchar (250) ,
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '0: inactivo 1 activo',
   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar esudios disponibles';

CREATE TABLE IF NOT EXISTS `test_requirements` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_test` int UNSIGNED NOT NULL,
  `requeriments`varchar (250) NOT NULL,
  `date_create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `comment`varchar (250) ,
  PRIMARY KEY (`id`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar los requsitos par acda estudio';

DROP TABLE IF EXISTS `tests_standard_values`;
CREATE TABLE IF NOT EXISTS `tests_standard_values` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_test` int UNSIGNED NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `value` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `date_create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `comment`varchar (250) ,
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '0: inactivo 1 activo',
   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar valores standard de estudios';

COMMIT;