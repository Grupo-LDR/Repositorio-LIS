-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql-raffarraffa.alwaysdata.net
-- Generation Time: Oct 29, 2023 at 09:13 PM
-- Server version: 10.6.14-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `raffarraffa_lis`
--

-- --------------------------------------------------------

--
-- Table structure for table `audit_orders`
--

CREATE TABLE `audit_orders` (
  `id` int(10) UNSIGNED NOT NULL,
  `data_record` varchar(200) NOT NULL COMMENT 'datos exitentes en el registro modificado JSON',
  `date_create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `employee_id` int(10) UNSIGNED NOT NULL,
  `orders_id` int(10) UNSIGNED NOT NULL,
  `action_records_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar auditorías de cambios en datos de diferentes tablas';

-- --------------------------------------------------------

--
-- Table structure for table `audit_result`
--

CREATE TABLE `audit_result` (
  `id` int(10) UNSIGNED NOT NULL,
  `action_record` enum('create','update','delete') DEFAULT NULL,
  `data_record` varchar(200) NOT NULL COMMENT 'datos exitentes en el registro modificado JSON',
  `date_create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `users_id` int(10) UNSIGNED NOT NULL,
  `studie_results_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar auditorías de cambios en datos de diferentes tablas';

-- --------------------------------------------------------

--
-- Table structure for table `audit_studie_results`
--

CREATE TABLE `audit_studie_results` (
  `id` int(10) UNSIGNED NOT NULL,
  `status` tinyint(1) DEFAULT 2 COMMENT 'estados de resultado en 1 valido, 0 no valido 2 en proceso ',
  `values` varchar(250) DEFAULT NULL,
  `values_standard` varchar(250) DEFAULT NULL,
  `date_create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `date_validate` date DEFAULT NULL,
  `observations` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar estudios a relaizar';

-- --------------------------------------------------------

--
-- Table structure for table `citys`
--

CREATE TABLE `citys` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(80) NOT NULL,
  `states_id` int(10) UNSIGNED NOT NULL,
  `update_at` datetime DEFAULT NULL,
  `create_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar ciudades';

-- --------------------------------------------------------

--
-- Table structure for table `exams`
--

CREATE TABLE `exams` (
  `id` int(10) UNSIGNED NOT NULL,
  `nbu` int(10) UNSIGNED NOT NULL,
  `detail` varchar(250) NOT NULL,
  `common` varchar(150) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `sample_type_id` int(10) UNSIGNED NOT NULL,
  `time` tinyint(4) NOT NULL COMMENT ' tiempo de obtencion resutlado',
  `create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `update_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `exams`
--

INSERT INTO `exams` (`id`, `nbu`, `detail`, `common`, `status`, `sample_type_id`, `time`, `create_at`, `update_at`) VALUES
(1, 660475, 'Hemograma', 'Sangre completo', 1, 1, 25, '2023-10-28 17:24:09', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `exam_determinations`
--

CREATE TABLE `exam_determinations` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(150) DEFAULT NULL,
  `observation` varchar(250) DEFAULT NULL,
  `exam_reference_values_id` int(10) UNSIGNED NOT NULL,
  `exams_id` int(10) UNSIGNED NOT NULL,
  `create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `update_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='tabla para las determinaciones de un examen';

--
-- Dumping data for table `exam_determinations`
--

INSERT INTO `exam_determinations` (`id`, `name`, `observation`, `exam_reference_values_id`, `exams_id`, `create_at`, `update_at`) VALUES
(1, 'Recuento de glóbulos rojos (RBC)', NULL, 1, 1, '2023-10-28 17:30:14', NULL),
(2, 'Recuento de glóbulos blancos (WBC)', NULL, 2, 1, '2023-10-28 18:02:32', '2023-10-28 18:02:32');

-- --------------------------------------------------------

--
-- Table structure for table `exam_reference_values`
--

CREATE TABLE `exam_reference_values` (
  `id` int(11) UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1 COMMENT '0: inactivo 1 activo',
  `sex` enum('M','F') DEFAULT NULL,
  `age_min` int(11) DEFAULT NULL,
  `age_max` int(11) DEFAULT NULL,
  `pregnant` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `value_max` int(11) DEFAULT NULL COMMENT 'alor max poible',
  `value_min` int(11) DEFAULT NULL COMMENT 'Valor minimo posible',
  `value_ref_max` int(11) NOT NULL COMMENT 'valor max para persana sana',
  `value_ref_min` int(11) NOT NULL COMMENT 'valo rmin para persona sana',
  `unit_value` varchar(45) NOT NULL,
  `observation` varchar(250) DEFAULT NULL,
  `create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `update_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar valores standard de estudios';

--
-- Dumping data for table `exam_reference_values`
--

INSERT INTO `exam_reference_values` (`id`, `status`, `sex`, `age_min`, `age_max`, `pregnant`, `value_max`, `value_min`, `value_ref_max`, `value_ref_min`, `unit_value`, `observation`, `create_at`, `update_at`) VALUES
(1, 1, 'M', 20, 65, 0, 6500000, 3000000, 5500000, 4500000, 'µL', '4.5 millones/µL (valor mínimo en el estándar) = 4,500,000/µL\r\n5.5 millones/µL (valor máximo en el estándar) = 5,500,000/µL', '2023-10-28 17:29:04', '2023-10-28 17:29:04'),
(2, 1, NULL, NULL, NULL, 0, 15000, 1000, 11000, 4500, 'cel/µL', 'Recuento de glóbulos blancos (WBC)\r\nValor estándar: 4,500 - 11,000 células/µL.', '2023-10-28 18:01:09', '2023-10-28 18:01:09');

-- --------------------------------------------------------

--
-- Table structure for table `new_audit_orders`
--

CREATE TABLE `new_audit_orders` (
  `id` int(11) UNSIGNED NOT NULL,
  `diagnostico` varchar(250) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1 COMMENT '0: inactivo, 1: activo',
  `date_create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `user_id` int(10) UNSIGNED NOT NULL COMMENT 'id de usuario paciente',
  `employee_id` int(10) UNSIGNED NOT NULL COMMENT 'id de usuarios que crea la orden',
  `doctor_id` int(10) UNSIGNED NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) UNSIGNED NOT NULL,
  `patient_id` int(10) UNSIGNED DEFAULT NULL,
  `diagnosis` varchar(250) DEFAULT NULL,
  `observation` varchar(250) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1 COMMENT '0: inactivo\r\n1: activo\r\n2: ingresada\r\n3: toma meustra\r\n4: analitica\r\n5: paso a firma\r\n6: firmada\r\n7: entregada',
  `employee_id` int(10) UNSIGNED DEFAULT NULL,
  `doctor_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL,
  `create_user_id` int(10) UNSIGNED DEFAULT NULL,
  `update_user_id` int(10) UNSIGNED DEFAULT NULL,
  `validate_users_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `patient_id`, `diagnosis`, `observation`, `status`, `employee_id`, `doctor_id`, `created_at`, `updated_at`, `create_user_id`, `update_user_id`, `validate_users_id`) VALUES
(4, 1, 'anemia', NULL, 1, 2, 2, '2023-10-28 17:19:45', NULL, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

CREATE TABLE `profiles` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `users_id` int(10) UNSIGNED NOT NULL COMMENT 'Serian los oles:\npor defal todos son pacientes, asiqu eno exite\nTengo: \ndoctor, tecnico, bioquimico, admin, recepcion\n\n',
  `access_auth` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(80) NOT NULL,
  `license` varchar(45) DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  `create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `delete_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `samples`
--

CREATE TABLE `samples` (
  `id` int(11) UNSIGNED NOT NULL,
  `valid` tinyint(1) DEFAULT NULL,
  `observation` varchar(150) DEFAULT NULL,
  `create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `update_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar ciudades';

--
-- Dumping data for table `samples`
--

INSERT INTO `samples` (`id`, `valid`, `observation`, `create_at`, `update_at`) VALUES
(1, 1, '5ml ', '2023-10-28 17:31:40', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `samples_type`
--

CREATE TABLE `samples_type` (
  `id` int(11) UNSIGNED NOT NULL,
  `status` tinyint(1) DEFAULT 1,
  `name` varchar(45) NOT NULL,
  `create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `update_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `observation` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla tipo de muestras';

--
-- Dumping data for table `samples_type`
--

INSERT INTO `samples_type` (`id`, `status`, `name`, `create_at`, `update_at`, `observation`) VALUES
(1, 1, 'Sangre', '2023-10-28 17:23:31', NULL, 'Muestra extraida In situ');

-- --------------------------------------------------------

--
-- Table structure for table `states`
--

CREATE TABLE `states` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(80) NOT NULL,
  `update_at` datetime DEFAULT NULL,
  `create_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar ciudades';

-- --------------------------------------------------------

--
-- Table structure for table `studies`
--

CREATE TABLE `studies` (
  `id` int(11) UNSIGNED NOT NULL,
  `order_id` int(10) UNSIGNED NOT NULL,
  `exams_id` int(10) UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1 COMMENT 'estados de estudio TABLA',
  `observation` varchar(250) DEFAULT NULL,
  `samples_id` int(10) UNSIGNED DEFAULT NULL,
  `validate_at` datetime DEFAULT NULL,
  `create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `update_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar estudios a relaizar en un paciente';

--
-- Dumping data for table `studies`
--

INSERT INTO `studies` (`id`, `order_id`, `exams_id`, `status`, `observation`, `samples_id`, `validate_at`, `create_at`, `update_at`) VALUES
(1, 4, 1, 1, NULL, 1, NULL, '2023-10-28 17:32:50', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `studie_results`
--

CREATE TABLE `studie_results` (
  `id` int(11) UNSIGNED NOT NULL,
  `studies_id` int(10) UNSIGNED NOT NULL,
  `status` tinyint(1) DEFAULT 2 COMMENT 'estados de resultado en 1 valido, 0 no valido 2 en proceso ',
  `values` varchar(100) DEFAULT NULL,
  `observation` varchar(250) DEFAULT NULL,
  `validate_at` datetime DEFAULT NULL,
  `create_at` datetime DEFAULT current_timestamp(),
  `update_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar estudios a relaizar';

--
-- Dumping data for table `studie_results`
--

INSERT INTO `studie_results` (`id`, `studies_id`, `status`, `values`, `observation`, `validate_at`, `create_at`, `update_at`) VALUES
(1, 1, 2, '4500000', NULL, NULL, '2023-10-28 17:33:48', '2023-10-28 17:33:12'),
(2, 1, 2, '5900', NULL, NULL, '2023-10-28 18:03:20', '2023-10-28 18:02:53');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) UNSIGNED NOT NULL,
  `first_name` varchar(80) NOT NULL,
  `last_name` varchar(80) NOT NULL,
  `gender` enum('M','F','X','') NOT NULL COMMENT 'M: masculino, F: femenino, X: gen x',
  `sex` enum('M','F') NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1 COMMENT '0: inactivo, 1: activo',
  `document` varchar(9) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `email` varchar(80) NOT NULL,
  `address` varchar(80) NOT NULL,
  `birth_at` date DEFAULT NULL,
  `password` varchar(80) DEFAULT NULL,
  `create_users_id` int(10) UNSIGNED NOT NULL,
  `update_users_id` int(10) UNSIGNED DEFAULT NULL,
  `city_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `pregnant` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `gender`, `sex`, `active`, `document`, `phone`, `email`, `address`, `birth_at`, `password`, `create_users_id`, `update_users_id`, `city_id`, `created_at`, `updated_at`, `pregnant`) VALUES
(1, 'Jose', 'Perez', '', 'M', 1, '5556565', '2664785699', 'jose@example.com', 'junin 34', '2002-07-04', NULL, 1, NULL, NULL, '2023-10-28 17:13:23', NULL, NULL),
(2, 'Juan', 'Gomez', '', 'M', 1, '24555565', '26647856123', 'juan@example.com', 'pederna 34', '0000-00-00', NULL, 1, NULL, NULL, '2023-10-28 17:13:23', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `audit_orders`
--
ALTER TABLE `audit_orders`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `fk_audit_record_users1_idx` (`employee_id`),
  ADD KEY `fk_audit_orders_orders1_idx` (`orders_id`),
  ADD KEY `fk_audit_orders_action_records1_idx` (`action_records_id`);

--
-- Indexes for table `audit_result`
--
ALTER TABLE `audit_result`
  ADD PRIMARY KEY (`id`,`users_id`,`studie_results_id`),
  ADD KEY `fk_audit_record_users1_idx` (`users_id`),
  ADD KEY `fk_audit_record_studie_results1_idx` (`studie_results_id`);

--
-- Indexes for table `citys`
--
ALTER TABLE `citys`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `fk_citys_states1_idx` (`states_id`);

--
-- Indexes for table `exams`
--
ALTER TABLE `exams`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_exams_exam_groups1_idx` (`sample_type_id`);

--
-- Indexes for table `exam_determinations`
--
ALTER TABLE `exam_determinations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_exam_determinations_exam_reference_values1_idx` (`exam_reference_values_id`),
  ADD KEY `fk_exam_determinations_exams1_idx` (`exams_id`);

--
-- Indexes for table `exam_reference_values`
--
ALTER TABLE `exam_reference_values`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `new_audit_orders`
--
ALTER TABLE `new_audit_orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `empleado` (`employee_id`),
  ADD KEY `doctor` (`doctor_id`),
  ADD KEY `paciente` (`patient_id`),
  ADD KEY `fk_orders_users1_idx` (`validate_users_id`);

--
-- Indexes for table `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_profiles_users1_idx` (`users_id`);

--
-- Indexes for table `samples`
--
ALTER TABLE `samples`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `samples_type`
--
ALTER TABLE `samples_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `states`
--
ALTER TABLE `states`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `studies`
--
ALTER TABLE `studies`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `fk_studies_orders1_idx1` (`order_id`),
  ADD KEY `fk_studies_exams1_idx` (`exams_id`),
  ADD KEY `fk_studies_samples1_idx` (`samples_id`);

--
-- Indexes for table `studie_results`
--
ALTER TABLE `studie_results`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_studie_results_studies1_idx` (`studies_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `document` (`document`),
  ADD KEY `fk_users_citys1_idx` (`city_id`),
  ADD KEY `fk_users_users1_idx` (`update_users_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `audit_orders`
--
ALTER TABLE `audit_orders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `audit_result`
--
ALTER TABLE `audit_result`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `citys`
--
ALTER TABLE `citys`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `exams`
--
ALTER TABLE `exams`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `exam_determinations`
--
ALTER TABLE `exam_determinations`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `exam_reference_values`
--
ALTER TABLE `exam_reference_values`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `new_audit_orders`
--
ALTER TABLE `new_audit_orders`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `profiles`
--
ALTER TABLE `profiles`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `samples`
--
ALTER TABLE `samples`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `samples_type`
--
ALTER TABLE `samples_type`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `states`
--
ALTER TABLE `states`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `studies`
--
ALTER TABLE `studies`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `studie_results`
--
ALTER TABLE `studie_results`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `citys`
--
ALTER TABLE `citys`
  ADD CONSTRAINT `state` FOREIGN KEY (`states_id`) REFERENCES `states` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `exams`
--
ALTER TABLE `exams`
  ADD CONSTRAINT `sample_type` FOREIGN KEY (`sample_type_id`) REFERENCES `samples_type` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `exam_determinations`
--
ALTER TABLE `exam_determinations`
  ADD CONSTRAINT `fk_exam_determinations_exam_reference_values1` FOREIGN KEY (`exam_reference_values_id`) REFERENCES `exam_reference_values` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_exam_determinations_exams1` FOREIGN KEY (`exams_id`) REFERENCES `exams` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `doctor` FOREIGN KEY (`doctor_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `empleado` FOREIGN KEY (`employee_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `paciente` FOREIGN KEY (`patient_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `profiles`
--
ALTER TABLE `profiles`
  ADD CONSTRAINT `accessAuth` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `studies`
--
ALTER TABLE `studies`
  ADD CONSTRAINT `fk_studies_exams1` FOREIGN KEY (`exams_id`) REFERENCES `exams` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_studies_orders1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_studies_samples1` FOREIGN KEY (`samples_id`) REFERENCES `samples` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `studie_results`
--
ALTER TABLE `studie_results`
  ADD CONSTRAINT `fk_studie_results_studies1` FOREIGN KEY (`studies_id`) REFERENCES `studies` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `ciudades` FOREIGN KEY (`city_id`) REFERENCES `citys` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
