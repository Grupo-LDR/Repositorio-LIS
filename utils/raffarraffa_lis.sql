-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql-raffarraffa.alwaysdata.net
-- Generation Time: Oct 24, 2023 at 08:02 PM
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
CREATE DATABASE IF NOT EXISTS `raffarraffa_lis` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `raffarraffa_lis`;

-- --------------------------------------------------------

--
-- Table structure for table `audit_orders`
--

DROP TABLE IF EXISTS `audit_orders`;
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

DROP TABLE IF EXISTS `audit_result`;
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

DROP TABLE IF EXISTS `audit_studie_results`;
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

DROP TABLE IF EXISTS `citys`;
CREATE TABLE `citys` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(80) NOT NULL,
  `states_id` int(10) UNSIGNED NOT NULL,
  `date_update_at` datetime DEFAULT NULL,
  `date_create_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar ciudades';

--
-- Dumping data for table `citys`
--

INSERT INTO `citys` (`id`, `name`, `states_id`, `date_update_at`, `date_create_at`) VALUES
(1, 'Aguada de las Ánimas', 18, NULL, '2023-10-11 08:46:28'),
(2, 'Alto Pelado', 18, NULL, '2023-10-11 08:46:28'),
(3, 'Alto Pencoso', 18, NULL, '2023-10-11 08:46:28'),
(4, 'Anchorena', 18, NULL, '2023-10-11 08:46:28'),
(5, 'Árbol Solo', 18, NULL, '2023-10-11 08:46:28'),
(6, 'Arizona', 18, NULL, '2023-10-11 08:46:28'),
(7, 'Bagual', 18, NULL, '2023-10-11 08:46:28'),
(8, 'Bajada Nueva', 18, NULL, '2023-10-11 08:46:28'),
(9, 'Bajo de Véliz', 18, NULL, '2023-10-11 08:46:28'),
(10, 'Balcarce', 18, NULL, '2023-10-11 08:46:28'),
(11, 'Balde', 18, NULL, '2023-10-11 08:46:28'),
(12, 'Balde de Azcurra', 18, NULL, '2023-10-11 08:46:28'),
(13, 'Balde de Escudero', 18, NULL, '2023-10-11 08:46:28'),
(14, 'Balde de La Isla', 18, NULL, '2023-10-11 08:46:28'),
(15, 'Balde de Los Torres', 18, NULL, '2023-10-11 08:46:28'),
(16, 'Balde de Quines', 18, NULL, '2023-10-11 08:46:28'),
(17, 'Balde de Retamo', 18, NULL, '2023-10-11 08:46:28'),
(18, 'Balde del Carmen', 18, NULL, '2023-10-11 08:46:28'),
(19, 'Baldecito', 18, NULL, '2023-10-11 08:46:28'),
(20, 'Baldecito de la Pampa', 18, NULL, '2023-10-11 08:46:28'),
(21, 'Baldecito de los Torres', 18, NULL, '2023-10-11 08:46:28'),
(22, 'Bañadito Viejo', 18, NULL, '2023-10-11 08:46:28'),
(23, 'Bañado de Cautana', 18, NULL, '2023-10-11 08:46:28'),
(24, 'Barrancas Altas', 18, NULL, '2023-10-11 08:46:28'),
(25, 'Batavia', 18, NULL, '2023-10-11 08:46:28'),
(26, 'Beazley', 18, NULL, '2023-10-11 08:46:28'),
(27, 'Bella Estancia', 18, NULL, '2023-10-11 08:46:28'),
(28, 'Boca del Tigre', 18, NULL, '2023-10-11 08:46:28'),
(29, 'Buen Orden', 18, NULL, '2023-10-11 08:46:28'),
(30, 'Buena Esperanza', 18, NULL, '2023-10-11 08:46:28'),
(31, 'Buenos Aires', 18, NULL, '2023-10-11 08:46:28'),
(32, 'Cabeza de Novillo', 18, NULL, '2023-10-11 08:46:28'),
(33, 'Cabeza de Vaca', 18, NULL, '2023-10-11 08:46:28'),
(34, 'Cafferata - Varela', 18, NULL, '2023-10-11 08:46:28'),
(35, 'Canal Norte', 18, NULL, '2023-10-11 08:46:28'),
(36, 'Candelaria', 18, NULL, '2023-10-11 08:46:28'),
(37, 'Cañada de la Negra', 18, NULL, '2023-10-11 08:46:28'),
(38, 'Cañada Honda', 18, NULL, '2023-10-11 08:46:28'),
(39, 'Cañada Honda de Guzman', 18, NULL, '2023-10-11 08:46:28'),
(40, 'Carolina', 18, NULL, '2023-10-11 08:46:28'),
(41, 'Carpintería', 18, NULL, '2023-10-11 08:46:28'),
(42, 'Casa de los Tigres', 18, NULL, '2023-10-11 08:46:28'),
(43, 'Casa de San Luis', 18, NULL, '2023-10-11 08:46:28'),
(44, 'Casimiro Gómez', 18, NULL, '2023-10-11 08:46:28'),
(45, 'Cazador', 18, NULL, '2023-10-11 08:46:28'),
(46, 'Cerrito Blanco', 18, NULL, '2023-10-11 08:46:28'),
(47, 'Cerro de Oro', 18, NULL, '2023-10-11 08:46:28'),
(48, 'Cerros Largos', 18, NULL, '2023-10-11 08:46:28'),
(49, 'Charlone', 18, NULL, '2023-10-11 08:46:28'),
(50, 'Chischaca', 18, NULL, '2023-10-11 08:46:28'),
(51, 'Chosmes', 18, NULL, '2023-10-11 08:46:28'),
(52, 'Colonia Don Antonio', 18, NULL, '2023-10-11 08:46:28'),
(53, 'Colonia Zubelzu', 18, NULL, '2023-10-11 08:46:28'),
(54, 'Comunidad Huarpe', 18, NULL, '2023-10-11 08:46:28'),
(55, 'Comunidad Ranquel', 18, NULL, '2023-10-11 08:46:28'),
(56, 'Concarán', 18, NULL, '2023-10-11 08:46:28'),
(57, 'Córdoba', 18, NULL, '2023-10-11 08:46:28'),
(58, 'Coronel Alzogaray', 18, NULL, '2023-10-11 08:46:28'),
(59, 'Cortaderas', 18, NULL, '2023-10-11 08:46:28'),
(60, 'Cruz de Piedra', 18, NULL, '2023-10-11 08:46:28'),
(61, 'Desaguadero', 18, NULL, '2023-10-11 08:46:28'),
(62, 'Dónovan', 18, NULL, '2023-10-11 08:46:28'),
(63, 'El  Fortin', 18, NULL, '2023-10-11 08:46:28'),
(64, 'El Algarrobal (Ayacucho)', 18, NULL, '2023-10-11 08:46:28'),
(65, 'El Algarrobal (Chacabuco)', 18, NULL, '2023-10-11 08:46:28'),
(66, 'El Arenal', 18, NULL, '2023-10-11 08:46:28'),
(67, 'El Baldecito-Cerros Largos', 18, NULL, '2023-10-11 08:46:28'),
(68, 'El Barrial', 18, NULL, '2023-10-11 08:46:28'),
(69, 'El Cadillo', 18, NULL, '2023-10-11 08:46:28'),
(70, 'El Calden', 18, NULL, '2023-10-11 08:46:28'),
(71, 'El Chañar', 18, NULL, '2023-10-11 08:46:28'),
(72, 'El Charabón', 18, NULL, '2023-10-11 08:46:28'),
(73, 'El Chorrillo', 18, NULL, '2023-10-11 08:46:28'),
(74, 'El Datilero', 18, NULL, '2023-10-11 08:46:28'),
(75, 'El Duraznito', 18, NULL, '2023-10-11 08:46:28'),
(76, 'El Durazno', 18, NULL, '2023-10-11 08:46:28'),
(77, 'El Durazno Bajo', 18, NULL, '2023-10-11 08:46:28'),
(78, 'El Estanquito', 18, NULL, '2023-10-11 08:46:28'),
(79, 'El Fortín', 18, NULL, '2023-10-11 08:46:28'),
(80, 'El Gigante - La Calera', 18, NULL, '2023-10-11 08:46:28'),
(81, 'El Guanaco', 18, NULL, '2023-10-11 08:46:28'),
(82, 'El Injerto', 18, NULL, '2023-10-11 08:46:28'),
(83, 'El Milagro', 18, NULL, '2023-10-11 08:46:28'),
(84, 'El Molino', 18, NULL, '2023-10-11 08:46:28'),
(85, 'El Morro', 18, NULL, '2023-10-11 08:46:28'),
(86, 'El Paraguay', 18, NULL, '2023-10-11 08:46:28'),
(87, 'El Paraíso', 18, NULL, '2023-10-11 08:46:28'),
(88, 'El Puesto', 18, NULL, '2023-10-11 08:46:28'),
(89, 'El Ramblón', 18, NULL, '2023-10-11 08:46:28'),
(90, 'El Recodo', 18, NULL, '2023-10-11 08:46:28'),
(91, 'El Recuerdo', 18, NULL, '2023-10-11 08:46:28'),
(92, 'El Retamo', 18, NULL, '2023-10-11 08:46:28'),
(93, 'El Rincón', 18, NULL, '2023-10-11 08:46:28'),
(94, 'El Saladillo', 18, NULL, '2023-10-11 08:46:28'),
(95, 'El Sauce', 18, NULL, '2023-10-11 08:46:28'),
(96, 'El Señuelo', 18, NULL, '2023-10-11 08:46:28'),
(97, 'El Sifón', 18, NULL, '2023-10-11 08:46:28'),
(98, 'El Tala', 18, NULL, '2023-10-11 08:46:28'),
(99, 'El Trapiche', 18, NULL, '2023-10-11 08:46:28'),
(100, 'El Vinagrillo', 18, NULL, '2023-10-11 08:46:28'),
(101, 'El Volcán', 18, NULL, '2023-10-11 08:46:28'),
(102, 'El Zapallar', 18, NULL, '2023-10-11 08:46:28'),
(103, 'Eleodoro Lobos', 18, NULL, '2023-10-11 08:46:28'),
(104, 'Embalse San Felipe', 18, NULL, '2023-10-11 08:46:28'),
(105, 'Estancia de Amieva', 18, NULL, '2023-10-11 08:46:28'),
(106, 'Estancia Grande', 18, NULL, '2023-10-11 08:46:28'),
(107, 'Estancia las Lagunitas', 18, NULL, '2023-10-11 08:46:28'),
(108, 'Fortín El Patria', 18, NULL, '2023-10-11 08:46:28'),
(109, 'Fortuna', 18, NULL, '2023-10-11 08:46:28'),
(110, 'Foster', 18, NULL, '2023-10-11 08:46:28'),
(111, 'Fraga', 18, NULL, '2023-10-11 08:46:28'),
(112, 'Gral. Urquiza', 18, NULL, '2023-10-11 08:46:28'),
(113, 'Hualtarán', 18, NULL, '2023-10-11 08:46:28'),
(114, 'Huertas', 18, NULL, '2023-10-11 08:46:28'),
(115, 'Inti Huasi', 18, NULL, '2023-10-11 08:46:28'),
(116, 'Jarilla', 18, NULL, '2023-10-11 08:46:28'),
(117, 'Juan Jorba', 18, NULL, '2023-10-11 08:46:28'),
(118, 'Juan Llerena', 18, NULL, '2023-10-11 08:46:28'),
(119, 'Juan W. Gez', 18, NULL, '2023-10-11 08:46:28'),
(120, 'Juana Koslay', 18, NULL, '2023-10-11 08:46:28'),
(121, 'Justo Daract', 18, NULL, '2023-10-11 08:46:28'),
(122, 'La Aguada', 18, NULL, '2023-10-11 08:46:28'),
(123, 'La Aguada de Belgrano', 18, NULL, '2023-10-11 08:46:28'),
(124, 'La Aguada de Junin', 18, NULL, '2023-10-11 08:46:28'),
(125, 'La Aguada de Pedernera', 18, NULL, '2023-10-11 08:46:28'),
(126, 'La Angelina', 18, NULL, '2023-10-11 08:46:28'),
(127, 'La Aveniencia', 18, NULL, '2023-10-11 08:46:28'),
(128, 'La Bajada (Ayacucho)', 18, NULL, '2023-10-11 08:46:28'),
(129, 'La Bajada (Pringles)', 18, NULL, '2023-10-11 08:46:28'),
(130, 'La Botija', 18, NULL, '2023-10-11 08:46:28'),
(131, 'La Brea', 18, NULL, '2023-10-11 08:46:28'),
(132, 'La Cañada', 18, NULL, '2023-10-11 08:46:28'),
(133, 'La Celestina', 18, NULL, '2023-10-11 08:46:28'),
(134, 'La Cocha', 18, NULL, '2023-10-11 08:46:28'),
(135, 'La Cumbre', 18, NULL, '2023-10-11 08:46:28'),
(136, 'La Esquina', 18, NULL, '2023-10-11 08:46:28'),
(137, 'La Florida', 18, NULL, '2023-10-11 08:46:28'),
(138, 'La Lomita', 18, NULL, '2023-10-11 08:46:28'),
(139, 'La Majada', 18, NULL, '2023-10-11 08:46:28'),
(140, 'La Maroma', 18, NULL, '2023-10-11 08:46:28'),
(141, 'La Médula', 18, NULL, '2023-10-11 08:46:28'),
(142, 'La Paz - Córdoba', 18, NULL, '2023-10-11 08:46:28'),
(143, 'La Petra', 18, NULL, '2023-10-11 08:46:28'),
(144, 'La Punilla', 18, NULL, '2023-10-11 08:46:28'),
(145, 'La Punta', 18, NULL, '2023-10-11 08:46:28'),
(146, 'La Ramada', 18, NULL, '2023-10-11 08:46:28'),
(147, 'La Represita', 18, NULL, '2023-10-11 08:46:28'),
(148, 'La Salvadora', 18, NULL, '2023-10-11 08:46:28'),
(149, 'La Sirena', 18, NULL, '2023-10-11 08:46:28'),
(150, 'La Toma', 18, NULL, '2023-10-11 08:46:28'),
(151, 'La Totora', 18, NULL, '2023-10-11 08:46:28'),
(152, 'La tranca', 18, NULL, '2023-10-11 08:46:28'),
(153, 'La Verde', 18, NULL, '2023-10-11 08:46:28'),
(154, 'La Vertiente', 18, NULL, '2023-10-11 08:46:28'),
(155, 'La Vertiente de Belgrano', 18, NULL, '2023-10-11 08:46:28'),
(156, 'Lafinur', 18, NULL, '2023-10-11 08:46:28'),
(157, 'Laguna Larga', 18, NULL, '2023-10-11 08:46:28'),
(158, 'Las Aguadas', 18, NULL, '2023-10-11 08:46:28'),
(159, 'Las Barrancas', 18, NULL, '2023-10-11 08:46:28'),
(160, 'Las Barranquitas', 18, NULL, '2023-10-11 08:46:28'),
(161, 'Las Caldenadas', 18, NULL, '2023-10-11 08:46:28'),
(162, 'Las Cañas', 18, NULL, '2023-10-11 08:46:28'),
(163, 'Las Chacras', 18, NULL, '2023-10-11 08:46:28'),
(164, 'Las Chacras Juana Koslay', 18, NULL, '2023-10-11 08:46:28'),
(165, 'Las Chilcas', 18, NULL, '2023-10-11 08:46:28'),
(166, 'Las Huertas', 18, NULL, '2023-10-11 08:46:28'),
(167, 'Las Isletas', 18, NULL, '2023-10-11 08:46:28'),
(168, 'Las Lagunas', 18, NULL, '2023-10-11 08:46:28'),
(169, 'Las Lagunitas', 18, NULL, '2023-10-11 08:46:28'),
(170, 'Las Lagunitas de Ayacucho', 18, NULL, '2023-10-11 08:46:28'),
(171, 'Las Palomas', 18, NULL, '2023-10-11 08:46:28'),
(172, 'Las Pircas (Virorco)', 18, NULL, '2023-10-11 08:46:28'),
(173, 'Las Rosas', 18, NULL, '2023-10-11 08:46:28'),
(174, 'Las Vertientes de Belgrano', 18, NULL, '2023-10-11 08:46:28'),
(175, 'Las Vertientes de San Martin', 18, NULL, '2023-10-11 08:46:28'),
(176, 'Las Vizcacheras', 18, NULL, '2023-10-11 08:46:28'),
(177, 'Lavaisse', 18, NULL, '2023-10-11 08:46:28'),
(178, 'Leandro N Alem', 18, NULL, '2023-10-11 08:46:28'),
(179, 'Liborio Luna', 18, NULL, '2023-10-11 08:46:28'),
(180, 'Loma Alta', 18, NULL, '2023-10-11 08:46:28'),
(181, 'Lomas Blancas', 18, NULL, '2023-10-11 08:46:28'),
(182, 'Los Algarrobos Blancos', 18, NULL, '2023-10-11 08:46:28'),
(183, 'Los Cajones', 18, NULL, '2023-10-11 08:46:28'),
(184, 'Los Chañares', 18, NULL, '2023-10-11 08:46:28'),
(185, 'Los Chañares', 18, NULL, '2023-10-11 08:46:28'),
(186, 'Los Comederos', 18, NULL, '2023-10-11 08:46:28'),
(187, 'Los Lobos', 18, NULL, '2023-10-11 08:46:28'),
(188, 'Los Molles', 18, NULL, '2023-10-11 08:46:28'),
(189, 'Los Overos', 18, NULL, '2023-10-11 08:46:28'),
(190, 'Los Pejes', 18, NULL, '2023-10-11 08:46:28'),
(191, 'Los Piquillines', 18, NULL, '2023-10-11 08:46:28'),
(192, 'Los Puquios', 18, NULL, '2023-10-11 08:46:28'),
(193, 'Los Quebrachos', 18, NULL, '2023-10-11 08:46:28'),
(194, 'Los Quemados', 18, NULL, '2023-10-11 08:46:28'),
(195, 'Los Ramblones', 18, NULL, '2023-10-11 08:46:28'),
(196, 'Luján', 18, NULL, '2023-10-11 08:46:28'),
(197, 'Mármol Verde', 18, NULL, '2023-10-11 08:46:28'),
(198, 'Martín de Loyola', 18, NULL, '2023-10-11 08:46:28'),
(199, 'Masmota', 18, NULL, '2023-10-11 08:46:28'),
(200, 'Merlo', 18, NULL, '2023-10-11 08:46:28'),
(201, 'Mesilla del Cura', 18, NULL, '2023-10-11 08:46:28'),
(202, 'Nahuel Mapá', 18, NULL, '2023-10-11 08:46:28'),
(203, 'Naranjo Esquino', 18, NULL, '2023-10-11 08:46:28'),
(204, 'Naschel', 18, NULL, '2023-10-11 08:46:28'),
(205, 'Navia', 18, NULL, '2023-10-11 08:46:28'),
(206, 'Nogolí', 18, NULL, '2023-10-11 08:46:28'),
(207, 'Nueva Escocia', 18, NULL, '2023-10-11 08:46:28'),
(208, 'Nueva Galia', 18, NULL, '2023-10-11 08:46:28'),
(209, 'Ojo Del Río', 18, NULL, '2023-10-11 08:46:28'),
(210, 'Pampa del Tamborero', 18, NULL, '2023-10-11 08:46:28'),
(211, 'Pampa Grande', 18, NULL, '2023-10-11 08:46:28'),
(212, 'Papagayos', 18, NULL, '2023-10-11 08:46:28'),
(213, 'Paraje el Churrasco', 18, NULL, '2023-10-11 08:46:28'),
(214, 'Paso del Rey', 18, NULL, '2023-10-11 08:46:28'),
(215, 'Paso Grande', 18, NULL, '2023-10-11 08:46:28'),
(216, 'Piedra Blanca', 18, NULL, '2023-10-11 08:46:28'),
(217, 'Piedra Bola', 18, NULL, '2023-10-11 08:46:28'),
(218, 'Piedras Anchas', 18, NULL, '2023-10-11 08:46:28'),
(219, 'Pioneros Siglo XXI', 18, NULL, '2023-10-11 08:46:28'),
(220, 'Poste de Hierro', 18, NULL, '2023-10-11 08:46:28'),
(221, 'Potrerillos', 18, NULL, '2023-10-11 08:46:28'),
(222, 'Potrero de los Funes', 18, NULL, '2023-10-11 08:46:28'),
(223, 'Pozo Cavado', 18, NULL, '2023-10-11 08:46:28'),
(224, 'Pozo del Carril', 18, NULL, '2023-10-11 08:46:28'),
(225, 'Pozo del Molle', 18, NULL, '2023-10-11 08:46:28'),
(226, 'Pozo del Tala', 18, NULL, '2023-10-11 08:46:28'),
(227, 'Puente la Horqueta', 18, NULL, '2023-10-11 08:46:28'),
(228, 'Puerta Colorada', 18, NULL, '2023-10-11 08:46:28'),
(229, 'Puesto Balzora', 18, NULL, '2023-10-11 08:46:28'),
(230, 'Punta de la Loma', 18, NULL, '2023-10-11 08:46:28'),
(231, 'Punta Del Agua', 18, NULL, '2023-10-11 08:46:28'),
(232, 'Quebrada de San Vicente', 18, NULL, '2023-10-11 08:46:28'),
(233, 'Quines', 18, NULL, '2023-10-11 08:46:28'),
(234, 'Renca', 18, NULL, '2023-10-11 08:46:28'),
(235, 'Represa del Carmen', 18, NULL, '2023-10-11 08:46:28'),
(236, 'Represa del Chañar', 18, NULL, '2023-10-11 08:46:28'),
(237, 'Rincón del Carmen', 18, NULL, '2023-10-11 08:46:28'),
(238, 'Río Grande', 18, NULL, '2023-10-11 08:46:28'),
(239, 'Río Juan Gómez', 18, NULL, '2023-10-11 08:46:28'),
(240, 'Río Quinto', 18, NULL, '2023-10-11 08:46:28'),
(241, 'Rodeo de Cadenas', 18, NULL, '2023-10-11 08:46:28'),
(242, 'Ruta Nac. 148 y Prov. 5', 18, NULL, '2023-10-11 08:46:28'),
(243, 'Ruta Nac. 7 Prov. 14', 18, NULL, '2023-10-11 08:46:28'),
(244, 'Saladillo', 18, NULL, '2023-10-11 08:46:28'),
(245, 'Salinas del Bebedero', 18, NULL, '2023-10-11 08:46:28'),
(246, 'San Antonio', 18, NULL, '2023-10-11 08:46:28'),
(247, 'San Felipe', 18, NULL, '2023-10-11 08:46:28'),
(248, 'San Fernando', 18, NULL, '2023-10-11 08:46:28'),
(249, 'San Francisco', 18, NULL, '2023-10-11 08:46:28'),
(250, 'San Ignacio', 18, NULL, '2023-10-11 08:46:28'),
(251, 'San Isidro', 18, NULL, '2023-10-11 08:46:28'),
(252, 'San Jerónimo', 18, NULL, '2023-10-11 08:46:28'),
(253, 'San José de los Chañares', 18, NULL, '2023-10-11 08:46:28'),
(254, 'San José del Morro', 18, NULL, '2023-10-11 08:46:28'),
(255, 'San Luis', 18, NULL, '2023-10-11 08:46:28'),
(256, 'San Martín', 18, NULL, '2023-10-11 08:46:28'),
(257, 'San Martín del Alto Negro', 18, NULL, '2023-10-11 08:46:28'),
(258, 'San Miguel', 18, NULL, '2023-10-11 08:46:28'),
(259, 'San Miguel - Candelaria', 18, NULL, '2023-10-11 08:46:28'),
(260, 'San Pablo', 18, NULL, '2023-10-11 08:46:28'),
(261, 'San Pedro', 18, NULL, '2023-10-11 08:46:28'),
(262, 'San Roque', 18, NULL, '2023-10-11 08:46:28'),
(263, 'San Roque de Chipiscú', 18, NULL, '2023-10-11 08:46:28'),
(264, 'Santa  Isabel', 18, NULL, '2023-10-11 08:46:28'),
(265, 'Santa Ana', 18, NULL, '2023-10-11 08:46:28'),
(266, 'Santa Bárbara', 18, NULL, '2023-10-11 08:46:28'),
(267, 'Santa Isabel', 18, NULL, '2023-10-11 08:46:28'),
(268, 'Santa Martina', 18, NULL, '2023-10-11 08:46:28'),
(269, 'Santa Rosa', 18, NULL, '2023-10-11 08:46:28'),
(270, 'Santa Rosa del Cantantal', 18, NULL, '2023-10-11 08:46:28'),
(271, 'Santa Rosa del Conlara', 18, NULL, '2023-10-11 08:46:28'),
(272, 'Santa Rosa del Gigante', 18, NULL, '2023-10-11 08:46:28'),
(273, 'Santa Teresita', 18, NULL, '2023-10-11 08:46:28'),
(274, 'Santo Domingo', 18, NULL, '2023-10-11 08:46:28'),
(275, 'Suyuque Nuevo', 18, NULL, '2023-10-11 08:46:28'),
(276, 'Tala Verde', 18, NULL, '2023-10-11 08:46:28'),
(277, 'Talita', 18, NULL, '2023-10-11 08:46:28'),
(278, 'Tilisarao', 18, NULL, '2023-10-11 08:46:28'),
(279, 'Toro Negro', 18, NULL, '2023-10-11 08:46:28'),
(280, 'Travesía', 18, NULL, '2023-10-11 08:46:28'),
(281, 'Unión', 18, NULL, '2023-10-11 08:46:28'),
(282, 'Valle de Pancanta', 18, NULL, '2023-10-11 08:46:28'),
(283, 'Villa de la Quebrada', 18, NULL, '2023-10-11 08:46:28'),
(284, 'Villa del Carmen', 18, NULL, '2023-10-11 08:46:28'),
(285, 'Villa Gral Roca - Los Manantiales', 18, NULL, '2023-10-11 08:46:28'),
(286, 'Villa Larca', 18, NULL, '2023-10-11 08:46:28'),
(287, 'Villa Mercedes', 18, NULL, '2023-10-11 08:46:28'),
(288, 'Villa Praga', 18, NULL, '2023-10-11 08:46:28'),
(289, 'Villa Reynolds', 18, NULL, '2023-10-11 08:46:28'),
(290, 'Villa Salles', 18, NULL, '2023-10-11 08:46:28'),
(291, 'Zanjitas', 18, NULL, '2023-10-11 08:46:28'),
(292, 'Córdoba (capital de la provincia)', 5, NULL, '2023-10-11 08:51:22'),
(293, 'Villa Carlos Paz', 5, NULL, '2023-10-11 08:51:22'),
(294, 'Río Cuarto', 5, NULL, '2023-10-11 08:51:22'),
(295, 'Alta Gracia', 5, NULL, '2023-10-11 08:51:22'),
(296, 'Villa María', 5, NULL, '2023-10-11 08:51:22'),
(297, 'Jesús María', 5, NULL, '2023-10-11 08:51:22'),
(298, 'La Falda', 5, NULL, '2023-10-11 08:51:22'),
(299, 'Cosquín', 5, NULL, '2023-10-11 08:51:22'),
(300, 'Villa Allende', 5, NULL, '2023-10-11 08:51:22'),
(301, 'San Francisco', 5, NULL, '2023-10-11 08:51:22'),
(302, 'Bell Ville', 5, NULL, '2023-10-11 08:51:22'),
(303, 'Villa General Belgrano', 5, NULL, '2023-10-11 08:51:22'),
(304, 'San Marcos Sierras', 5, NULL, '2023-10-11 08:51:22'),
(305, 'Capilla del Monte', 5, NULL, '2023-10-11 08:51:22'),
(306, 'Villa Giardino', 5, NULL, '2023-10-11 08:51:22'),
(307, 'Colonia Caroya', 5, NULL, '2023-10-11 08:51:22'),
(308, 'Rio Tercero', 5, NULL, '2023-10-11 08:51:22'),
(309, 'Unquillo', 5, NULL, '2023-10-11 08:51:22'),
(310, 'Mina Clavero', 5, NULL, '2023-10-11 08:51:22'),
(311, 'Rio Ceballos', 5, NULL, '2023-10-11 08:51:22'),
(312, 'Santa Rosa (capital de la provincia)', 10, NULL, '2023-10-11 08:54:20'),
(313, 'General Pico', 10, NULL, '2023-10-11 08:54:20'),
(314, 'Toay', 10, NULL, '2023-10-11 08:54:20'),
(315, 'Eduardo Castex', 10, NULL, '2023-10-11 08:54:20'),
(316, 'General Acha', 10, NULL, '2023-10-11 08:54:20'),
(317, 'Victorica', 10, NULL, '2023-10-11 08:54:20'),
(318, 'Macachín', 10, NULL, '2023-10-11 08:54:20'),
(319, 'Quemú Quemú', 10, NULL, '2023-10-11 08:54:20'),
(320, 'Guatraché', 10, NULL, '2023-10-11 08:54:20'),
(321, 'Realicó', 10, NULL, '2023-10-11 08:54:20'),
(322, 'Santa Isabel', 10, NULL, '2023-10-11 08:54:20'),
(323, 'Parera', 10, NULL, '2023-10-11 08:54:20'),
(324, 'Bernasconi', 10, NULL, '2023-10-11 08:54:20'),
(325, 'Trenel', 10, NULL, '2023-10-11 08:54:20'),
(326, 'Jacinto Arauz', 10, NULL, '2023-10-11 08:54:20'),
(327, 'Winifreda', 10, NULL, '2023-10-11 08:54:20'),
(328, 'Catriló', 10, NULL, '2023-10-11 08:54:20'),
(329, 'Anguil', 10, NULL, '2023-10-11 08:54:20'),
(330, 'Intendente Alvear', 10, NULL, '2023-10-11 08:54:20'),
(331, 'Doblas', 10, NULL, '2023-10-11 08:54:20'),
(332, 'Mendoza (capital de la provincia)', 12, NULL, '2023-10-11 09:00:06'),
(333, 'Godoy Cruz', 12, NULL, '2023-10-11 09:00:06'),
(334, 'Guaymallén', 12, NULL, '2023-10-11 09:00:06'),
(335, 'Las Heras', 12, NULL, '2023-10-11 09:00:06'),
(336, 'Maipú', 12, NULL, '2023-10-11 09:00:06'),
(337, 'San Rafael', 12, NULL, '2023-10-11 09:00:06'),
(338, 'Luján de Cuyo', 12, NULL, '2023-10-11 09:00:06'),
(339, 'Malargüe', 12, NULL, '2023-10-11 09:00:06'),
(340, 'San Martín', 12, NULL, '2023-10-11 09:00:06'),
(341, 'Tunuyán', 12, NULL, '2023-10-11 09:00:06'),
(342, 'Rivadavia', 12, NULL, '2023-10-11 09:00:06'),
(343, 'General Alvear', 12, NULL, '2023-10-11 09:00:06'),
(344, 'Junín', 12, NULL, '2023-10-11 09:00:06'),
(345, 'La Paz', 12, NULL, '2023-10-11 09:00:06'),
(346, 'Tupungato', 12, NULL, '2023-10-11 09:00:06'),
(347, 'Lavalle', 12, NULL, '2023-10-11 09:00:06'),
(348, 'General San Martín', 12, NULL, '2023-10-11 09:00:06'),
(349, 'San Carlos', 12, NULL, '2023-10-11 09:00:06'),
(350, 'Santa Rosa', 12, NULL, '2023-10-11 09:00:06'),
(351, 'Las Heras', 12, NULL, '2023-10-11 09:00:06'),
(352, 'San Juan (capital de la provincia)', 17, NULL, '2023-10-11 09:21:50'),
(353, 'Rawson', 17, NULL, '2023-10-11 09:21:50'),
(354, 'Pocito', 17, NULL, '2023-10-11 09:21:50'),
(355, 'Rivadavia', 17, NULL, '2023-10-11 09:21:50'),
(356, 'Chimbas', 17, NULL, '2023-10-11 09:21:50'),
(357, 'Santa Lucía', 17, NULL, '2023-10-11 09:21:50'),
(358, 'Caucete', 17, NULL, '2023-10-11 09:21:50'),
(359, 'Albardón', 17, NULL, '2023-10-11 09:21:50'),
(360, '9 de Julio', 17, NULL, '2023-10-11 09:21:50'),
(361, '25 de Mayo', 17, NULL, '2023-10-11 09:21:50'),
(362, 'Sarmiento', 17, NULL, '2023-10-11 09:21:50'),
(363, 'Valle Fértil', 17, NULL, '2023-10-11 09:21:50'),
(364, 'Iglesia', 17, NULL, '2023-10-11 09:21:50'),
(365, 'Jáchal', 17, NULL, '2023-10-11 09:21:50'),
(366, 'Calingasta', 17, NULL, '2023-10-11 09:21:50'),
(367, 'Ullum', 17, NULL, '2023-10-11 09:21:50'),
(368, 'Zonda', 17, NULL, '2023-10-11 09:21:50'),
(369, 'San Martín', 17, NULL, '2023-10-11 09:21:50');

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

DROP TABLE IF EXISTS `doctors`;
CREATE TABLE `doctors` (
  `id` int(10) UNSIGNED NOT NULL,
  `first_name` varchar(80) NOT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `date_update_at` datetime DEFAULT NULL,
  `date_create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `license` varchar(45) NOT NULL,
  `phone` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar ciudades';

--
-- Dumping data for table `doctors`
--

INSERT INTO `doctors` (`id`, `first_name`, `last_name`, `date_update_at`, `date_create_at`, `license`, `phone`) VALUES
(1, 'Juan', 'Perez', NULL, '2023-10-21 02:22:44', '000001', 555555);

-- --------------------------------------------------------

--
-- Table structure for table `exams`
--

DROP TABLE IF EXISTS `exams`;
CREATE TABLE `exams` (
  `id` int(10) UNSIGNED NOT NULL,
  `nbu` int(10) UNSIGNED NOT NULL,
  `detail` varchar(250) NOT NULL,
  `common` varchar(150) default NULL,
  `create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `update_at` datetime DEFAULT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `exams`
--

INSERT INTO `exams` (`nbu`, `detail`, `common`, `create_at`, `update_at`, `status`) VALUES
(660002, 'ACETONURIA', '', '2023-10-03 09:15:59', NULL, 1),
(660004, 'ACIDIMETRIA GASTRICA CURVA DE', '', '2023-10-03 09:15:59', NULL, 0),
(660005, 'ACIDO BASE ESTADO ACIDO BASE (EAB).', '', '2023-10-03 09:15:59', NULL, 0),
(660006, 'ACTH - HORMONA ADRENOCORTICOTROFINA.', '', '2023-10-03 09:15:59', NULL, 0),
(660007, 'ADDIS RECUENTO DE', '', '2023-10-03 09:15:59', NULL, 0),
(660013, 'AGLUTININAS ANTI RH MEDIO SALINO ALBUMINOSO COOMBS INDIRECTA', '', '2023-10-03 09:15:59', NULL, 0),
(660014, 'AGLUTININAS DEL SISTEMAS ABO. MEDIO SALINO ALBUMINOSO. CUANTITATIVO', '', '2023-10-03 09:15:59', NULL, 0),
(660016, 'ALCOHOL DEHIDROGENASA -ADH-', '', '2023-10-03 09:15:59', NULL, 0),
(660017, 'ALCOHOLEMIA', '', '2023-10-03 09:15:59', NULL, 0),
(660018, 'ALDOLASA', '', '2023-10-03 09:15:59', NULL, 0),
(660019, 'ALDOSTERONA PLASMATICA', '', '2023-10-03 09:15:59', NULL, 0),
(660020, 'ALFA FETO PROTEINAS', '', '2023-10-03 09:15:59', NULL, 0),
(660022, 'AMILASEMIA O AMILASA SERICA', '', '2023-10-03 09:15:59', NULL, 1),
(660023, 'AMILASURIA O AMILASA URINARIA', '', '2023-10-03 09:15:59', NULL, 0),
(660025, 'AMINOACIDOS FRACCIONADOS (CROMATOGRAFIA - POR FRACCION) -CUALITATIVO', '', '2023-10-03 09:15:59', NULL, 0),
(660027, 'AMINOACIDURIA FRACCIONADA (CROMATOGRAFIA - POR FRACCION) -CUALITATIVO', '', '2023-10-03 09:15:59', NULL, 0),
(660028, 'AMNIOTICO LIQUIDO CELULAS NARANJAS', '', '2023-10-03 09:15:59', NULL, 1),
(660029, 'AMNIOTICO LIQUIDO ESPECTROFOTOMETRIA -TEST DE LISLEY-', '', '2023-10-03 09:15:59', NULL, 1),
(660030, 'AMNIOTICO LIQUIDO LECITINA ESFINGOMIELINA', '', '2023-10-03 09:15:59', NULL, 0),
(660031, 'AMONEMIA', '', '2023-10-03 09:15:59', NULL, 0),
(660032, 'AMP CICLICO', '', '2023-10-03 09:15:59', NULL, 0),
(660033, 'ANGIOTENSINA I O II (C/DET.)', '', '2023-10-03 09:15:59', NULL, 0),
(660035, 'ANTIBIOGRAMA', '', '2023-10-03 09:15:59', NULL, 0),
(660036, 'ANTIBIOGRAMA BACILO DE KOCH SIETE ANTIBIOTICOS', '', '2023-10-03 09:15:59', NULL, 0),
(660040, 'ANTICUERPOS ANTIGLOMERULAR  (IFI)', '', '2023-10-03 09:15:59', NULL, 0),
(660041, 'ANTICUERPOS ANTIMENBRANA BASAL (IFI)', '', '2023-10-03 09:15:59', NULL, 0),
(660042, 'ANTICUERPO ANTIMUSCULO LISO (IFI)', '', '2023-10-03 09:15:59', NULL, 0),
(660044, 'ANTICUERPOS ANTIFRACCION MICROSOMAL DE TIROIDES (IFI)', '', '2023-10-03 09:15:59', NULL, 0),
(660046, 'ANTICUERPOS ANTITIROGLOBULINA', '', '2023-10-03 09:15:59', NULL, 0),
(660049, 'ANTIDESIXIRRIBONUCLEASA - ADNEASA - ANTI-DNA.', '', '2023-10-03 09:15:59', NULL, 0),
(660051, 'ANTIESTREPTOLISINAS  O  (ASTO - AELO)', '', '2023-10-03 09:15:59', NULL, 0),
(660052, 'ANTIESTREPTOQUINASA', '', '2023-10-03 09:15:59', NULL, 0),
(660054, 'ANTIHIALURONIDASA', '', '2023-10-03 09:15:59', NULL, 0),
(660055, 'ANTIMITOCONDRIALES ANTICUERPOS', '', '2023-10-03 09:15:59', NULL, 0),
(660056, 'ANTINUCLEARES ANTICUERPOS - FAN', '', '2023-10-03 09:15:59', NULL, 0),
(660057, 'ANTITRIPSINA ALFA 1 - LIQ. PLEURAL O MAT. FECAL O SERICA - C/U - (POR I.D.-CUANTITATIVA)', '', '2023-10-03 09:15:59', NULL, 0),
(660058, 'ANTITROMBINA III - CON CALIBRACION DE TRES (3) PUNTOS.', '', '2023-10-03 09:15:59', NULL, 0),
(660059, 'ARSENICO - SERICO O URINARIO.', '', '2023-10-03 09:15:59', NULL, 0),
(660060, 'ASCORBICO ACIDO', '', '2023-10-03 09:15:59', NULL, 0),
(660063, 'ANTICUERPOS ANTI- HIV (ELISA)', '', '2023-10-03 09:15:59', NULL, 0),
(660064, 'ANTICUERPOS ANTI- HIV (A.D.)', '', '2023-10-03 09:15:59', NULL, 0),
(660101, 'BACILOSCOPIA DIRECTA - ZIEHL NEELSEN (POR MUESTRA)', '', '2023-10-03 09:15:59', NULL, 0),
(660102, 'BACILOSCOPIA DIRECTA Y CULTIVO (POR MUESTRA)', '', '2023-10-03 09:15:59', NULL, 1),
(660103, 'BACILOSCOPIA (IFI - POR MUESTRA)', '', '2023-10-03 09:15:59', NULL, 0),
(660104, 'BACTERIOLOGIA DIRECTA (COLORACION DE GRAM)', '', '2023-10-03 09:15:59', NULL, 0),
(660105, 'BACTERIOLOGIA DIRECTA CULTIVO CON IDENTIFICACION DEL GERMEN', '', '2023-10-03 09:15:59', NULL, 0),
(660107, 'BARBITURICOS - URINARIOS.', '', '2023-10-03 09:15:59', NULL, 0),
(660109, 'BICARBONATO', '', '2023-10-03 09:15:59', NULL, 0),
(660110, 'BILIRRUBINEMIA TOTAL DIRECTA E INDIRECTA', '', '2023-10-03 09:15:59', NULL, 0),
(660111, 'BILIRRUBINURIA', '', '2023-10-03 09:15:59', NULL, 0),
(660131, 'CADENA LIVIANA KAPPA Y LAMBDA - SERICO O URINARIO.', '', '2023-10-03 09:15:59', NULL, 0),
(660132, 'CADMIO - URINARIO.', '', '2023-10-03 09:15:59', NULL, 0),
(660133, 'CALCEMIA TOTAL', '', '2023-10-03 09:15:59', NULL, 1),
(660134, 'CALCIO IONICO', '', '2023-10-03 09:15:59', NULL, 0),
(660136, 'CALCIO - URINARIO.', '', '2023-10-03 09:15:59', NULL, 0),
(660137, 'CALCITONINA - SERICA.', '', '2023-10-03 09:15:59', NULL, 0),
(660138, 'CALCULO URINARIO EXAMEN FISICO QUIMICO', '', '2023-10-03 09:15:59', NULL, 0),
(660139, 'CARBONICO ANHIDRIDO PCO2', '', '2023-10-03 09:15:59', NULL, 0),
(660140, 'CARIOTIPO MAPA CROMOSOMICO', '', '2023-10-03 09:15:59', NULL, 0),
(660141, 'CAROTENO BETA EN SANGRE', '', '2023-10-03 09:15:59', NULL, 0),
(660143, 'CATECOLAMINAS (ADRENALINA / NORADRENALINA) PLASMATICAS / URINARIAS C/U', '', '2023-10-03 09:15:59', NULL, 0),
(660144, 'CARCINOEMBRIONARIO ANTIGENO ( CEA )', '', '2023-10-03 09:15:59', NULL, 1),
(660148, 'CELULAS NEOPLASICAS - LIQUIDOS EXUDADOS TRASUDADOS.', '', '2023-10-03 09:15:59', NULL, 1),
(660150, 'CEREBROSIDOS (CROMATOGRAFICO).', '', '2023-10-03 09:15:59', NULL, 1),
(660151, 'CERULOPLASMINA', '', '2023-10-03 09:15:59', NULL, 1),
(660152, 'CETOGENOESTEROIDES - URINARIOS.', '', '2023-10-03 09:15:59', NULL, 1),
(660154, 'CETONEMIA', '', '2023-10-03 09:15:59', NULL, 1),
(660160, '17 CETOESTEROIDES PRUEBA O RESPUESTA DE LOS A LA INHIBICION CON DEXAMETASONA Y ESTIMULACION CON GONADOTROFINAS CORIONICAS', '', '2023-10-03 09:15:59', NULL, 1),
(660164, 'CITOLOGIA VAGINAL HORMONAL 1 MUESTRA', '', '2023-10-03 09:15:59', NULL, 0),
(660167, 'CITRICO ACIDO - LIQUIDO SEMINAL.', '', '2023-10-03 09:15:59', NULL, 0),
(660168, 'CLORO PLASMATICO', '', '2023-10-03 09:15:59', NULL, 0),
(660169, 'COAG. Y SANGRIA TIEMPO DE', '', '2023-10-03 09:15:59', NULL, 0),
(660170, 'COAGULO RETRACCION DEL', '', '2023-10-03 09:15:59', NULL, 0),
(660171, 'COAGULOGRAMA', '', '2023-10-03 09:15:59', NULL, 0),
(660172, 'COBRE - SERICO.', '', '2023-10-03 09:15:59', NULL, 0),
(660173, 'COCAINA (INMUNOCROMATOGRAFIA/CROMATOGRAFICO)', '', '2023-10-03 09:15:59', NULL, 0),
(660174, 'COLESTEROL TOTAL', '', '2023-10-03 09:15:59', NULL, 0),
(660176, 'COLONIAS RECUENTO DE', '', '2023-10-03 09:15:59', NULL, 0),
(660177, 'COMPATIBILIDAD - SANGRE MATERNA.', '', '2023-10-03 09:15:59', NULL, 0),
(660178, 'COMPATIBILIDAD MATRIMONIAL - SANGUINEA EN CONYUGES.', '', '2023-10-03 09:15:59', NULL, 0),
(660179, 'COMPLEMENTO ACTIVIDAD TOTAL', '', '2023-10-03 09:15:59', NULL, 0),
(660180, 'COMPLEMENTO VALORACION INMUNOQUIMICA C1Q C15 C3 C4 C5 C7 C8', '', '2023-10-03 09:15:59', NULL, 0),
(660181, 'CONCENTRACION DE LIQUIDOS BIOLOGICOS', '', '2023-10-03 09:15:59', NULL, 1),
(660182, 'CONCENTRACION PRUEBA DE LA - FUNCION RENAL -', '', '2023-10-03 09:15:59', NULL, 1),
(660184, 'COOMBS DIRECTA PRUEBA', '', '2023-10-03 09:15:59', NULL, 0),
(660186, 'COOMBS INDIRECTA O RH VARIEDAD Dµ', '', '2023-10-03 09:15:59', NULL, 0),
(660187, 'COPROCULTIVO', '', '2023-10-03 09:15:59', NULL, 0),
(660188, 'COPROPORFIRINAS - MATERIA FECAL', '', '2023-10-03 09:15:59', NULL, 1),
(660189, 'CORTISOL PLASMATICO', '', '2023-10-03 09:15:59', NULL, 0),
(660190, 'CREATINQUINASA -CPK-', '', '2023-10-03 09:15:59', NULL, 0),
(660191, 'CREATINA ORINA O SANGRE', '', '2023-10-03 09:15:59', NULL, 0),
(660192, 'CREATININA ORINA O SANGRE', '', '2023-10-03 09:15:59', NULL, 0),
(660193, 'CREATININA CLEARENCE DE DEPURACION', '', '2023-10-03 09:15:59', NULL, 1),
(660194, 'CRIOAGLUTININA', '', '2023-10-03 09:15:59', NULL, 0),
(660195, 'CRIOGLOBULINAS', '', '2023-10-03 09:15:59', NULL, 0),
(660196, 'CROMATINA SEXUAL', '', '2023-10-03 09:15:59', NULL, 0),
(660241, 'CHAGAS AGLUTINACION DIRECTA (AD)', '', '2023-10-03 09:15:59', NULL, 0),
(660242, 'CHAGAS FIJACION DE COMPLEMENTO (HAI)', '', '2023-10-03 09:15:59', NULL, 0),
(660243, 'CHAGAS INMUNOFLUORESCENCIA (IFI / ELISA)', '', '2023-10-03 09:15:59', NULL, 1),
(660244, 'CHAGAS PARASITEMIA.', '', '2023-10-03 09:15:59', NULL, 0),
(660246, 'CHAGAS SEROLOGIA - CONFIRMATORIO (HAI Y ELISA O HAI E IFI)', '', '2023-10-03 09:15:59', NULL, 0),
(660261, 'DAVIDSON DIFERENCIAL PRUEBA', '', '2023-10-03 09:15:59', NULL, 0),
(660262, 'DEHIDROEPIANDROSTERONA SULFATO - DHEA-S.', '', '2023-10-03 09:15:59', NULL, 0),
(660263, 'DERMATOFITOS INTRADERMOREACCION', '', '2023-10-03 09:15:59', NULL, 0),
(660268, 'DIGOXIN', '', '2023-10-03 09:15:59', NULL, 0),
(660269, 'DISACARIDASAS', '', '2023-10-03 09:15:59', NULL, 0),
(660272, 'DOMICILIO EN RADIO URBANO - HASTA DOS (2) KMS.', '', '2023-10-03 09:15:59', NULL, 0),
(660273, 'DOMICILIO FUERA DE RADIO URBANO O MAS DE DOS (2) KMS.', '', '2023-10-03 09:15:59', NULL, 0),
(660293, 'EMBARAZO REACCION INMUNOLOGICA PARA', '', '2023-10-03 09:15:59', NULL, 0),
(660295, 'EOSINOFILOS RECUENTO DE', '', '2023-10-03 09:15:59', NULL, 0),
(660296, 'ERITROBLASTOS PORCENTAJE DE', '', '2023-10-03 09:15:59', NULL, 1),
(660297, 'ERITROSEDIMENTACION', '', '2023-10-03 09:15:59', NULL, 0),
(660298, 'ESPERMOGRAMA', '', '2023-10-03 09:15:59', NULL, 0),
(660299, 'ESTRICNINA EN LIQUIDOS BIOLOGICOS', '', '2023-10-03 09:15:59', NULL, 0),
(660300, 'ESTRADIOL PLASMATICO', '', '2023-10-03 09:15:59', NULL, 0),
(660301, 'ESTRIOL URINARIO', '', '2023-10-03 09:15:59', NULL, 0),
(660302, 'ESTRIOL PLASMATICO', '', '2023-10-03 09:15:59', NULL, 0),
(660304, 'ESTROGENOS TOTALES', '', '2023-10-03 09:15:59', NULL, 0),
(660305, 'ESTRONA PLASMATICA', '', '2023-10-03 09:15:59', NULL, 0),
(660308, 'EUGLOBULINAS TEST DE', '', '2023-10-03 09:15:59', NULL, 0),
(660309, 'EXUDADO NASOFARINGEO CULTIVO.', '', '2023-10-03 09:15:59', NULL, 0),
(660331, 'FACTOR DE COAGULACION V', '', '2023-10-03 09:15:59', NULL, 0),
(660332, 'FACTOR DE COAGULACION VII', '', '2023-10-03 09:15:59', NULL, 0),
(660333, 'FACTOR DE COAGULACION VIII', '', '2023-10-03 09:15:59', NULL, 0),
(660334, 'FACTOR DE COAGULACION IX', '', '2023-10-03 09:15:59', NULL, 0),
(660335, 'FACTOR DE COAGULACION X', '', '2023-10-03 09:15:59', NULL, 0),
(660336, 'FACTOR DE MIGRACION LINFOCITARIA -MIF-', '', '2023-10-03 09:15:59', NULL, 0),
(660337, 'FENILALANINA', '', '2023-10-03 09:15:59', NULL, 0),
(660338, 'FENILCETONURIA', '', '2023-10-03 09:15:59', NULL, 1),
(660339, 'FENILALANINA SCREENING NEONATAL.', '', '2023-10-03 09:15:59', NULL, 0),
(660342, 'FENOTIAZINAS', '', '2023-10-03 09:15:59', NULL, 0),
(660343, 'FERREMIA', '', '2023-10-03 09:15:59', NULL, 0),
(660344, 'FIBRINOGENO PRODUCTOS DE DEGRADACION - PDF - PLASMATICO.', '', '2023-10-03 09:15:59', NULL, 0),
(660345, 'FIBRINOGENO EN SANGRE', '', '2023-10-03 09:15:59', NULL, 0),
(660349, 'FISICO QUIMICO EXAMEN. LIQUIDOS EXUDADOS TRASUDADOS. INCLUYE: ASPECTO CARACTERES CLORUROS PROTEINAS RIVOLTA Y GLUCOSA', '', '2023-10-03 09:15:59', NULL, 0),
(660350, 'FLUOREMIA', '', '2023-10-03 09:15:59', NULL, 0),
(660351, 'FLUORURIA', '', '2023-10-03 09:15:59', NULL, 0),
(660352, 'FOLICO ACIDO .', '', '2023-10-03 09:15:59', NULL, 0),
(660353, 'FONDO OSCURO', '', '2023-10-03 09:15:59', NULL, 0),
(660354, 'FORMULA LEUCOCITARIA', '', '2023-10-03 09:15:59', NULL, 0),
(660355, 'FOSFATASA ACIDA PROSTATICA (EFM).', '', '2023-10-03 09:15:59', NULL, 0),
(660356, 'FOSFATASA ACIDA TOTAL (EFM).', '', '2023-10-03 09:15:59', NULL, 0),
(660357, 'FOSFATASA ALCALINA', '', '2023-10-03 09:15:59', NULL, 0),
(660360, 'FOSFATASA ALCALINA TERMOESTABLE .', '', '2023-10-03 09:15:59', NULL, 0),
(660361, 'FOSFATASA ALCALINA -ISOENZIMAS-', '', '2023-10-03 09:15:59', NULL, 0),
(660362, 'FOSFATEMIA', '', '2023-10-03 09:15:59', NULL, 0),
(660363, 'FOSFATURIA', '', '2023-10-03 09:15:59', NULL, 0),
(660364, 'FOSFO-EXOSA-ISOMERASA', '', '2023-10-03 09:15:59', NULL, 0),
(660366, 'FOSFORO CLEARENCE DEPURACION DE', '', '2023-10-03 09:15:59', NULL, 1),
(660369, 'FREI INTRADERMOREACCION DE', '', '2023-10-03 09:15:59', NULL, 0),
(660370, 'FSH (FOLICULO ESTIMULANTE HORMONA)', '', '2023-10-03 09:15:59', NULL, 0),
(660371, 'FTA/ ABS (IFI - ELISA) SIFILIS Y TPHA.', '', '2023-10-03 09:15:59', NULL, 0),
(660373, 'FUNCIONAL EXAMEN MATERIA FECAL', '', '2023-10-03 09:15:59', NULL, 0),
(660374, 'FIEBRE AMARILLA Ac. ANTI-IGM', '', '2023-10-03 09:15:59', NULL, 0),
(660402, 'GALACTOSEMIA', '', '2023-10-03 09:15:59', NULL, 0),
(660405, 'GASTRINA PLASMATICA', '', '2023-10-03 09:15:59', NULL, 0),
(660408, 'GLOBULOS BLANCOS RECUENTO Y FORMULA -MATERIA FECAL.', '', '2023-10-03 09:15:59', NULL, 0),
(660409, 'GLOBULOS BLANCOS RECUENTO DE', '', '2023-10-03 09:15:59', NULL, 0),
(660410, 'GLOBULOS ROJOS RECUENTO DE', '', '2023-10-03 09:15:59', NULL, 0),
(660411, 'GLUCAGON.', '', '2023-10-03 09:15:59', NULL, 0),
(660412, 'GLUCEMIA', '', '2023-10-03 09:15:59', NULL, 1),
(660413, 'GLUCEMIA CURVA DE', '', '2023-10-03 09:15:59', NULL, 1),
(660416, 'GLUCOPROTEINOGRAMA', '', '2023-10-03 09:15:59', NULL, 0),
(660417, 'GLUCOSA 6-FOSFATODEHIDROGENASA', '', '2023-10-03 09:15:59', NULL, 0),
(660418, 'GLUCOSA 6-FOSFATO', '', '2023-10-03 09:15:59', NULL, 0),
(660420, 'GLUTAMIL TRANSPEPTIDASA', '', '2023-10-03 09:15:59', NULL, 0),
(660422, 'GLUTATION REDUCTASA', '', '2023-10-03 09:15:59', NULL, 0),
(660430, 'GRAHAM TEST DE', '', '2023-10-03 09:15:59', NULL, 0),
(660432, 'GRASAS CUANTITATIVO (VAN DE KAMER) - MATERIA FECAL', '', '2023-10-03 09:15:59', NULL, 0),
(660433, 'GRUPO SANGUINEO Y FACTOR RH .', '', '2023-10-03 09:15:59', NULL, 0),
(660465, 'HEMATIES RESISTENCIA GLOBULAR OSMOTICA', '', '2023-10-03 09:15:59', NULL, 0),
(660466, 'HEMATOCRITO', '', '2023-10-03 09:15:59', NULL, 0),
(660468, 'HEMOCULTIVO AEROBIOS ANAEROBIOS C/U', '', '2023-10-03 09:15:59', NULL, 0),
(660470, 'HEMOGLOBINA DOSAJE DE', '', '2023-10-03 09:15:59', NULL, 0),
(660471, 'HEMOGLOBINA ELECTROFORESIS', '', '2023-10-03 09:15:59', NULL, 0),
(660472, 'HEMOGLOBINA EN PLASMA', '', '2023-10-03 09:15:59', NULL, 0),
(660474, 'HEMOGLOBINA ALCALI RESISTENTE', '', '2023-10-03 09:15:59', NULL, 0),
(660475, 'HEMOGRAMA', '', '2023-10-03 09:15:59', NULL, 0),
(660477, 'HEMOSILINAS EN FRIO', '', '2023-10-03 09:15:59', NULL, 0),
(660479, 'HEMOSIDERINA INVESTIGACION HISTOQUIMICA', '', '2023-10-03 09:15:59', NULL, 1),
(660480, 'HEPARINA RESISTENCIA A LA (IN VITRO)', '', '2023-10-03 09:15:59', NULL, 0),
(660481, 'HEPATOGRAMA COMPLETO', '', '2023-10-03 09:15:59', NULL, 1),
(660483, 'HIDATIDOSIS HEMOAGLUTINACION (HAI)', '', '2023-10-03 09:15:59', NULL, 0),
(660484, 'HIDATIDOSIS AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(660485, 'HIDRATOS DE CARBONO (CROMATOGRAFIA) - URINARIOS.', '', '2023-10-03 09:15:59', NULL, 0),
(660486, '17- HIDROXICORTICOIDES - URINARIOS.', '', '2023-10-03 09:15:59', NULL, 0),
(660487, 'HIDROXINDOLACETICO ACIDO', '', '2023-10-03 09:15:59', NULL, 1),
(660488, 'HIDROXIPROLINURIA', '', '2023-10-03 09:15:59', NULL, 0),
(660489, 'HIPERHEPARINEMIA', '', '2023-10-03 09:15:59', NULL, 0),
(660490, 'HISTOPLASMINA', '', '2023-10-03 09:15:59', NULL, 0),
(660494, 'HUDDLESSON REACCION DE (ROSA DE BENGALA - BRUCELOSIS).', '', '2023-10-03 09:15:59', NULL, 1),
(660531, 'MYCOBACTERIUM IDENTIFICACION', '', '2023-10-03 09:15:59', NULL, 0),
(660532, 'IDENTIFICACION SEROLOGIA DE GERMENES', '', '2023-10-03 09:15:59', NULL, 0),
(660535, 'INMUNOELECTROFORESIS', '', '2023-10-03 09:15:59', NULL, 0),
(660536, 'INMUNOELECTROFORESIS LIQUIDOS BIOLOGICOS.', '', '2023-10-03 09:15:59', NULL, 0),
(660537, 'INMUNOGLOBULINA A', '', '2023-10-03 09:15:59', NULL, 0),
(660538, 'INMUNOGLOBULINA D', '', '2023-10-03 09:15:59', NULL, 0),
(660539, 'INMUNOGLOBULINA E', '', '2023-10-03 09:15:59', NULL, 0),
(660540, 'INMUNOGLOBULINA G', '', '2023-10-03 09:15:59', NULL, 0),
(660541, 'INMUNOGLOBULINA M', '', '2023-10-03 09:15:59', NULL, 0),
(660543, 'INSULINA', '', '2023-10-03 09:15:59', NULL, 0),
(660546, 'IONOGRAMA PLASMATICO', '', '2023-10-03 09:15:59', NULL, 0),
(660547, 'IONOGRAMA URINARIO', '', '2023-10-03 09:15:59', NULL, 0),
(660548, 'ISOCITRICO DEHIDROGENASA', '', '2023-10-03 09:15:59', NULL, 0),
(660550, 'INMUNOFIJACION - SERICA', '', '2023-10-03 09:15:59', NULL, 0),
(660552, 'INMUNOFIJACION - URINARIA', '', '2023-10-03 09:15:59', NULL, 0),
(660591, 'LACTAMINICO ACIDO', '', '2023-10-03 09:15:59', NULL, 0),
(660592, 'LACTICO ACIDO ENZIMATICO.', '', '2023-10-03 09:15:59', NULL, 0),
(660593, 'LACTICO ACIDO - MATERIA FECAL.', '', '2023-10-03 09:15:59', NULL, 0),
(660594, 'LACTICO DEHIDROGENASA LDH', '', '2023-10-03 09:15:59', NULL, 0),
(660596, 'LACTICO DEHIDROGENASA ISOENZIMAS - LDH ISOENZIMAS.', '', '2023-10-03 09:15:59', NULL, 0),
(660597, 'LACTOGENO PLACENTARIO / SOMATOMAMOTROFINA', '', '2023-10-03 09:15:59', NULL, 1),
(660598, 'LATEX TEST DE PARA ARTRITIS REUMATOIDE', '', '2023-10-03 09:15:59', NULL, 0),
(660600, 'LEPTOSPIRAS INVESTIGACION DE', '', '2023-10-03 09:15:59', NULL, 0),
(660602, 'TRICHINOSIS INVESTIGACION DE', '', '2023-10-03 09:15:59', NULL, 0),
(660603, 'LAZO PRUEBA DEL', '', '2023-10-03 09:15:59', NULL, 0),
(660607, 'LEUCOAGLUTINACION INHIBICION DE', '', '2023-10-03 09:15:59', NULL, 0),
(660608, 'LEUCOAGLUTININAS METODO DIRECTO', '', '2023-10-03 09:15:59', NULL, 0),
(660609, 'LEUCOPRECIPITINAS', '', '2023-10-03 09:15:59', NULL, 0),
(660610, 'LEVULINICO ACIDO DELTA-AMINO', '', '2023-10-03 09:15:59', NULL, 0),
(660611, 'LEVULINICO DELTA DEHIDRATASA', '', '2023-10-03 09:15:59', NULL, 0),
(660612, 'LH (LUTEINIZANTE HORMONA)', '', '2023-10-03 09:15:59', NULL, 0),
(660613, 'LIPASA EN SANGRE', '', '2023-10-03 09:15:59', NULL, 0),
(660615, 'LIPIDOGRAMA ELECTROFORETICO', '', '2023-10-03 09:15:59', NULL, 0),
(660616, 'LIPIDOS CROMATOGRAFIA EN CAPA DELGADA', '', '2023-10-03 09:15:59', NULL, 0),
(660619, 'LIQUIDO CEFALORRAQUIDEO FCO-QCO - CITOLOGICO.', '', '2023-10-03 09:15:59', NULL, 1),
(660620, 'LIQUIDO DE PUNCION EXAMEN FCO-QCO - CITOLOGICO.', '', '2023-10-03 09:15:59', NULL, 0),
(660621, 'LISINA-VASOPRESINA TEST', '', '2023-10-03 09:15:59', NULL, 0),
(660622, 'LISTERIAS (IFI - ELISA)', '', '2023-10-03 09:15:59', NULL, 0),
(660623, 'LITIO (ISE - ION SELECTIVO - FOTOMETRIA DE LLAMA O FOTOMETRIA DE EMISION)', '', '2023-10-03 09:15:59', NULL, 0),
(660624, 'LITIO (POR ABSORCION ATOMICA - A.A.)', '', '2023-10-03 09:15:59', NULL, 0),
(660652, 'MACROGLOBULINA ALFA2 INMUNODIFUSION CUANTITATIVA', '', '2023-10-03 09:15:59', NULL, 0),
(660653, 'MAGNESIO EN SANGRE', '', '2023-10-03 09:15:59', NULL, 0),
(660654, 'MAGNESIO EN ORINA', '', '2023-10-03 09:15:59', NULL, 0),
(660656, 'MANTOUX INTRADERMO-REACCION DE (PPD)', '', '2023-10-03 09:15:59', NULL, 0),
(660657, 'MEDULOGRAMA', '', '2023-10-03 09:15:59', NULL, 0),
(660660, 'MERCURIO - SERICO O URINARIO.', '', '2023-10-03 09:15:59', NULL, 0),
(660662, 'METANEFRINAS', '', '2023-10-03 09:15:59', NULL, 0),
(660663, 'METANOL EN ORINA', '', '2023-10-03 09:15:59', NULL, 0),
(660664, 'MICOLOGIA DIRECTO O COLORACION', '', '2023-10-03 09:15:59', NULL, 0),
(660665, 'MICOLOGIA CULTIVO E IDENTIFICACION', '', '2023-10-03 09:15:59', NULL, 0),
(660667, 'MOCO CERVICAL CRISTALIZACION', '', '2023-10-03 09:15:59', NULL, 1),
(660668, 'MOCO NASAL PH CITOLOGICO', '', '2023-10-03 09:15:59', NULL, 0),
(660669, 'MONONUCLEOSIS (AGLUTINACION - TEST DE LATEX O MONOTEST).', '', '2023-10-03 09:15:59', NULL, 0),
(660670, 'MONONUCLEOSIS HEMOAGLUTINACION (P. B.)', '', '2023-10-03 09:15:59', NULL, 0),
(660671, 'MONONUCLEOSIS.', '', '2023-10-03 09:15:59', NULL, 0),
(660672, 'MONOXIDO DE CARBONO', '', '2023-10-03 09:15:59', NULL, 0),
(660673, 'MORFINA OPIACEOS DERIVADOS - LIQUIDOSBIOLOGICOS.', '', '2023-10-03 09:15:59', NULL, 1),
(660702, 'NUCLEOTIDASA - 5 N', '', '2023-10-03 09:15:59', NULL, 0),
(660711, 'ORINA COMPLETA', '', '2023-10-03 09:15:59', NULL, 0),
(660714, 'OSMOLARIDAD - CLEARENCE (SANGRE - ORINA)', '', '2023-10-03 09:15:59', NULL, 1),
(660715, 'OSMOLARIDAD SUERO', '', '2023-10-03 09:15:59', NULL, 0),
(660716, 'OXIGENO PO2 - SANGRE ARTERIAL.', '', '2023-10-03 09:15:59', NULL, 0),
(660732, 'PAPANICOLAOU ENDOCERVICAL', '', '2023-10-03 09:15:59', NULL, 1),
(660734, 'PAPANICOLAOU EXOCERVICAL', '', '2023-10-03 09:15:59', NULL, 1),
(660736, 'PARASITOLOGICO SERIADO', '', '2023-10-03 09:15:59', NULL, 0),
(660739, 'PARATHORMONA', '', '2023-10-03 09:15:59', NULL, 0),
(660740, 'PEROXIDASAS TINCION', '', '2023-10-03 09:15:59', NULL, 1),
(660741, 'PH - LIQUIDOS BIOLOGICOS.', '', '2023-10-03 09:15:59', NULL, 0),
(660742, 'PH - SANGUINEO (TITULACION)', '', '2023-10-03 09:15:59', NULL, 0),
(660743, 'PIRUVATO-QUINASA', '', '2023-10-03 09:15:59', NULL, 0),
(660744, 'PIRUVICO ACIDO ENZIMATICO', '', '2023-10-03 09:15:59', NULL, 0),
(660745, 'PLAQUETARIOS FACTORES', '', '2023-10-03 09:15:59', NULL, 0),
(660746, 'PLAQUETAS RECUENTO DE', '', '2023-10-03 09:15:59', NULL, 0),
(660747, 'PLASMA RECALCIFICADO TIEMPO DE', '', '2023-10-03 09:15:59', NULL, 0),
(660748, 'PLASMINOGENO (IDR)', '', '2023-10-03 09:15:59', NULL, 0),
(660749, 'PLOMO - SERICO O URINARIO.', '', '2023-10-03 09:15:59', NULL, 0),
(660751, 'PORFIRINAS - URINARIO', '', '2023-10-03 09:15:59', NULL, 0),
(660752, 'PORFOBILINOGENO - URINARIO.', '', '2023-10-03 09:15:59', NULL, 0),
(660753, 'POTASEMIA', '', '2023-10-03 09:15:59', NULL, 0),
(660754, 'POTASURIA', '', '2023-10-03 09:15:59', NULL, 0),
(660758, 'PROGESTERONA PLASMATICA', '', '2023-10-03 09:15:59', NULL, 0),
(660759, 'PROLACTINA PLASMATICA', '', '2023-10-03 09:15:59', NULL, 0),
(660761, 'PROTEINA C REACTIVA - PCR (CUALITATIVA).', '', '2023-10-03 09:15:59', NULL, 0),
(660763, 'PROTEINAS TOTALES', '', '2023-10-03 09:15:59', NULL, 0),
(660764, 'PROTEINOGRAMA ACETATO', '', '2023-10-03 09:15:59', NULL, 1),
(660766, 'PROTEINOGRAMAS - LIQUIDOS BIOLOGICOS.', '', '2023-10-03 09:15:59', NULL, 0),
(660767, 'PROTEINURIA', '', '2023-10-03 09:15:59', NULL, 0),
(660768, 'PROTOPORFIRINAS', '', '2023-10-03 09:15:59', NULL, 0),
(660769, 'PROTROMBINA CONSUMO DE', '', '2023-10-03 09:15:59', NULL, 0),
(660770, 'PROTROMBINA RIN', '', '2023-10-03 09:15:59', NULL, 0),
(660771, 'PROTROMBINA TIEMPO DE', '', '2023-10-03 09:15:59', NULL, 0),
(660772, 'PSEUDOCOLINESTERASA', '', '2023-10-03 09:15:59', NULL, 0),
(660812, 'RENINA-ANGIOTENSINA', '', '2023-10-03 09:15:59', NULL, 0),
(660813, 'RH FACTOR - GRUPO SANGUINEO.', '', '2023-10-03 09:15:59', NULL, 0),
(660814, 'RH FACTOR C GRANDE', '', '2023-10-03 09:15:59', NULL, 0),
(660815, 'RH FACTOR C CHICA', '', '2023-10-03 09:15:59', NULL, 0),
(660816, 'RH FACTOR E GRANDE', '', '2023-10-03 09:15:59', NULL, 0),
(660817, 'RH FACTOR E CHICA', '', '2023-10-03 09:15:59', NULL, 0),
(660818, 'RETICULOCITOS RECUENTO DE', '', '2023-10-03 09:15:59', NULL, 0),
(660820, 'ROSSE RAGAN PRUEBA DE', '', '2023-10-03 09:15:59', NULL, 0),
(660831, 'SALICILATOS', '', '2023-10-03 09:15:59', NULL, 0),
(660832, 'SALMONELLA ANTICUERPOS (IFI - ELISA)', '', '2023-10-03 09:15:59', NULL, 0),
(660833, 'SANGRE OCULTA EN MATERIA FECAL', '', '2023-10-03 09:15:59', NULL, 0),
(660834, 'SECRETINA TEST DE LA', '', '2023-10-03 09:15:59', NULL, 0),
(660835, 'SEROTONINA - SERICA.', '', '2023-10-03 09:15:59', NULL, 0),
(660837, 'SIDEROFILINA CAPACIDAD', '', '2023-10-03 09:15:59', NULL, 0),
(660838, 'SIMS-HUBBNER TEST DE', '', '2023-10-03 09:15:59', NULL, 0),
(660839, 'SODIO SANGRE U ORINA. CADA DETERMINACION', '', '2023-10-03 09:15:59', NULL, 0),
(660841, 'SOMATOTROFINA', '', '2023-10-03 09:15:59', NULL, 0),
(660847, 'SUDOR TEST DE', '', '2023-10-03 09:15:59', NULL, 0),
(660848, 'SULFAS EN SANGRE', '', '2023-10-03 09:15:59', NULL, 0),
(660849, 'SUBTIPO HEMOGLOBINA A2 DETERMINACION DE (ELECTROFORESIS)', '', '2023-10-03 09:15:59', NULL, 0),
(660862, 'TALIO EN ORINA', '', '2023-10-03 09:15:59', NULL, 0),
(660863, 'TESTOSTERONA - TO', '', '2023-10-03 09:15:59', NULL, 0),
(660864, 'THORN PRUEBA DE', '', '2023-10-03 09:15:59', NULL, 0),
(660865, 'TIROTROFINA SERICA (TSH)', '', '2023-10-03 09:15:59', NULL, 0),
(660866, 'TIROXINA TOTAL - T4', '', '2023-10-03 09:15:59', NULL, 0),
(660867, 'TIROXINA EFECTIVA - T4 - LIBRE', '', '2023-10-03 09:15:59', NULL, 0),
(660870, 'TOXOPLASMOSIS HEMOAGLUTINACION (HA)', '', '2023-10-03 09:15:59', NULL, 0),
(660871, 'TOXOPLASMOSIS (IFI)', '', '2023-10-03 09:15:59', NULL, 0),
(660872, 'TOXOPLASMOSIS REACCION DE SAVIN-FELDMAN', '', '2023-10-03 09:15:59', NULL, 0),
(660873, 'TRANSAMINASA GLUTAMICO OXALACETICA.', '', '2023-10-03 09:15:59', NULL, 1),
(660874, 'TRANSAMINASA GLUTAMICO PIRUVICA.', '', '2023-10-03 09:15:59', NULL, 0),
(660875, 'TRANSFERRINA (IDR)', '', '2023-10-03 09:15:59', NULL, 0),
(660876, 'TRIGLICERIDOS', '', '2023-10-03 09:15:59', NULL, 1),
(660878, 'TRIIODOTIRONINA TOTAL - T3', '', '2023-10-03 09:15:59', NULL, 0),
(660879, 'TROMBINA PRUEBA DE GENERACION DE LA', '', '2023-10-03 09:15:59', NULL, 0),
(660880, 'TROMBINA TIEMPO DE', '', '2023-10-03 09:15:59', NULL, 0),
(660887, 'TROMBOPLASTINA TIEMPO DE (KPTT - TTPC)', '', '2023-10-03 09:15:59', NULL, 0),
(660901, 'UREA CLEARENCE', '', '2023-10-03 09:15:59', NULL, 1),
(660902, 'UREMIA', '', '2023-10-03 09:15:59', NULL, 0),
(660903, 'URETRAL EXUDADO (DIRECTO Y CULTIVO).', '', '2023-10-03 09:15:59', NULL, 0),
(660904, 'URICO ACIDO - SERICO.', '', '2023-10-03 09:15:59', NULL, 0),
(660905, 'URICO ACIDO - URINARIO.', '', '2023-10-03 09:15:59', NULL, 0),
(660907, 'UROCITOGRAMA', '', '2023-10-03 09:15:59', NULL, 0),
(660931, 'VAGINAL EXUDADO O FLUJO (DIRECTO Y CULTIVO).', '', '2023-10-03 09:15:59', NULL, 0),
(660932, 'VAINILLIN MANDELICO ACIDO - URINARIO. (HPLC)', '', '2023-10-03 09:15:59', NULL, 0),
(660934, 'VDRL / USR - CUANTITATIVA.', '', '2023-10-03 09:15:59', NULL, 0),
(660935, 'VARIANTE BACTERIANA', '', '2023-10-03 09:15:59', NULL, 0),
(660936, 'VERONAL PRUEBA DEL', '', '2023-10-03 09:15:59', NULL, 0),
(660937, 'VITAMINA A', '', '2023-10-03 09:15:59', NULL, 0),
(660938, 'VITAMINA B12', '', '2023-10-03 09:15:59', NULL, 0),
(660939, 'VITAMINA E', '', '2023-10-03 09:15:59', NULL, 0),
(660948, 'ALBUMINA (SERICA O URINARIA - C/U)', '', '2023-10-03 09:15:59', NULL, 0),
(660953, 'WIDAL REACCION DE', '', '2023-10-03 09:15:59', NULL, 0),
(660981, 'ZINC ERITROCITARIO - PROTOPORFIRINA.', '', '2023-10-03 09:15:59', NULL, 0),
(660982, 'ZINC SERICO', '', '2023-10-03 09:15:59', NULL, 1),
(660999, 'URGENCIA. RECARGO POR CADA DETERMINACION.', '', '2023-10-03 09:15:59', NULL, 0),
(661000, 'ANTIGENO PROSTATICO ESPECIFICO TOTAL - PSA-T', '', '2023-10-03 09:15:59', NULL, 0),
(661015, 'CD4 - CD8 - SUB POBLACION LINFOCITARIA POR CITOM. DE FLUJO (C/U)', '', '2023-10-03 09:15:59', NULL, 0),
(661020, 'CHLAMYDIAS PNEUMONIAE AC. ANTI- IGG', '', '2023-10-03 09:15:59', NULL, 0),
(661025, 'CITOMEGALOVIRUS AC. ANTI- IGG', '', '2023-10-03 09:15:59', NULL, 0),
(661030, 'CITOMEGALOVIRUS AC. ANTI- IGM', '', '2023-10-03 09:15:59', NULL, 0),
(661035, 'COLESTEROL HDL', '', '2023-10-03 09:15:59', NULL, 0),
(661040, 'COLESTEROL LDL', '', '2023-10-03 09:15:59', NULL, 0),
(661045, 'CREATINFOSFOQUINASA ISOENZIMA MB (CPK -MB)', '', '2023-10-03 09:15:59', NULL, 0),
(661050, 'DROGAS DE ABUSO SCREENING (C/U)', '', '2023-10-03 09:15:59', NULL, 0),
(661055, 'EPSTEIN BARR AC. IGG/TOTALES ANTI- (VCA IGG)', '', '2023-10-03 09:15:59', NULL, 0),
(661060, 'EPSTEIN BARR AC. IGM ANTI- (VCA IGM)', '', '2023-10-03 09:15:59', NULL, 0),
(661065, 'FRUCTOSAMINA', '', '2023-10-03 09:15:59', NULL, 0),
(661070, 'HEMOGLOBINA GLICOSILADA', '', '2023-10-03 09:15:59', NULL, 0),
(661075, 'HEPATITIS A AC. ANTI- IGM (HAV IGM)', '', '2023-10-03 09:15:59', NULL, 0),
(661080, 'HEPATITIS B AC. ANTI- IGG (HBC -IGG )', '', '2023-10-03 09:15:59', NULL, 0),
(661085, 'HEPATITIS B ANTIGENO E (AG.HBE)', '', '2023-10-03 09:15:59', NULL, 0),
(661086, 'HEPATITIS B ANTIGENO DE SUPERFICIE (AG. HBS)', '', '2023-10-03 09:15:59', NULL, 0),
(661090, 'HEPATITIS B AC. ANTI- (HBSAC)', '', '2023-10-03 09:15:59', NULL, 0),
(661095, 'HEPATITIS C AC. ANTI- IGG (HCV AC IGG)', '', '2023-10-03 09:15:59', NULL, 0),
(661100, 'HIDATIDOSIS (ARCO 5 - DOBLE INMUNOELECTROFORESIS)', '', '2023-10-03 09:15:59', NULL, 0),
(661105, 'HIV CARGA VIRAL', '', '2023-10-03 09:15:59', NULL, 0),
(661110, 'HIV WESTERN- BLOT', '', '2023-10-03 09:15:59', NULL, 0),
(661115, 'MARCADOR TUMORAL DE OVARIO (CA 125)', '', '2023-10-03 09:15:59', NULL, 0),
(661120, 'MARCADOR TUMORAL DE MAMA (CA 15. 3)', '', '2023-10-03 09:15:59', NULL, 0),
(661125, 'MARCADOR TUMORAL DE COLON (CA 19. 9)', '', '2023-10-03 09:15:59', NULL, 0),
(661130, 'MICROALBUMINURIA', '', '2023-10-03 09:15:59', NULL, 0),
(661134, 'MONITOREO DE FARMACOS PARA ENF. CRONICAS (ANTICONVULSIVANTES).', '', '2023-10-03 09:15:59', NULL, 0),
(661135, 'MONITOREO DE FARMACOS PARA ENF. CRONICAS (ANTICONVULSIVANTES)', '', '2023-10-03 09:15:59', NULL, 0),
(661136, 'MONITOREO DE FARMACOS PARA ENF. CRONICAS (CAFEINA O LAMOTRIGINA).', '', '2023-10-03 09:15:59', NULL, 0),
(661137, 'MONITOREO de FARMACOS para ENF. CRONICAS (ANTICONVULSIONANTE: TOPIRAMATO)', '', '2023-10-03 09:15:59', NULL, 0),
(661145, 'RUBEOLA AC. ANTI- IGG', '', '2023-10-03 09:15:59', NULL, 0),
(661150, 'RUBEOLA AC. ANTI- IGM', '', '2023-10-03 09:15:59', NULL, 0),
(661160, 'TORCH (TOXOPLASMOSIS RUBEOLA CITOMEGALOVIRUS Y HERPES 1 Y 2 )', '', '2023-10-03 09:15:59', NULL, 0),
(661165, 'ESTUDIO DE PLIODIA CELUL. EN TEJIDO TUMOR X CITOM.DE FLUJO', '', '2023-10-03 09:15:59', NULL, 1),
(661180, 'TEST RAPIDO EN FAUCES PARA STREPTOCOCCUS BETA- HEMOLITICO GRUPO  A', '', '2023-10-03 09:15:59', NULL, 1),
(661185, 'TESTOSTERONA BIODISPONIBLE', '', '2023-10-03 09:15:59', NULL, 0),
(661190, 'TIROTROFINA ULTRASENSIBLE (TSH-ULTRASENSIBLE)', '', '2023-10-03 09:15:59', NULL, 0),
(661195, 'SCREENING NEONATAL X 3 (TSH FENIL ALANINA Y TIR - NEONATALES)', '', '2023-10-03 09:15:59', NULL, 0),
(661196, 'SCREENING NEONATAL X 6 (TSH FENIL ALANINA Y TIR - BIOTINIDASA GALACTOSEMIA Y 17-HO-PROGESTERONA - NEONATALES)', '', '2023-10-03 09:15:59', NULL, 0),
(662008, 'ACANTHAMOEBA SPP.', '', '2023-10-03 09:15:59', NULL, 0),
(662011, 'ACAROS Y ARTROPODOS INVESTIGACION DE VECTORES', '', '2023-10-03 09:15:59', NULL, 0),
(662017, 'ACETILCOLINA', '', '2023-10-03 09:15:59', NULL, 1),
(662025, 'ACETILCOLINA AC. ANTI- RECEPTORES (ACRA)', '', '2023-10-03 09:15:59', NULL, 1),
(662034, 'ACETILCOLINESTERASA ERITROCITARIA', '', '2023-10-03 09:15:59', NULL, 1),
(662042, 'ACETILCOLINESTERASA - SERICA', '', '2023-10-03 09:15:59', NULL, 1),
(662051, 'ACETONA CUANTITATIVA - SERICA', '', '2023-10-03 09:15:59', NULL, 1),
(662059, 'ACETONA CUANTITATIVA - URINARIA', '', '2023-10-03 09:15:59', NULL, 1),
(662068, 'ACIDO 3-METIL INDOL', '', '2023-10-03 09:15:59', NULL, 0),
(662085, 'ACIDO 5 HIDROX-INDOL ACETICO (HPLC)', '', '2023-10-03 09:15:59', NULL, 1),
(662093, 'ACIDO ACETOACETICO', '', '2023-10-03 09:15:59', NULL, 1),
(662102, 'ACIDO ALFA CETONICO', '', '2023-10-03 09:15:59', NULL, 1),
(662111, 'ACIDO BETA HIDROXIBUTIRICO', '', '2023-10-03 09:15:59', NULL, 0),
(662120, 'CITRATURIA (ACIDO CITRICO - URINARIO)', '', '2023-10-03 09:15:59', NULL, 0),
(662128, 'ACIDO FENIL ACETICO (AFA)', '', '2023-10-03 09:15:59', NULL, 1),
(662136, 'ACIDO FENIL GLIOXILICO', '', '2023-10-03 09:15:59', NULL, 0),
(662145, 'ACIDO FENIL PIRUVICO (CUALITATIVO)', '', '2023-10-03 09:15:59', NULL, 0),
(662153, 'ACIDO FOLICO - INTRAERITROCITARIO.', '', '2023-10-03 09:15:59', NULL, 0),
(662162, 'ACIDO FORMICO', '', '2023-10-03 09:15:59', NULL, 0),
(662170, 'ACIDO FOSFATIDICO AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(662179, 'ACIDO FOSFATIDICO AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(662181, 'ACIDO FUROICO', '', '2023-10-03 09:15:59', NULL, 0),
(662183, 'ACIDO GLUTAMICO', '', '2023-10-03 09:15:59', NULL, 0),
(662184, 'ACIDO GUANIDINACETICO.', '', '2023-10-03 09:15:59', NULL, 1),
(662187, 'ACIDO HIPURICO - URINARIO', '', '2023-10-03 09:15:59', NULL, 0),
(662205, 'ACIDO HOMOVANILICO - HVA', '', '2023-10-03 09:15:59', NULL, 0),
(662222, 'ACIDO INDOLACETICO 5 HIDROXI -3-METIL', '', '2023-10-03 09:15:59', NULL, 1),
(662236, 'ACIDO LACTICO LCR', '', '2023-10-03 09:15:59', NULL, 0),
(662239, 'ACIDO LACTICO - URINARIO', '', '2023-10-03 09:15:59', NULL, 0),
(662247, 'ACIDO LISERGICO (LSD)', '', '2023-10-03 09:15:59', NULL, 0),
(662256, 'ACIDO MANDELICO', '', '2023-10-03 09:15:59', NULL, 0),
(662264, 'ACIDO METIL HIPURICO', '', '2023-10-03 09:15:59', NULL, 0),
(662273, 'ACIDO METIL MALONICO', '', '2023-10-03 09:15:59', NULL, 0),
(662277, 'ACIDO MUCONICO', '', '2023-10-03 09:15:59', NULL, 0),
(662281, 'ACIDO OROTICO', '', '2023-10-03 09:15:59', NULL, 0),
(662296, 'ACIDO OXALICO SERICO', '', '2023-10-03 09:15:59', NULL, 0),
(662299, 'ACIDO OXALICO URINARIO (2/ 12 / 24 HS)', '', '2023-10-03 09:15:59', NULL, 0),
(662316, 'ACIDO PIRUVICO PLASMATICO', '', '2023-10-03 09:15:59', NULL, 0),
(662328, 'ACIDO SALICILICO SERICO', '', '2023-10-03 09:15:59', NULL, 0),
(662330, 'ACIDO SALICILICO URINARIO', '', '2023-10-03 09:15:59', NULL, 0),
(662341, 'ACIDO SIALICO', '', '2023-10-03 09:15:59', NULL, 0),
(662350, 'ACIDO TIOGLICOLICO', '', '2023-10-03 09:15:59', NULL, 0),
(662358, 'ACIDO TRICLOROACETICO', '', '2023-10-03 09:15:59', NULL, 1),
(662367, 'ACIDOS BILIARES PLASMATICOS', '', '2023-10-03 09:15:59', NULL, 0),
(662375, 'ACIDOS GRASOS DE CADENA MUY LARGA', '', '2023-10-03 09:15:59', NULL, 0),
(662379, 'ACIDOS GRASOS NO ESTERIFICADOS (NEFA)', '', '2023-10-03 09:15:59', NULL, 0),
(662389, 'ACIDOS ORGANICOS', '', '2023-10-03 09:15:59', NULL, 0),
(662393, 'ACIDOS ORGANICOS URINARIOS', '', '2023-10-03 09:15:59', NULL, 0),
(662401, 'ACIL CARNITINAS PLASMATICOS', '', '2023-10-03 09:15:59', NULL, 0),
(662411, 'ACUAPORINA 4 - NEUROMIELITIS OPTICA - AC. IGG (NMO-Ac. IgG)', '', '2023-10-03 09:15:59', NULL, 0),
(662417, 'ADENOSIN DEAMINASA - LCR', '', '2023-10-03 09:15:59', NULL, 0),
(662418, 'ADENOSIN DEAMINASA LIQUIDO PLEURAL', '', '2023-10-03 09:15:59', NULL, 0),
(662427, 'ADENOVIRUS AC. ANTI- IGG O TOTALES', '', '2023-10-03 09:15:59', NULL, 0),
(662435, 'ADENOVIRUS AC. ANTI- IGM', '', '2023-10-03 09:15:59', NULL, 0),
(662444, 'ADENOVIRUS AG.', '', '2023-10-03 09:15:59', NULL, 0),
(662445, 'ADENOVIRUS GENOMA VIRAL', '', '2023-10-03 09:15:59', NULL, 0),
(662452, 'ADRENAL AC. ANTI- TOTALES', '', '2023-10-03 09:15:59', NULL, 0),
(662461, 'ALDOSTERONA URINARIA', '', '2023-10-03 09:15:59', NULL, 0),
(662469, 'ALDRIN', '', '2023-10-03 09:15:59', NULL, 0),
(662492, 'ALFA 1 ANTITRIPSINA LIQUIDO PLEURAL', '', '2023-10-03 09:15:59', NULL, 0),
(662495, 'ALFA 1 ANTITRIPSINA CLEARENCE DE (M.F./SERICA)', '', '2023-10-03 09:15:59', NULL, 1),
(662521, 'ALFA 2 ANTIPLASMINA', '', '2023-10-03 09:15:59', NULL, 0),
(662538, 'ALFA BHC', '', '2023-10-03 09:15:59', NULL, 0),
(662547, 'ALFA GALACTOSIDASA (FABRY)', '', '2023-10-03 09:15:59', NULL, 0),
(662555, 'ALFA GLUCOSIDASA NEUTRAL', '', '2023-10-03 09:15:59', NULL, 0),
(662559, 'ALFA L IDURONIDASA', '', '2023-10-03 09:15:59', NULL, 0),
(662563, 'ALFA NITROSO BETA NAFTOL PRUEBA DE', '', '2023-10-03 09:15:59', NULL, 0),
(662572, 'ALPRAZOLAM', '', '2023-10-03 09:15:59', NULL, 0),
(662587, 'ALUMINIO PELO', '', '2023-10-03 09:15:59', NULL, 0),
(662589, 'ALUMINIO SERICO', '', '2023-10-03 09:15:59', NULL, 0),
(662591, 'ALUMINIO URINARIO', '', '2023-10-03 09:15:59', NULL, 0),
(662598, 'ALUMINIO URINARIO', '', '2023-10-03 09:15:59', NULL, 0),
(662606, 'AMIKACINA', '', '2023-10-03 09:15:59', NULL, 0),
(662615, 'AMINOACIDOS - SERICO (CROMATOGRAFIA CUANTITATIVA)', '', '2023-10-03 09:15:59', NULL, 0),
(662620, 'AMINOACIDOS - LCR (CROMATOGRAFIA CUANTITATIVA)', '', '2023-10-03 09:15:59', NULL, 0),
(662624, 'AMINOACIDOS - SSPF (CUANTITATIVO)', '', '2023-10-03 09:15:59', NULL, 0),
(662627, 'AMINOACIDOS - URINARIOS (CROMATOGRAFIA CUANTITATIVA)', '', '2023-10-03 09:15:59', NULL, 0),
(662630, 'AMINOACIDOS - URINARIOS (CUALITATIVO)', '', '2023-10-03 09:15:59', NULL, 0),
(662649, 'AMONIO URINARIO', '', '2023-10-03 09:15:59', NULL, 0),
(662657, 'ANAEROBIOS (CULTIVO).', '', '2023-10-03 09:15:59', NULL, 0),
(662666, 'ANDROSTENEDIOL GLUCURONIDO (ALFA DIOL GLUCURONIDO)', '', '2023-10-03 09:15:59', NULL, 0),
(662675, 'ANDROSTENODIONA DELTA 4-', '', '2023-10-03 09:15:59', NULL, 0),
(662688, 'ANFETAMINAS / METANFETAMINAS CONFIRMATORIO', '', '2023-10-03 09:15:59', NULL, 0),
(662692, 'ANFETAMINAS URINARIAS', '', '2023-10-03 09:15:59', NULL, 0),
(662700, 'ANGELMAN SINDROME DE', '', '2023-10-03 09:15:59', NULL, 0),
(662704, 'ANION GAP', '', '2023-10-03 09:15:59', NULL, 0),
(662709, 'ANTICOAGULANTE LUPICO', '', '2023-10-03 09:15:59', NULL, 0),
(662712, 'ANTIDIURETICA HORMONA - HAD (VASOPRESINA)', '', '2023-10-03 09:15:59', NULL, 0),
(662713, 'ANTIDIURETICA HORMONA - URINARIA', '', '2023-10-03 09:15:59', NULL, 0),
(662717, 'ANTIGENOS BACTERIANOS SCREENING (HAEMOF..INFL NEIS. MENING. STREPT. PNEUM.)', '', '2023-10-03 09:15:59', NULL, 0),
(662730, 'ANTIGENO PROSTATICO ESPECIFICO COMPLEJADO (PSA C)', '', '2023-10-03 09:15:59', NULL, 0),
(662734, 'ANTIGENO PROSTATICO ESPECIFICO LIBRE+TOTAL (PSA-L+T)', '', '2023-10-03 09:15:59', NULL, 0),
(662769, 'ANTIMICOGRAMA LEVADURAS SCREENING', '', '2023-10-03 09:15:59', NULL, 0),
(662780, 'ANTIMONIO - SERICO', '', '2023-10-03 09:15:59', NULL, 0),
(662782, 'ANTIMONIO - URINARIO', '', '2023-10-03 09:15:59', NULL, 0),
(662790, 'ANTIMULLERIANA HORMONA (HAM)', '', '2023-10-03 09:15:59', NULL, 0),
(662803, 'ANTITROMBINA III FUNCIONAL', '', '2023-10-03 09:15:59', NULL, 0),
(662811, 'APOLIPOPROTEINAS A O B (C/U)', '', '2023-10-03 09:15:59', NULL, 0),
(662815, 'APOLIPOPROTEINA E GENOTIPO (APO E)', '', '2023-10-03 09:15:59', NULL, 0),
(662820, 'ARILSULTASA A - EN LEUCOSITOS', '', '2023-10-03 09:15:59', NULL, 0),
(662834, 'ARSENICO - PELO', '', '2023-10-03 09:15:59', NULL, 0),
(662837, 'ARSENICO - UÑA', '', '2023-10-03 09:15:59', NULL, 0),
(662846, 'ASPERGILLIUS AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(662850, 'ATRAZINA', '', '2023-10-03 09:15:59', NULL, 0),
(662854, 'BACILUS ANTHRACIS CULTIVO Y TIPIFICACION', '', '2023-10-03 09:15:59', NULL, 0),
(662863, 'BANDAS OLIGOCLONALES EN L.C.R.', '', '2023-10-03 09:15:59', NULL, 0),
(662873, 'BANDEO G', '', '2023-10-03 09:15:59', NULL, 0),
(662874, 'BANDEO G-CITOGENICO EN MEDULA OSEA POR ANALISIS CROMOSOMICO CON BANDEO G DE ALTA RESOLUCION', '', '2023-10-03 09:15:59', NULL, 0),
(662888, 'BARBITURATOS', '', '2023-10-03 09:15:59', NULL, 0),
(662896, 'BARIO - SERICO.', '', '2023-10-03 09:15:59', NULL, 0),
(662897, 'BARIO URINARIO', '', '2023-10-03 09:15:59', NULL, 0),
(662912, 'BARTONELLA HENSELAE AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(662914, 'BARTONELLA HENSELAE AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(662925, 'BCR/ABL P210 CUANTITATIVO', '', '2023-10-03 09:15:59', NULL, 0),
(662927, 'BENCENO - URINARIO', '', '2023-10-03 09:15:59', NULL, 1),
(662931, 'BENCENO-ETILBENCENO-TOLUENO-XILENO (BETX)', '', '2023-10-03 09:15:59', NULL, 1),
(662945, 'BENZODIAZEPINAS CONFIRMATORIO.', '', '2023-10-03 09:15:59', NULL, 0),
(662963, 'BERILIO - SERICO', '', '2023-10-03 09:15:59', NULL, 0),
(662965, 'BERILIO - URINARIO', '', '2023-10-03 09:15:59', NULL, 0),
(662980, 'BETA 2 GLICOPROTEINA AC. IGA ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(662982, 'BETA 2 GLICOPROTEINA AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(662984, 'BETA 2 GLICOPROTEINA AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(663016, 'BETA BHC', '', '2023-10-03 09:15:59', NULL, 0),
(663025, 'BETA CROSS LAPS - CTX-C - TELOPEPTIDO DE COLAGENO TIPO I', '', '2023-10-03 09:15:59', NULL, 0),
(663034, 'BETA GALACTOSIDASA', '', '2023-10-03 09:15:59', NULL, 0),
(663042, 'BETA GLUCOCEREBROSIDASA', '', '2023-10-03 09:15:59', NULL, 1),
(663051, 'BETA LACTAMASA (ß-LACTAMASA)', '', '2023-10-03 09:15:59', NULL, 0),
(663068, 'BIOTINIDAZA CONFIRMATORIO.', '', '2023-10-03 09:15:59', NULL, 0),
(663085, 'BLASTOMYCES DERMATITIDIS AC (FASE LEV)', '', '2023-10-03 09:15:59', NULL, 1),
(663093, 'BNP (FACTOR NATRIURETICO)', '', '2023-10-03 09:15:59', NULL, 0),
(663102, 'BORDETELLA PERTUSIS AC. ANTI- IGG', '', '2023-10-03 09:15:59', NULL, 0),
(663110, 'BORDETELLA PERTUSIS AC. ANTI- IGM', '', '2023-10-03 09:15:59', NULL, 0),
(663119, 'BORDETELLA PERTUSIS AG', '', '2023-10-03 09:15:59', NULL, 0),
(663120, 'BORDETELLA PERTUSIS PCR', '', '2023-10-03 09:15:59', NULL, 0),
(663128, 'BORRELLIA BUGDORFERI AC. ANTI- IGG', '', '2023-10-03 09:15:59', NULL, 0),
(663136, 'BORRELLIA BUGDORFERI AC. ANTI- IGM', '', '2023-10-03 09:15:59', NULL, 0),
(663145, 'BR CA1-BR CA (PANEL ASHKENAZI) - 1/2 SCREENING', '', '2023-10-03 09:15:59', NULL, 0),
(663153, 'BROMURO SERICO', '', '2023-10-03 09:15:59', NULL, 0),
(663158, 'BRUCELLAS TEST DE WRIGHT', '', '2023-10-03 09:15:59', NULL, 1),
(663159, 'BRUCELLAS TEST DE WRIGHT CON 2-MERCAPTOETANOL (W- 2ME)', '', '2023-10-03 09:15:59', NULL, 1),
(663162, 'BRUCELOSIS (IFI)', '', '2023-10-03 09:15:59', NULL, 1),
(663170, 'BRUCELOSIS (FIJACION DE COMPLEMENTO)', '', '2023-10-03 09:15:59', NULL, 1),
(663179, 'BRUCELOSIS AC. ANTI- IGG O TOTALES', '', '2023-10-03 09:15:59', NULL, 1),
(663187, 'BRUCELOSIS AC. ANTI- IGM', '', '2023-10-03 09:15:59', NULL, 1),
(663190, 'BRUCELOSIS AC. INCOMPLETOS', '', '2023-10-03 09:15:59', NULL, 1),
(663213, 'BUFOTENINA', '', '2023-10-03 09:15:59', NULL, 0),
(663230, 'C1 INHIBIDOR Q (C1Q INHIBIDOR INMUNOLOGICO)', '', '2023-10-03 09:15:59', NULL, 0),
(663239, 'CA 21-1 (MARCADOR TUMORAL DE PULMON) - CYFRA 21-1', '', '2023-10-03 09:15:59', NULL, 0),
(663247, 'CA 72-4 (MARCADOR TUMORAL GASTRICO)', '', '2023-10-03 09:15:59', NULL, 0),
(663259, 'CADENAS PESADAS EN SANGRE Y ORINA C/U', '', '2023-10-03 09:15:59', NULL, 0),
(663262, 'CADMIO PELO', '', '2023-10-03 09:15:59', NULL, 0),
(663264, 'CADMIO SANGUINEO', '', '2023-10-03 09:15:59', NULL, 0),
(663273, 'CALCIDIOIDEMICOSIS - INMUNODIF.', '', '2023-10-03 09:15:59', NULL, 0),
(663290, 'CALCIO PELO', '', '2023-10-03 09:15:59', NULL, 0),
(663292, 'CALCIO SALIVA', '', '2023-10-03 09:15:59', NULL, 1),
(663307, 'CALCULO - BILIAR SALIVAL (ESTUDIO CRISTALOGRAFICO)', '', '2023-10-03 09:15:59', NULL, 0),
(663316, 'CAMPYLOBACTER SPP CULTIVO', '', '2023-10-03 09:15:59', NULL, 0),
(663318, 'CAMPYLOBACTER SPP DIRECTO (ELISA)', '', '2023-10-03 09:15:59', NULL, 0),
(663320, 'CAMPYLOBACTER SPP DIRECTO (MICROSCOPIA)', '', '2023-10-03 09:15:59', NULL, 0),
(663324, 'CANDIDA ALBICANS AC. TOTALES', '', '2023-10-03 09:15:59', NULL, 0),
(663333, 'CANDIDA ELECTROFORESIS DE CAMP', '', '2023-10-03 09:15:59', NULL, 0),
(663350, 'CANNABINOIDES CONFIRMATORIO (MARIHUANA - CONFIRMATORIO - GC-MS)', '', '2023-10-03 09:15:59', NULL, 0),
(663358, 'CARBAMAZEPINA 10 11-DIHIDRO 10-HIDROXI-(HPLC)', '', '2023-10-03 09:15:59', NULL, 0),
(663362, 'CARBAMAZEPINA EPOXIDO DE (HPLC)', '', '2023-10-03 09:15:59', NULL, 0),
(663375, 'CARBOXIHEMOGLOBINA', '', '2023-10-03 09:15:59', NULL, 0),
(663384, 'CARDIOLIPINAS AC. IGA ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(663392, 'CARDIOLIPINAS AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(663401, 'CARDIOLIPINAS AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(663418, 'CARIOTIPO ALTA RESOLUCION (ALTA SENSIBILIDAD)', '', '2023-10-03 09:15:59', NULL, 0),
(663430, 'CARIOTIPO CON BANDEO GTG', '', '2023-10-03 09:15:59', NULL, 0),
(663435, 'CARIOTIPO - LIQUIDO ANMIOTICO', '', '2023-10-03 09:15:59', NULL, 0),
(663440, 'CARIOTIPO - MATERIAL DE ABORTO', '', '2023-10-03 09:15:59', NULL, 0),
(663443, 'CARIOTIPO - MEDULA OSEA/SANGRE PERIFERICA', '', '2023-10-03 09:15:59', NULL, 0),
(663446, 'CARIOTIPO - VELLOSIDADES CORIONICAS', '', '2023-10-03 09:15:59', NULL, 0),
(663461, 'CARNITINA LIBRE Y TOTAL - SUERO', '', '2023-10-03 09:15:59', NULL, 0),
(663463, 'CARNITINA LIBRE Y TOTAL - URINARIO', '', '2023-10-03 09:15:59', NULL, 0),
(663478, 'CATECOLAMINAS LCR', '', '2023-10-03 09:15:59', NULL, 0),
(663495, 'CD 3 4 POSITIVAS - CITOMETRIA DE FLUJO', '', '2023-10-03 09:15:59', NULL, 0),
(663504, 'CD10/CD19 - CITOM. DE FLUJO', '', '2023-10-03 09:15:59', NULL, 0),
(663512, 'CD3/CD16+56 CELULAS NK - CITOM. DE FLUJ', '', '2023-10-03 09:15:59', NULL, 1),
(663521, 'CD25 RECEPTOR SOLUBLE DE INTERLUKINA 2 - CITOM. DE FLUJO', '', '2023-10-03 09:15:59', NULL, 1),
(663528, 'HPN-FENOTIPIFICACION CD55/CD59', '', '2023-10-03 09:15:59', NULL, 0),
(663529, 'CD69/CD56 POSITIVAS', '', '2023-10-03 09:15:59', NULL, 0),
(663538, 'CD SUBPOBLACION LINFOCITARIA - CITOMETRIA DE FLUJO (C/U)', '', '2023-10-03 09:15:59', NULL, 0),
(663546, 'CELULAS LE', '', '2023-10-03 09:15:59', NULL, 1),
(663563, 'CENTROMERO AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 1),
(663572, 'CHAGAS AC. IGM ANTI- (IFI)', '', '2023-10-03 09:15:59', NULL, 0),
(663576, 'CHAGAS AC. TOTALES ANTI- (ELISA)', '', '2023-10-03 09:15:59', NULL, 0),
(663581, 'CHAGAS (PCR).', '', '2023-10-03 09:15:59', NULL, 0),
(663585, 'CHITOTRIOSIDASA - SANGUINEA.', '', '2023-10-03 09:15:59', NULL, 0),
(663586, 'CHITOTRIOSIDASA - SANGUINEA/SOPORTE-PAPEL (FUOROMETRICO)', '', '2023-10-03 09:15:59', NULL, 0),
(663589, 'CHLAMYDIA PNEUMONIAE AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(663598, 'CHLAMYDIA PSITACCI AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(663606, 'CHLAMYDIA PSITACCI AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(663623, 'CHLAMYDIA TRACHOMATIS AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(663632, 'CHLAMYDIA TRACHOMATIS AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(663640, 'CHLAMYDIA TRACHOMATIS AG.', '', '2023-10-03 09:15:59', NULL, 0),
(663649, 'CHLAMYDIA TRACHOMATIS AG. PCR', '', '2023-10-03 09:15:59', NULL, 0),
(663657, 'CHOLERAE VIBRIO CULTIVO', '', '2023-10-03 09:15:59', NULL, 0),
(663666, 'CIANUROS', '', '2023-10-03 09:15:59', NULL, 0),
(663674, 'CICLOSPORINA A - SERICA', '', '2023-10-03 09:15:59', NULL, 0),
(663683, 'CISTINA', '', '2023-10-03 09:15:59', NULL, 0),
(663717, 'CITOMEGALOVIRUS ANTIGENEMIA (CMV - PP65)', '', '2023-10-03 09:15:59', NULL, 0),
(663720, 'CITOMEGALOVIRUS DNA CARGA VIRAL (CMV-DNA CARGA VIRAL)', '', '2023-10-03 09:15:59', NULL, 0),
(663722, 'CITOMEGALOVIRUS DNA POR PCR (CMV-DNA POR PCR)', '', '2023-10-03 09:15:59', NULL, 0),
(663725, 'CITOMEGALOVIRUS LCR CUANTITATIVO POR PCR (CMV-LCR CUANTIT.POR PCR)', '', '2023-10-03 09:15:59', NULL, 0),
(663734, 'CITOPLASMA DE NEUTROFILO AC. ANTI- C/U (ANCA C P - C/U)', '', '2023-10-03 09:15:59', NULL, 0),
(663751, 'CLEMENTS PRUEBA DE', '', '2023-10-03 09:15:59', NULL, 0),
(663756, 'CLORPIRIFOS ETIL', '', '2023-10-03 09:15:59', NULL, 0),
(663761, 'CLOSTRIDIUM DIFFICILE TOXINA A - MATERIA FECAL.', '', '2023-10-03 09:15:59', NULL, 0),
(663762, 'CLOSTRIDIUM DIFFICILE TOXINAS (A + B) - MATERIA FECAL (INMUNOCROMATOGRAFÌA)', '', '2023-10-03 09:15:59', NULL, 0),
(663786, 'COBALTO PLASMATICO', '', '2023-10-03 09:15:59', NULL, 0),
(663788, 'COBALTO - URINARIO', '', '2023-10-03 09:15:59', NULL, 0),
(663814, 'COBRE - ERITROCITARIO', '', '2023-10-03 09:15:59', NULL, 0),
(663817, 'COBRE - PLASMATICO', '', '2023-10-03 09:15:59', NULL, 0),
(663820, 'COBRE - URINARIO', '', '2023-10-03 09:15:59', NULL, 0),
(663828, 'COCAINA GC-MS - CONFIRMATORIO.', '', '2023-10-03 09:15:59', NULL, 0),
(663860, 'COCCIDIOIDES INMITIS AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(663862, 'COCCIDIOIDES INMITIS AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(663871, 'COCCIDIOIDES INMITIS AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(663880, 'COCLEARES AC. ANTI- (ANTI- P68 KDA) (WESTERN BLOT)', '', '2023-10-03 09:15:59', NULL, 0),
(663888, 'CODEINA - SERICA', '', '2023-10-03 09:15:59', NULL, 0),
(663890, 'CODEINA - URINARIA', '', '2023-10-03 09:15:59', NULL, 0),
(663905, 'COFACTOR DE RISTOCETINA', '', '2023-10-03 09:15:59', NULL, 1),
(663914, 'COMPLEJOS INMUNOCIRCULANTES (CIC)', '', '2023-10-03 09:15:59', NULL, 0),
(663922, 'COMPLEMENTO C1Q (PROTEINA 11S)', '', '2023-10-03 09:15:59', NULL, 0),
(663930, 'COMPLEMENTO TOTAL - 50% LISIS - CH 50', '', '2023-10-03 09:15:59', NULL, 0),
(663939, 'CONCENTRACION BACTERICIDA MINIMA - CBM', '', '2023-10-03 09:15:59', NULL, 1),
(663948, 'CONCENTRACION INHIBITORIA MINIMA (CIM)', '', '2023-10-03 09:15:59', NULL, 1),
(663960, 'COPROPORFIRINAS - ERITROCITARIAS', '', '2023-10-03 09:15:59', NULL, 0),
(663962, 'COPROPORFIRINAS - MATERIA FECAL', '', '2023-10-03 09:15:59', NULL, 0),
(663974, 'COREA DE HUNTINGTON POR PCR', '', '2023-10-03 09:15:59', NULL, 0),
(663982, 'CORPUSCULOS METACROMATICOS - URINARIO', '', '2023-10-03 09:15:59', NULL, 0),
(663994, 'CORRECCION C/PLASMA NORMAL - APTT', '', '2023-10-03 09:15:59', NULL, 0),
(663996, 'CORRECCION C/PLASMA NORMAL - TP', '', '2023-10-03 09:15:59', NULL, 0),
(664008, 'CORTISOL LIBRE - URINARIO (CLU)', '', '2023-10-03 09:15:59', NULL, 0),
(664012, 'CORTISOL - SALIVAL', '', '2023-10-03 09:15:59', NULL, 0),
(664033, 'COTININA SERICA', '', '2023-10-03 09:15:59', NULL, 0),
(664035, 'COTININA URINARIA', '', '2023-10-03 09:15:59', NULL, 0),
(664050, 'COXIELLA BURNETTI AC. ANTI- IGG', '', '2023-10-03 09:15:59', NULL, 0),
(664059, 'COXIELLA BURNETTI AC. ANTI- IGM', '', '2023-10-03 09:15:59', NULL, 0),
(664068, 'COXSACKIE VIRUS A 2-7-9 AC. ANTI- (C/U)', '', '2023-10-03 09:15:59', NULL, 0),
(664076, 'COXSACKIE VIRUS B 1-2-3-4-5-6 AG. (C/U)', '', '2023-10-03 09:15:59', NULL, 0),
(664085, 'COXSACKIE VIRUS B 1-2-3-4-5-6 AC. ANTI- (POOL)', '', '2023-10-03 09:15:59', NULL, 0),
(664093, 'COXSACKIE VIRUS B 1-2-3-4-5-6 AC. ANTI- (C/U)', '', '2023-10-03 09:15:59', NULL, 0),
(664102, 'COXSACKIE VIRUS B 1-2-3-4-5-6 AC. IGM ANTI- (C/U)', '', '2023-10-03 09:15:59', NULL, 0),
(664110, 'CRIOCRITO', '', '2023-10-03 09:15:59', NULL, 0),
(664119, 'CRIOFIBRINOGENO', '', '2023-10-03 09:15:59', NULL, 0),
(664132, 'CROMO PELO', '', '2023-10-03 09:15:59', NULL, 0),
(664134, 'CROMO - SERICO', '', '2023-10-03 09:15:59', NULL, 0),
(664136, 'CROMO - URINARIO', '', '2023-10-03 09:15:59', NULL, 0),
(664141, 'CROMOGRANINA A', '', '2023-10-03 09:15:59', NULL, 0),
(664143, 'DELECCION CROMOSOMA 13 (FISH) - CROMOSOMA ALTERACIONES DEL (C/U)', '', '2023-10-03 09:15:59', NULL, 0),
(664144, 'DELECCION 17 P53 (FISH) - CROMOSOMA ALTERACIONES DEL (C/U)', '', '2023-10-03 09:15:59', NULL, 0),
(664146, 'DELECCION C11 ATM - 5Q - 7Q - GEN ATM (FISH) - CROMOSOMA ALTERACIONES DEL (C/U)', '', '2023-10-03 09:15:59', NULL, 0),
(664147, 'TRISOMIA 12 - CENTROMERO 12 (FISH) - CROMOSOMA ALTERACIONES DEL (C/U)', '', '2023-10-03 09:15:59', NULL, 1),
(664150, 'CROMOSOMA FILADELFIA - PCR - CITOGENETICO LMC-', '', '2023-10-03 09:15:59', NULL, 0),
(664155, 'CROMOSOMA X FRAGILIDAD - PCR', '', '2023-10-03 09:15:59', NULL, 0),
(664160, 'CROMOSOMA X FISH', '', '2023-10-03 09:15:59', NULL, 0),
(664165, 'CROMOSOMA Y DELECCIONES DEL', '', '2023-10-03 09:15:59', NULL, 0),
(664187, 'CROSS MATCH AUTOLOGO - CITOM. DE FLUJO', '', '2023-10-03 09:15:59', NULL, 0),
(664190, 'CROSS MATCH AUTOLOGO - LINFOTOXICIDAD.', '', '2023-10-03 09:15:59', NULL, 0),
(664196, 'CROSS MATCH CONTRA PANEL', '', '2023-10-03 09:15:59', NULL, 0),
(664204, 'CROSS MATCH DONANTE - CITOM. DE FLUJO', '', '2023-10-03 09:15:59', NULL, 0),
(664213, 'CROSS MATCH DONANTE - LINFOTOXICIDAD.', '', '2023-10-03 09:15:59', NULL, 0),
(664221, 'CROSS MATCH DTT', '', '2023-10-03 09:15:59', NULL, 0),
(664230, 'CROSS MATCH MATRIMONIAL - CITOMETRIA DE FLUJO', '', '2023-10-03 09:15:59', NULL, 0),
(664240, 'CROSS MATCH PACIENTE HIPERSENSIBILIZADO', '', '2023-10-03 09:15:59', NULL, 0),
(664256, 'CRYPTOSPORIDIUM SP', '', '2023-10-03 09:15:59', NULL, 0),
(664264, 'CRYPTOCOCCUS NEOFORMANS AG.', '', '2023-10-03 09:15:59', NULL, 0),
(664266, 'CRYPTOCOCCUS NEOFORMANS AG. (MICROSCOPIA - TINTA CHINA)', '', '2023-10-03 09:15:59', NULL, 0);
INSERT INTO `exams` (`id`, `detail`, `common`, `create_at`, `update_at`, `status`) VALUES
(664290, 'CUERPOS REDUCTORES', '', '2023-10-03 09:15:59', NULL, 0),
(664307, '4 4 -DDD (P P -DDD) - 4 4- DICLORODIFENILDICLOROETANO', '', '2023-10-03 09:15:59', NULL, 0),
(664315, '4 4 -DDE (P P - DDE) - 4 4- DICLORODIFENILDICLOROETILENO', '', '2023-10-03 09:15:59', NULL, 0),
(664324, '4 4 -DDT (P P -DDT) - 4 4- DICLORODIFENILTRICLOROETANO', '', '2023-10-03 09:15:59', NULL, 0),
(664333, 'DEGRANULACION DE BASOFILOS', '', '2023-10-03 09:15:59', NULL, 0),
(664340, 'DEHIDROEPIANDROSTERONA', '', '2023-10-03 09:15:59', NULL, 0),
(664350, 'DELTA-BHC', '', '2023-10-03 09:15:59', NULL, 0),
(664361, 'DENGUE AC. ANTI- IGG', '', '2023-10-03 09:15:59', NULL, 0),
(664363, 'DENGUE AC. ANTI- IGM', '', '2023-10-03 09:15:59', NULL, 0),
(664365, 'DENGUE ACS. ANTI- IGG E IGM (CUALITATIVO)', '', '2023-10-03 09:15:59', NULL, 0),
(664369, 'DENGUE - PCR', '', '2023-10-03 09:15:59', NULL, 0),
(664371, 'DENGUE AG. - ELISA', '', '2023-10-03 09:15:59', NULL, 0),
(664375, 'DEOXIPIRIDINOLINAS', '', '2023-10-03 09:15:59', NULL, 0),
(664384, 'DESIPRAMINA', '', '2023-10-03 09:15:59', NULL, 0),
(664388, 'DIAZINON', '', '2023-10-03 09:15:59', NULL, 0),
(664392, 'DIELDRIN', '', '2023-10-03 09:15:59', NULL, 0),
(664418, 'DIMERO-D', '', '2023-10-03 09:15:59', NULL, 0),
(664435, 'DIMETOATO', '', '2023-10-03 09:15:59', NULL, 0),
(664444, 'DIMETOXIFENILETILAMINA 3 4- (DMFA)', '', '2023-10-03 09:15:59', NULL, 0),
(664452, 'DISULFOTON', '', '2023-10-03 09:15:59', NULL, 0),
(664461, 'DNA SS - CADENA SIMPLE (DNASS)', '', '2023-10-03 09:15:59', NULL, 0),
(664469, 'DNA DESNATURALIZADO AC. ANTI -', '', '2023-10-03 09:15:59', NULL, 0),
(664478, 'DNA MUESTRA FORENSE', '', '2023-10-03 09:15:59', NULL, 0),
(664503, 'DOPAMINA TOTAL - SERICA', '', '2023-10-03 09:15:59', NULL, 0),
(664512, 'DOPAMINA LIBRE - URINARIA', '', '2023-10-03 09:15:59', NULL, 0),
(664521, 'DOXEPINA', '', '2023-10-03 09:15:59', NULL, 0),
(664529, 'DUCHENNE ENFERMEDAD DE (PCR)', '', '2023-10-03 09:15:59', NULL, 0),
(664546, 'ECHINOCOCCUS GRANULOSOS AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(664549, 'ECHINOCOCCUS GRANULOSOS AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(664563, 'ECHO COXSACKIE 1-6 AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(664566, 'ECHO COXSACKIE 1-6 IGM', '', '2023-10-03 09:15:59', NULL, 0),
(664580, 'ECHOVIRUS AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(664583, 'ECHOVIRUS AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(664606, 'SUBUNIDADBETA DE GONADOTROFINA CORIONICA CUALITATIVA (TEST EMBARAZO)', '', '2023-10-03 09:15:59', NULL, 0),
(664607, 'SUBUNIDAD BETA DE GONADOTROFINA CORIONICA (CUANTITATIVA)', '', '2023-10-03 09:15:59', NULL, 0),
(664623, 'ENA AC. ANTI- (ANTIGENOS NUCLEARES EXTRAIDOS AC. ANTI- ) - (SSA SSB RNP SM)', '', '2023-10-03 09:15:59', NULL, 0),
(664632, 'ENDOMISIO AC. IGA ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(664640, 'ENDOMISIO AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(664648, 'ENDOSULFAN I', '', '2023-10-03 09:15:59', NULL, 0),
(664649, 'ENDOSULFAN II', '', '2023-10-03 09:15:59', NULL, 0),
(664652, 'ENDOSULFAN SULFATO', '', '2023-10-03 09:15:59', NULL, 0),
(664666, 'ENDRIN', '', '2023-10-03 09:15:59', NULL, 0),
(664668, 'ENDRIN ALDEHIDO', '', '2023-10-03 09:15:59', NULL, 0),
(664674, 'ENTAMOEBA HISTOLYTICA AC. IGG', '', '2023-10-03 09:15:59', NULL, 0),
(664677, 'ENTAMOEBA HISTOLYTICA AC. IGM', '', '2023-10-03 09:15:59', NULL, 0),
(664691, 'ENTEROVIRUS PCR', '', '2023-10-03 09:15:59', NULL, 0),
(664700, 'ENZIMA CONVERTIDORA DE ANGIOTENSINA (ECA)', '', '2023-10-03 09:15:59', NULL, 0),
(664709, 'EPSTEIN BARR ANTI- EBNA (EPSTEIN BARR NUCLEAR ASSOCIATED ANTIGEN)', '', '2023-10-03 09:15:59', NULL, 0),
(664717, 'EPSTEIN BARR DNA CARGA VIRAL - PCR', '', '2023-10-03 09:15:59', NULL, 0),
(664726, 'EPSTEIN BARR EARLY ANTIG. AC.', '', '2023-10-03 09:15:59', NULL, 0),
(664734, 'ERITROPOYETINA (EPO)', '', '2023-10-03 09:15:59', NULL, 0),
(664743, 'ESPERMOGRAMA CELULAS REDONDAS EN PLASMA SEMINAL', '', '2023-10-03 09:15:59', NULL, 1),
(664751, 'ESPERMOGRAMA DE CONDENSACION NUCLEAR DE LA CROMATINA (AZUL ANILINA TINCIÒN)', '', '2023-10-03 09:15:59', NULL, 0),
(664760, 'ESPERMOGRAMA DIGESTION EN GELATINA ACROSOMICA', '', '2023-10-03 09:15:59', NULL, 0),
(664768, 'ESPERMOGRAMA EGG YOLK TEST', '', '2023-10-03 09:15:59', NULL, 0),
(664777, 'ESPERMOGRAMA GRADIENTE DE PERCOLL', '', '2023-10-03 09:15:59', NULL, 0),
(664785, 'ESPERMOGRAMA HETEROGENEIDAD CROMATINICA ( NARANJA DE ACRIDINA)', '', '2023-10-03 09:15:59', NULL, 0),
(664845, 'ESPERMOGRAMA ESPERMATOZOIDE AC. ANTI-DIRECTO (MAR TEST D.)', '', '2023-10-03 09:15:59', NULL, 0),
(664854, 'ESPERMOGRAMA ESPERMATOZOIDE AC. ANTI-INDIRECTO (MAR TEST I.)', '', '2023-10-03 09:15:59', NULL, 0),
(664858, 'ESPERMOGRAMA MODULO I', '', '2023-10-03 09:15:59', NULL, 0),
(664859, 'ESPERMOGRAMA MODULO II (EIVE)', '', '2023-10-03 09:15:59', NULL, 0),
(664862, 'ESPERMOGRAMA MORFOLOGIA DE KRUGER', '', '2023-10-03 09:15:59', NULL, 0),
(664879, 'ESPERMOGRAMA PERLAS DE VIDRIO COLUMNA DE (ESPERMATOZOIDES)', '', '2023-10-03 09:15:59', NULL, 0),
(664888, 'ESPERMOGRAMA POTENCIAL DE PEROXIDACION LIPIDICA EN ZOIDES', '', '2023-10-03 09:15:59', NULL, 0),
(664897, 'ESPERMOGRAMA PRUEBA DE SOBREVIDAESPERMATICA', '', '2023-10-03 09:15:59', NULL, 0),
(664905, 'ESPERMOGRAMA REACCION ACROSOMICA (PISUM SATIVUM)', '', '2023-10-03 09:15:59', NULL, 0),
(664914, 'ESPERMOGRAMA SLIDE TEST', '', '2023-10-03 09:15:59', NULL, 0),
(664922, 'ESPERMOGRAMA STRES TEST', '', '2023-10-03 09:15:59', NULL, 0),
(664931, 'ESPERMOGRAMA SWIM-DOWN', '', '2023-10-03 09:15:59', NULL, 0),
(664939, 'ESPERMOGRAMA SWIM-UP - PARA INSEMINACION', '', '2023-10-03 09:15:59', NULL, 0),
(664942, 'ESPERMOGRAMA SWIM-UP - TEST DIAGNOSTICO', '', '2023-10-03 09:15:59', NULL, 0),
(664965, 'ESPERMOGRAMA TEST DE HIPERACTIVACION', '', '2023-10-03 09:15:59', NULL, 0),
(664982, 'ESPERMOGRAMA TEST HIPOSMOTICO', '', '2023-10-03 09:15:59', NULL, 0),
(664986, 'ESPERMOGRAMA TEST DE MOST', '', '2023-10-03 09:15:59', NULL, 0),
(664999, 'ESTEATOCRITO (GRASAS - MATERIA FECAL)', '', '2023-10-03 09:15:59', NULL, 0),
(665008, 'ESTIRENO', '', '2023-10-03 09:15:59', NULL, 0),
(665016, 'ESTRADIOL BIODISPONIBLE', '', '2023-10-03 09:15:59', NULL, 0),
(665033, 'ESTRIOL LIBRE - SERICO.', '', '2023-10-03 09:15:59', NULL, 0),
(665043, 'ETION', '', '2023-10-03 09:15:59', NULL, 0),
(665050, 'EUGLOBULINAS LISIS DE (PRE Y POST-ISQUEMIA)', '', '2023-10-03 09:15:59', NULL, 0),
(665055, 'EXTASIS - MDMA (INMUNOENSAYO)', '', '2023-10-03 09:15:59', NULL, 0),
(665059, 'FACTOR DE COAGULACION II', '', '2023-10-03 09:15:59', NULL, 0),
(665067, 'FACTOR DE COAGULACION XI', '', '2023-10-03 09:15:59', NULL, 0),
(665076, 'FACTOR DE COAGULACION XII', '', '2023-10-03 09:15:59', NULL, 0),
(665077, 'FACTOR DE COAGULACION XIII', '', '2023-10-03 09:15:59', NULL, 0),
(665085, 'FACTOR INTRINSECO AC. ANTI- EXTASIS', '', '2023-10-03 09:15:59', NULL, 1),
(665093, 'FACTOR REUMATOIDEO (NEFELOMETRIA)', '', '2023-10-03 09:15:59', NULL, 0),
(665102, 'FACTOR V LEIDEN - PCR', '', '2023-10-03 09:15:59', NULL, 0),
(665116, 'FACTOR VON WILLEBRAND FUNCIONAL', '', '2023-10-03 09:15:59', NULL, 0),
(665119, 'FACTOR VON WILLEBRAND (INMUNOLOGICO C/CALIBRACION)', '', '2023-10-03 09:15:59', NULL, 0),
(665127, 'FAMPHUR (FAMFUR)', '', '2023-10-03 09:15:59', NULL, 0),
(665136, 'FENCICLIDINA - FENILCICLOHEXILPIPERIDINA -PCP (IFP)', '', '2023-10-03 09:15:59', NULL, 0),
(665144, 'FENETILAMINA - F.E.A.', '', '2023-10-03 09:15:59', NULL, 0),
(665204, 'FENITOTRION', '', '2023-10-03 09:15:59', NULL, 0),
(665213, 'FENOLES - URINARIOS', '', '2023-10-03 09:15:59', NULL, 0),
(665230, 'FERRITINA', '', '2023-10-03 09:15:59', NULL, 0),
(665238, 'FIBRINOGENO PRODUCTOS DE DEGRADACION (P.D.F.) - URINARIO', '', '2023-10-03 09:15:59', NULL, 0),
(665247, 'FIBROSIS QUISTICA 19 MUTACIONES - PCR', '', '2023-10-03 09:15:59', NULL, 0),
(665255, 'FIBROSIS QUISTICA 29 MUTACIONES - PCR', '', '2023-10-03 09:15:59', NULL, 0),
(665258, 'FIBROSIS QUISTICA 32 MUTACIONES - PCR', '', '2023-10-03 09:15:59', NULL, 0),
(665273, 'FILIACION ESTUDIO DNA EXTRA (POR CADA UNO AGREGADO)', '', '2023-10-03 09:15:59', NULL, 0),
(665281, 'FILIACION ESTUDIO DNA HASTA 3', '', '2023-10-03 09:15:59', NULL, 0),
(665290, 'FISH WILLIAMS', '', '2023-10-03 09:15:59', NULL, 0),
(665298, 'FK - 506 - TACROLIMUS', '', '2023-10-03 09:15:59', NULL, 0),
(665307, 'FORATO', '', '2023-10-03 09:15:59', NULL, 0),
(665319, 'FOSFATASA ACIDA LEUCOCITARIA', '', '2023-10-03 09:15:59', NULL, 0),
(665324, 'FOSFATASA ACIDA PROSTATICA (RIA)', '', '2023-10-03 09:15:59', NULL, 0),
(665332, 'FOSFATASA ACIDA TARTRATO RESISTENTE', '', '2023-10-03 09:15:59', NULL, 0),
(665335, 'FOSFATASA ACIDA TARTRATO RESISTENTE LEUC.', '', '2023-10-03 09:15:59', NULL, 0),
(665349, 'FOSFATASA ALCALINA OSEA (RIA)', '', '2023-10-03 09:15:59', NULL, 0),
(665375, 'FOSFATIDIL COLINA AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(665378, 'FOSFATIDIL COLINA AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(665392, 'FOSFATIDIL GLICEROL AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 1),
(665401, 'FOSFATIDIL GLICEROL AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 1),
(665409, 'FOSFATIDIL INOSITOL AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(665412, 'FOSFATIDIL INOSITOL AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(665424, 'FOSFATIDIL SERINA AC. IGA ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(665426, 'FOSFATIDIL SERINA AC. IGG O AC. TOTALES ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(665428, 'FOSFATIDIL SERINA AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(665443, 'FOSFOHEXOSA ISOMERASA SERICA - PHI', '', '2023-10-03 09:15:59', NULL, 0),
(665452, 'FOSFOLIPIDOS AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(665461, 'FOSFOLIPIDOS AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(665465, 'FOSFOLIPIDOS AC. TOTALES ANTI- (IGA IGG IGM)', '', '2023-10-03 09:15:59', NULL, 0),
(665469, 'FREE ANDROGEN INDEX-FAI', '', '2023-10-03 09:15:59', NULL, 0),
(665472, 'FRIEDRICH ATAXIA DE', '', '2023-10-03 09:15:59', NULL, 0),
(665478, 'FRUCTOSA LIQUIDO SEMINAL O SERICA O URINARIA', '', '2023-10-03 09:15:59', NULL, 0),
(665486, 'FSH URINARIA (HORMONA FOLICULO ESTIMULANTE - URINARIA)', '', '2023-10-03 09:15:59', NULL, 0),
(665502, 'ACIDO GAMMA AMINOBUTIRICO (GABA)', '', '2023-10-03 09:15:59', NULL, 0),
(665503, 'GAD AC. ANTI- GLUTAMICO ACID DECARBOXILASE (ACIDO GLUTAMICO DESCARBOXILASA AC. ANTI-)', '', '2023-10-03 09:15:59', NULL, 0),
(665512, 'GALACTOSA 1-URIDIL FOSFOTRANSFERASA', '', '2023-10-03 09:15:59', NULL, 0),
(665520, 'GAMMA - BHC', '', '2023-10-03 09:15:59', NULL, 0),
(665529, 'GANGLIOSIDO ASIALO GM1 AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(665533, 'GANGLIOSIDO GD 1B AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(665537, 'GANGLIOSIDO GM1 A AC. (IGG + IGM) ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(665541, 'GANGLIOSIDO QUADROSIALO GQ1B AC. IGG', '', '2023-10-03 09:15:59', NULL, 0),
(665547, 'GANGLIOSIDOS PANEL AC. (IGG + IGM) GM1 ASIALO GM2 GD1A GD1B GQ1B', '', '2023-10-03 09:15:59', NULL, 0),
(665555, 'GENOTIPO DE RH (C/U)', '', '2023-10-03 09:15:59', NULL, 0),
(665563, 'GENTAMICINA', '', '2023-10-03 09:15:59', NULL, 0),
(665572, 'GLIADINA AC. IGA ANTI- (AGA - IGA)', '', '2023-10-03 09:15:59', NULL, 0),
(665580, 'GLIADINA AC. IGG ANTI- (AGA - IGG)', '', '2023-10-03 09:15:59', NULL, 0),
(665589, 'GLICEROL SERICO.', '', '2023-10-03 09:15:59', NULL, 1),
(665597, 'GLICINA (HPLC)', '', '2023-10-03 09:15:59', NULL, 0),
(665606, 'GLICOFORINA CITOMETRIA DE FLUJO', '', '2023-10-03 09:15:59', NULL, 0),
(665632, 'GLOBULINA LIGADORA DE ANDROGENOS Y ESTROGENOS (GLAE)', '', '2023-10-03 09:15:59', NULL, 0),
(665640, 'GLOBULINA LIGADORA DE CORTICOIDES (CBG)', '', '2023-10-03 09:15:59', NULL, 0),
(665642, 'GLOMERULO AC. ANT-', '', '2023-10-03 09:15:59', NULL, 0),
(665648, 'GLUCOCEREBROSIDASA', '', '2023-10-03 09:15:59', NULL, 1),
(665666, 'GLUTATION PEROXIDASA (GPO)', '', '2023-10-03 09:15:59', NULL, 0),
(665674, 'GQ1B AC. IGG', '', '2023-10-03 09:15:59', NULL, 0),
(665685, 'HAEMOPHILUS INFLUENZA AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(665687, 'HAEMOPHILUS INFLUENZA AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(665694, 'HAEMOPHILUS INFLUENZAE B AG. - URINARIO', '', '2023-10-03 09:15:59', NULL, 0),
(665700, 'HAEMOPHILUS INFLUENZAE B AG. - PLASMATICO', '', '2023-10-03 09:15:59', NULL, 0),
(665708, 'HALOPERIDOL', '', '2023-10-03 09:15:59', NULL, 0),
(665715, 'HAM PRUEBA DE', '', '2023-10-03 09:15:59', NULL, 0),
(665724, 'HANTAVIRUS AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(665726, 'HANTAVIRUS AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(665734, 'HAPTOGLOBINA - SERICA', '', '2023-10-03 09:15:59', NULL, 0),
(665743, 'HELICOBACTER PYLORI AC. IGA ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(665751, 'HELICOBACTER PYLORI AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(665760, 'HELICOBACTER PYLORI AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(665768, 'HELICOBACTER PYLORI AIRE ESPIRADO', '', '2023-10-03 09:15:59', NULL, 0),
(665777, 'HELICOBACTER PYLORI (CULTIVO - TIPIFICACION).', '', '2023-10-03 09:15:59', NULL, 0),
(665780, 'HEMATIES PRUEBA ELUSION ACIDA DE', '', '2023-10-03 09:15:59', NULL, 0),
(665785, 'HEMOCROMATOSIS MUTACION C282Y Y H63D', '', '2023-10-03 09:15:59', NULL, 0),
(665787, 'HEMOCROMATOSIS MUTACION GEN C282Y - PCR', '', '2023-10-03 09:15:59', NULL, 0),
(665789, 'HEMOCROMATOSIS MUTACION GEN H63D - PCR', '', '2023-10-03 09:15:59', NULL, 0),
(665791, 'HEMOCROMATOSIS MUTACION GEN S65C - PCR', '', '2023-10-03 09:15:59', NULL, 0),
(665794, 'HEMOCROMATOSIS GEN HH - PCR (HEMOTROCAMTOSIS HEREDITARIA HH - GEN HFE)', '', '2023-10-03 09:15:59', NULL, 0),
(665797, 'HEMOCULTIVO AEROBIOS AUTOMATIZADO (C/U)', '', '2023-10-03 09:15:59', NULL, 0),
(665802, 'HEMOGLOBINA A1 (HB-A1) ELECTROFORESIS', '', '2023-10-03 09:15:59', NULL, 0),
(665811, 'HEMOGLOBINA A2 (HBA2)', '', '2023-10-03 09:15:59', NULL, 0),
(665820, 'HEMOGLOBINA FETAL', '', '2023-10-03 09:15:59', NULL, 0),
(665828, 'HEMOGLOBINA S', '', '2023-10-03 09:15:59', NULL, 0),
(665837, 'HEMOGLOBINURIA PAROXISTICA NOCTURNA X CF', '', '2023-10-03 09:15:59', NULL, 0),
(665854, 'HEMOSIDERINURIA', '', '2023-10-03 09:15:59', NULL, 0),
(665868, 'HEPARINA AC. ANTI- (PFA4)', '', '2023-10-03 09:15:59', NULL, 0),
(665871, 'HEPARINA ACTIVIDAD ANTI XA DE LA', '', '2023-10-03 09:15:59', NULL, 0),
(665879, 'HEPATICOS AUTOANTICUERPOS (PANEL)', '', '2023-10-03 09:15:59', NULL, 0),
(665888, 'HEPATITIS A AC. ANTI- IGG (HVA IGG) O AC. TOTALES (RIA O ELISA)', '', '2023-10-03 09:15:59', NULL, 0),
(665896, 'HEPATITIS B AC. ANTI-  E  (HBE AC)', '', '2023-10-03 09:15:59', NULL, 0),
(665905, 'HEPATITIS B AC. ANTI-  CORE  IGM (HBCM) - (RIA O ELISA)', '', '2023-10-03 09:15:59', NULL, 0),
(665914, 'HEPATITIS B CARGA VIRAL', '', '2023-10-03 09:15:59', NULL, 0),
(665931, 'HEPATITIS B DNA VIRAL (HBV-DNA) (PCR - CUALITATIVO)', '', '2023-10-03 09:15:59', NULL, 0),
(665939, 'HEPATITIS C AC. ANTI- IGM - (RIA O ELISA)', '', '2023-10-03 09:15:59', NULL, 0),
(665956, 'HEPATITIS C CARGA VIRAL (PCR)', '', '2023-10-03 09:15:59', NULL, 0),
(665965, 'HEPATITIS C GENOTIPIFICACION (PCR)', '', '2023-10-03 09:15:59', NULL, 0),
(665973, 'HEPATITIS C RNA CUALITATIVO - PCR', '', '2023-10-03 09:15:59', NULL, 0),
(665982, 'HEPATITIS C LIA', '', '2023-10-03 09:15:59', NULL, 0),
(665990, 'HEPATITIS DELTA AC. IGG O TOTALES ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(665993, 'HEPATITIS DELTA AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(666008, 'HEPATITIS E AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(666016, 'HEPTACLORO', '', '2023-10-03 09:15:59', NULL, 0),
(666019, 'HEPTACLORO HEPOXIDE', '', '2023-10-03 09:15:59', NULL, 0),
(666034, 'HERPES SIMPLEX 1 / 2 - ANTIC. TOTALES (IFI)', '', '2023-10-03 09:15:59', NULL, 0),
(666037, 'HERPES SIMPLEX 1 / 2 - (PCR)', '', '2023-10-03 09:15:59', NULL, 0),
(666040, 'HERPES SIMPLEX 1 AC. IGA ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(666042, 'HERPES SIMPLEX 1 AC. IGG O TOTALES ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(666050, 'HERPES SIMPLEX 1 AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(666059, 'HERPES SIMPLEX 2 AC. IGA ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(666067, 'HERPES SIMPLEX 2 AC. IGG O TOTALES ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(666076, 'HERPES SIMPLEX 2 AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(666084, 'HERPES SIMPLEX AG.', '', '2023-10-03 09:15:59', NULL, 0),
(666093, 'HERPES VIRUS 6 HUMAN AC. IGG (HHV6-IGG) ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(666096, 'HERPES VIRUS 6 HUMAN AC. IGM (HHV6-IGM) ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(666110, 'HERPES VIRUS 7 AC. IGG ANTI- HHV', '', '2023-10-03 09:15:59', NULL, 0),
(666113, 'HERPES VIRUS 7 AC. IGM ANTI- HHV', '', '2023-10-03 09:15:59', NULL, 0),
(666136, 'HEXANO', '', '2023-10-03 09:15:59', NULL, 0),
(666144, 'HEXANODIONA (2 5-)', '', '2023-10-03 09:15:59', NULL, 0),
(666153, 'HEXOSAMINIDASA TOTAL A Y B', '', '2023-10-03 09:15:59', NULL, 0),
(666161, 'HIDATIDOSIS AC. IGG O TOTALES ANTI- (ELISA)', '', '2023-10-03 09:15:59', NULL, 0),
(666163, 'HIDATIDOSIS AC. IGG O TOTALES ANTI- (IFI)', '', '2023-10-03 09:15:59', NULL, 0),
(666170, 'HIDATIDOSIS AC. IGM ANTI- (ELISA)', '', '2023-10-03 09:15:59', NULL, 0),
(666173, 'HIDATIDOSIS AC. IGM ANTI- (IFI)', '', '2023-10-03 09:15:59', NULL, 0),
(666183, 'HIDROCARBUROS ALIFATICOS', '', '2023-10-03 09:15:59', NULL, 0),
(666187, 'HIDROCARBUROS AROMATICOS', '', '2023-10-03 09:15:59', NULL, 0),
(666196, 'HIDROLASAS ACIDAS EN LEUCOCITOS', '', '2023-10-03 09:15:59', NULL, 0),
(666204, 'HIDROXIPIRENO', '', '2023-10-03 09:15:59', NULL, 0),
(666209, 'HIERRO MEDULA OSEA (MO) - TINCION DE PERLS.', '', '2023-10-03 09:15:59', NULL, 0),
(666211, 'HIERRO TINCION DE', '', '2023-10-03 09:15:59', NULL, 0),
(666213, 'HIERRO - URINARIO', '', '2023-10-03 09:15:59', NULL, 0),
(666222, 'HISTAMINA - PLASMATICA', '', '2023-10-03 09:15:59', NULL, 0),
(666225, 'HISTAMINA - URINARIA', '', '2023-10-03 09:15:59', NULL, 0),
(666238, 'HISTONA AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(666247, 'HISTOPLASMA CAPSULATUM AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(666255, 'HISTOPLASMA CAPSULATUM AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(666264, 'HIV - PCR CUALITATIVO', '', '2023-10-03 09:15:59', NULL, 0),
(666272, 'HIV 1 ANTI-P-24 (CORE)', '', '2023-10-03 09:15:59', NULL, 0),
(666275, 'HIV - P-24 (ANTIGENEMIA)', '', '2023-10-03 09:15:59', NULL, 0),
(666278, 'HIV - P-24 - HIV 1 Y 2 (COMBO)', '', '2023-10-03 09:15:59', NULL, 0),
(666281, 'HIV RESISTENCIA A ANTIRETROVIRALES', '', '2023-10-03 09:15:59', NULL, 0),
(666290, 'HIV - RNA CUANTITATIVO', '', '2023-10-03 09:15:59', NULL, 0),
(666300, 'HLA A MOLECULAR', '', '2023-10-03 09:15:59', NULL, 0),
(666303, 'HLA B MOLECULAR', '', '2023-10-03 09:15:59', NULL, 0),
(666307, 'HLA A B MOLECULAR', '', '2023-10-03 09:15:59', NULL, 0),
(666332, 'HLA B 27 MOLECULAR', '', '2023-10-03 09:15:59', NULL, 0),
(666337, 'HLA-B 5701 TEST', '', '2023-10-03 09:15:59', NULL, 0),
(666341, 'HLA C MOLECULAR', '', '2023-10-03 09:15:59', NULL, 0),
(666401, 'HLA DQ MOLECULAR', '', '2023-10-03 09:15:59', NULL, 0),
(666409, 'HLA DR CITOMETRIA FLUJO', '', '2023-10-03 09:15:59', NULL, 0),
(666426, 'HLA DR MOLECULAR', '', '2023-10-03 09:15:59', NULL, 0),
(666443, 'HLA DQA1 DQB1 (DIABETES) PCR', '', '2023-10-03 09:15:59', NULL, 0),
(666452, 'HOMOCISTEINA', '', '2023-10-03 09:15:59', NULL, 0),
(666455, 'HOMOCISTINA ORINA', '', '2023-10-03 09:15:59', NULL, 0),
(666486, 'HOWELL TEST (PLASMA RECALCIFICADO TIEMPO DE-)', '', '2023-10-03 09:15:59', NULL, 0),
(666520, 'HTLV-1 AC', '', '2023-10-03 09:15:59', NULL, 0),
(666533, 'HTLV-1 PCR', '', '2023-10-03 09:15:59', NULL, 0),
(666537, 'HTLV-I/II (PARTICULAS O ELISA)', '', '2023-10-03 09:15:59', NULL, 0),
(666540, 'HTLV CONFIRMATORIO (WESTERN BLOT)', '', '2023-10-03 09:15:59', NULL, 0),
(666554, 'HU (ANNA-1) AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(666560, 'IA 2 AC. ANTI- (AC. ANTI- TIROSINFOSFATASA 2)', '', '2023-10-03 09:15:59', NULL, 0),
(666585, 'IGA BC - LAGRIMA - INMUNOGLOBULINA A BAJA CONCENTRACION EN LAGRIMA.', '', '2023-10-03 09:15:59', NULL, 1),
(666587, 'IGA BC - LCR - INMUNOGLOBULINA A BAJA CONCENTRACION EN LIQUIDO CEFALO RAQUIDEO.', '', '2023-10-03 09:15:59', NULL, 1),
(666589, 'IGA BC - SALIVA - INMUNOGLOBULINA A BAJA CONCENTRACION EN SALIVA.', '', '2023-10-03 09:15:59', NULL, 1),
(666600, 'IGE BC - LAGRIMAS - INMUNOGLOBULINA E BAJA CONCENTRACION EN LAGRIMA.', '', '2023-10-03 09:15:59', NULL, 1),
(666602, 'IGE BC - LCR - INMUNOGLOBULINA E BAJA CONCENTRACION EN LIQUIDO CEFALO RAQUIDEO.', '', '2023-10-03 09:15:59', NULL, 1),
(666603, 'IGE BC - INMUNOGLOBULINA E BAJA CONCENTRACION.', '', '2023-10-03 09:15:59', NULL, 1),
(666606, 'IGE ESPECIFICA - INMUNOGLOBULINA E ESPECIFICA.', '', '2023-10-03 09:15:59', NULL, 0),
(666614, 'IGE RAST - INMUNOGLOBULINA E - PARA ANTIBIOTICOS (INCLUYE PENICILINAS)', '', '2023-10-03 09:15:59', NULL, 0),
(666631, 'IGG ASOCIADA A PLAQUETAS', '', '2023-10-03 09:15:59', NULL, 0),
(666640, 'IGG - INMUNOGLOBULINA G INDICE DE (LCR/SERICA)', '', '2023-10-03 09:15:59', NULL, 1),
(666648, 'IGG - LCR - INMUNOGLOBULINA G EN LIQUIDO CEFALO RAQUIDEO.', '', '2023-10-03 09:15:59', NULL, 1),
(666657, 'IGG - INMUNOGLOBULINA G SUBCLASES (MODULO 4 SUBCLASES)', '', '2023-10-03 09:15:59', NULL, 0),
(666666, 'IGM - INMUNOGLOBULINA M ASOCIADA A PLAQUETAS.', '', '2023-10-03 09:15:59', NULL, 0),
(666674, 'IGM LCR - INMUNOGLOBULINA M EN LIQUIDO CEFALO RAQUIDEO.', '', '2023-10-03 09:15:59', NULL, 1),
(666676, 'IGM - INMUNOGLOBULINA M BAJA CONCENTRACION EN SALIVA', '', '2023-10-03 09:15:59', NULL, 1),
(666691, 'IL2-R - CD25 RECEPTOR SOLUBLE', '', '2023-10-03 09:15:59', NULL, 1),
(666700, 'INDICAN', '', '2023-10-03 09:15:59', NULL, 0),
(666708, 'INDICE DE INSULINO RESISTENCIA', '', '2023-10-03 09:15:59', NULL, 1),
(666711, 'INDICE DE FUNCION RENAL', '', '2023-10-03 09:15:59', NULL, 1),
(666717, 'INDICE DE PRODUCCION RETICULOCITARIA', '', '2023-10-03 09:15:59', NULL, 1),
(666725, 'INFLUENZA A ANTIGENO (AG.)', '', '2023-10-03 09:15:59', NULL, 0),
(666730, 'INFLUENZA A ANTIGENOS (AGS.) SUBTIPOS - MATERIAL: HISOPADO NASAL / FARINGEO / ASPIRADOS - PCR', '', '2023-10-03 09:15:59', NULL, 0),
(666734, 'INFLUENZA A AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(666742, 'INFLUENZA A AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(666745, 'INFLUENZA A SUBTIPO H1N1 POR EL METODO PCR REAL TIME CON SONDA ESPECIFICA', '', '2023-10-03 09:15:59', NULL, 0),
(666751, 'INFLUENZA B AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(666760, 'INFLUENZA B AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(666768, 'INFLUENZA B ANTIGENO (AG.)', '', '2023-10-03 09:15:59', NULL, 0),
(666769, 'INFLUENZA B (RT-PCR)', '', '2023-10-03 09:15:59', NULL, 0),
(666788, 'INHIBINA B - SERICA', '', '2023-10-03 09:15:59', NULL, 0),
(666819, 'INMUNOCOMPLEJOS CIRCULANTES', '', '2023-10-03 09:15:59', NULL, 0),
(666845, 'INMUNOFENOTIPO-SUBPOBLACIONES LINFOCITARIA- INMUNOMARCACION (CITOMETRIA DE FLUJO)', '', '2023-10-03 09:15:59', NULL, 0),
(666848, 'INMUNOFIJACION - LCR', '', '2023-10-03 09:15:59', NULL, 0),
(666862, 'INSULINA AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(666871, 'INTERFERON GAMMA', '', '2023-10-03 09:15:59', NULL, 0),
(666879, 'INTERLEUQUINA (C/U)', '', '2023-10-03 09:15:59', NULL, 0),
(666888, 'IODO AZIDA PRUEBA', '', '2023-10-03 09:15:59', NULL, 0),
(666896, 'IONOGRAMA EN MATERIA FECAL', '', '2023-10-03 09:15:59', NULL, 0),
(666898, 'IRREGULARES ANTICUERPOS CUALITATIVO.', '', '2023-10-03 09:15:59', NULL, 0),
(666905, 'ISLOTE LANGERHANS PANCREATICOS AC. ANTI- (ICA)', '', '2023-10-03 09:15:59', NULL, 0),
(666922, 'JO-1 AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(666925, 'KREMER TEST DE', '', '2023-10-03 09:15:59', NULL, 0),
(666930, 'LA/SSB AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(666936, 'LACTOFERRINA.', '', '2023-10-03 09:15:59', NULL, 0),
(666939, 'LACTOSA TOLERANCIA A LA', '', '2023-10-03 09:15:59', NULL, 0),
(666947, 'LC-1 AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(666956, 'LEGIONELLA PNEUMOPHILA AC. ANTI- IGG', '', '2023-10-03 09:15:59', NULL, 0),
(666958, 'LEGIONELLA PNEUMOPHILA AC. ANTI- IGM', '', '2023-10-03 09:15:59', NULL, 0),
(666970, 'LEGIONELLA PNEUMOPHILA AG.', '', '2023-10-03 09:15:59', NULL, 0),
(666982, 'LEPTINA', '', '2023-10-03 09:15:59', NULL, 0),
(666999, 'LEPTOSPIRA AC. ANTI- (HAI / MACROAGLUTINACION)', '', '2023-10-03 09:15:59', NULL, 0),
(667007, 'LEPTOSPIRA AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(667010, 'LEPTOSPIRA (CONFIRMATORIO - MICROAGLUTINACION)', '', '2023-10-03 09:15:59', NULL, 0),
(667013, 'LEPTOSPIRA (CULTIVO)', '', '2023-10-03 09:15:59', NULL, 0),
(667016, 'LEPTOSPIRA (FONDO OSCURO O COLORACIONES) - URINARIA', '', '2023-10-03 09:15:59', NULL, 0),
(667017, 'LEPTOSPIRA AC. ANTI- (ELISA / IFI)', '', '2023-10-03 09:15:59', NULL, 0),
(667027, 'LEUCINA - SERICA (AA) (INCLUIDA EN EL PERFIL DE AA EN DIFERENTES MATRICES - CROMATOGRAFIA DE AA)', '', '2023-10-03 09:15:59', NULL, 1),
(667030, 'LEUCEMIAS AGUDAS FENOTIPIFICACION', '', '2023-10-03 09:15:59', NULL, 1),
(667042, 'LEUCINO AMINO PEPTIDASA (L.A.P.)', '', '2023-10-03 09:15:59', NULL, 0),
(667059, 'LEVADURAS SENSIBILIDAD - SCREENING', '', '2023-10-03 09:15:59', NULL, 0),
(667064, 'LEVADURAS TIPIFICACION', '', '2023-10-03 09:15:59', NULL, 0),
(667079, 'LEVODOPA - URINARIA', '', '2023-10-03 09:15:59', NULL, 0),
(667084, 'LEVODOPA - SERICA', '', '2023-10-03 09:15:59', NULL, 0),
(667093, 'LEVULOSA - SEMEN', '', '2023-10-03 09:15:59', NULL, 0),
(667096, 'LEVULOSA - SERICA', '', '2023-10-03 09:15:59', NULL, 0),
(667099, 'LEVULOSA - URINARIA', '', '2023-10-03 09:15:59', NULL, 0),
(667119, 'LINDANE', '', '2023-10-03 09:15:59', NULL, 0),
(667127, 'LINFOCITARIO CULTIVO MIXTO', '', '2023-10-03 09:15:59', NULL, 0),
(667153, 'LINFOCITOS PERIFERICOS  SRY', '', '2023-10-03 09:15:59', NULL, 0),
(667178, 'LIPASA - URINARIA (LIPASURIA)', '', '2023-10-03 09:15:59', NULL, 0),
(667187, 'LIPOPROTEINA A - LP(A)', '', '2023-10-03 09:15:59', NULL, 0),
(667210, 'LISOZIMA', '', '2023-10-03 09:15:59', NULL, 0),
(667230, 'LISTERIA CULTIVO', '', '2023-10-03 09:15:59', NULL, 0),
(667235, 'LISTERIA MONOCITOGENES  O  Y  H', '', '2023-10-03 09:15:59', NULL, 0),
(667240, 'LISTERIA MONOCITOGENES AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(667272, 'LKM AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(667278, 'MACROAMILASA', '', '2023-10-03 09:15:59', NULL, 0),
(667284, 'MACRO CK', '', '2023-10-03 09:15:59', NULL, 0),
(667289, 'MACROPROLACTINEMIA', '', '2023-10-03 09:15:59', NULL, 0),
(667300, 'MAGNESIO - ERITROCITARIO', '', '2023-10-03 09:15:59', NULL, 0),
(667304, 'MAGNESIO - PELO', '', '2023-10-03 09:15:59', NULL, 0),
(667315, 'MAG-SGPG AC. IGM', '', '2023-10-03 09:15:59', NULL, 0),
(667319, 'MALATION', '', '2023-10-03 09:15:59', NULL, 0),
(667324, 'MALON DIALDEHIDO - TBARS', '', '2023-10-03 09:15:59', NULL, 0),
(667338, 'MANGANESO - PELO', '', '2023-10-03 09:15:59', NULL, 0),
(667341, 'MANGANESO - SERICO', '', '2023-10-03 09:15:59', NULL, 0),
(667343, 'MANGANESO - URINARIO', '', '2023-10-03 09:15:59', NULL, 0),
(667349, 'MAO PLAQUETARIO', '', '2023-10-03 09:15:59', NULL, 0),
(667353, 'MARCADORES PRONOSTICOS DE LLC (CITOMETRIA DE FLUJO)', '', '2023-10-03 09:15:59', NULL, 0),
(667367, 'MEMBRANA BASAL AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(667375, 'MERCURIO - PELO (HG-PELO)', '', '2023-10-03 09:15:59', NULL, 0),
(667383, 'METABOLISMO DE LITIASIS RENAL', '', '2023-10-03 09:15:59', NULL, 0),
(667392, 'METACUALONA', '', '2023-10-03 09:15:59', NULL, 0),
(667401, 'METADONA (FPIA)', '', '2023-10-03 09:15:59', NULL, 0),
(667409, 'METAHEMOGLOBINA', '', '2023-10-03 09:15:59', NULL, 0),
(667426, 'METANEFRINAS FRACCIONADAS', '', '2023-10-03 09:15:59', NULL, 0),
(667435, 'METANOL', '', '2023-10-03 09:15:59', NULL, 0),
(667439, 'METAPNEUMOVIRUS HUMANO AG. (HMPV)', '', '2023-10-03 09:15:59', NULL, 0),
(667443, 'METIL ETIL CETONA', '', '2023-10-03 09:15:59', NULL, 1),
(667449, 'METIL PARATHION', '', '2023-10-03 09:15:59', NULL, 0),
(667454, 'METIL.TRITION', '', '2023-10-03 09:15:59', NULL, 0),
(667460, 'METILENTETRAHIDROFOLATO REDUCTASA (MTHRT)- PCR', '', '2023-10-03 09:15:59', NULL, 0),
(667469, 'METILNICOTINAMIDA', '', '2023-10-03 09:15:59', NULL, 0),
(667477, 'METIONINA - PRUEBA DE SOBRECARGA (DOS DETERMINACIONES)', '', '2023-10-03 09:15:59', NULL, 0),
(667486, 'METOTREXATO', '', '2023-10-03 09:15:59', NULL, 0),
(667495, 'MICROAGREGADO PLAQUETARIOS', '', '2023-10-03 09:15:59', NULL, 0),
(667503, 'MICROGLOBULINA BETA 2', '', '2023-10-03 09:15:59', NULL, 0),
(667520, 'MICROSPORIDIA INVESTIGACION', '', '2023-10-03 09:15:59', NULL, 0),
(667529, 'MIELOPEROXIDADA CITOQUIMICA', '', '2023-10-03 09:15:59', NULL, 0),
(667537, 'MIOCARDIO AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(667546, 'MIOGLOBINA - SERICA', '', '2023-10-03 09:15:59', NULL, 0),
(667550, 'MIOGLOBINA - URINARIA', '', '2023-10-03 09:15:59', NULL, 0),
(667571, 'MITOCONDRIAL M2 AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(667580, 'MONOSACARIDOS (CROMATOGRAFIA)', '', '2023-10-03 09:15:59', NULL, 0),
(667597, 'MOPEG -3-METOXI 4-HIDROXI FENIL ETIL GLIC', '', '2023-10-03 09:15:59', NULL, 0),
(667621, 'MUCOSEMEN CRUZADO (MÈTODO MICROSCÒPICO)', '', '2023-10-03 09:15:59', NULL, 0),
(667623, 'MUCOSA GASTRICA AC. ANTI- (CÈLULAS PARIETAL AC. -IFI)', '', '2023-10-03 09:15:59', NULL, 1),
(667624, 'MUCOPOLISACARIDOS - URINARIOS (CUANTITATIVO)', '', '2023-10-03 09:15:59', NULL, 0),
(667626, 'MULTIRRESISTENCIA VIGILANCIA DE BACTERIAS RESISTENTES', '', '2023-10-03 09:15:59', NULL, 0),
(667631, 'MUSCULO ESTRIADO AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(667636, 'MUSK AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(667637, 'MUSCULO LISO AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(667648, 'MYCOAVIUM COMPLEX PCR', '', '2023-10-03 09:15:59', NULL, 0),
(667657, 'MYCOBACTERIA SP HEMOCULTIVO', '', '2023-10-03 09:15:59', NULL, 0),
(667669, 'MYCOBACTERIUM TUBERCULOSIS DNA - PCR', '', '2023-10-03 09:15:59', NULL, 0),
(667674, 'MYCOBACTERIUM TUBERCULOSIS EN LCR', '', '2023-10-03 09:15:59', NULL, 0),
(667691, 'MYCOPLASMA - UREAPLASMA AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(667700, 'MYCOPLASMA - UREAPLASMA CULTIVO', '', '2023-10-03 09:15:59', NULL, 0),
(667708, 'MYCOPLASMA HOMINIS CULTIVO - AISLAMIENTO', '', '2023-10-03 09:15:59', NULL, 0),
(667716, 'MYCOPLASMA PNEUMONIAE AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(667717, 'MYCOPLASMA PNEUMONIAE AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(667725, 'MYCOPLASMA PNEUMONIAE ANTIGENO (AG)', '', '2023-10-03 09:15:59', NULL, 0),
(667734, 'MYCOPLASMA PNEUMONIAE CULTIVO', '', '2023-10-03 09:15:59', NULL, 0),
(667742, 'N N-DIMETILTRIPTAMINA', '', '2023-10-03 09:15:59', NULL, 0),
(667751, 'NEONATAL 17-HIDROXIPROGESTERONA (17-HO-PG-NEO) - SCREENING', '', '2023-10-03 09:15:59', NULL, 0),
(667759, 'NEONATAL BIOTINIDASA - SCREENING', '', '2023-10-03 09:15:59', NULL, 0),
(667768, 'NEONATAL GALACTOSEMIA - SCREENING', '', '2023-10-03 09:15:59', NULL, 0),
(667773, 'NEONATAL LEUCINA - SCREENING', '', '2023-10-03 09:15:59', NULL, 0),
(667777, 'NEONATAL T.I.R. (TRIPSINA INMUNOREATIVA) - SCREENING', '', '2023-10-03 09:15:59', NULL, 0),
(667785, 'NEONATAL T.S.H. - SCREENING', '', '2023-10-03 09:15:59', NULL, 0),
(667794, 'NEUMOCOCO AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(667802, 'NEURON SPECIFIC ENOLASE - NSE', '', '2023-10-03 09:15:59', NULL, 0),
(667819, 'NICOTINA/COTININA', '', '2023-10-03 09:15:59', NULL, 0),
(667828, 'NIQUEL URINARIO', '', '2023-10-03 09:15:59', NULL, 0),
(667836, 'NITROGENO NO PROTEICO', '', '2023-10-03 09:15:59', NULL, 0),
(667845, 'NORMETANEFRINA - URINARIA', '', '2023-10-03 09:15:59', NULL, 0),
(667853, 'NORTRIPTILINA - SERICA', '', '2023-10-03 09:15:59', NULL, 0),
(667862, 'N TELOPEPTIDOS - COLAGENO TIPO I (NTX)', '', '2023-10-03 09:15:59', NULL, 0),
(667871, 'NUCLEOLO AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(667882, 'OPIACEOS - CONFIRMATORIO', '', '2023-10-03 09:15:59', NULL, 1),
(667905, 'ORTO CRESOL (2-METILFENOL)', '', '2023-10-03 09:15:59', NULL, 1),
(667913, 'ORTO METIL BUFOTENINA', '', '2023-10-03 09:15:59', NULL, 0),
(667919, 'ORTO O O - TIETILFOSFOROTOATO', '', '2023-10-03 09:15:59', NULL, 0),
(667926, 'OSMOLALIDAD - URINARIA', '', '2023-10-03 09:15:59', NULL, 0),
(667939, 'OSTEOCALCINA', '', '2023-10-03 09:15:59', NULL, 0),
(667947, 'OVARIO AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(667973, 'P53 AC.', '', '2023-10-03 09:15:59', NULL, 0),
(667982, 'P53 MUTANTE', '', '2023-10-03 09:15:59', NULL, 0),
(667990, 'PAI 4G/5G', '', '2023-10-03 09:15:59', NULL, 0),
(667999, 'PANEL HEPATICO INMUNOLOGICO', '', '2023-10-03 09:15:59', NULL, 0),
(668009, 'PAPILOMA VIRUS HUMANO - HPV (CARGA VIRAL)', '', '2023-10-03 09:15:59', NULL, 0),
(668011, 'PAPILOMA VIRUS HUMANO - HPV (GENOTIPIFICACION - PCR + HIBRIDIZACIÒN)', '', '2023-10-03 09:15:59', NULL, 0),
(668016, 'PARA AMINOFENOL', '', '2023-10-03 09:15:59', NULL, 0),
(668018, 'PAPP-A SE REALIZA JUNTO A BETA LIBRE HCG (3056)', '', '2023-10-03 09:15:59', NULL, 0),
(668110, 'PARACOCCIDIOIDES BRASILIENSIS AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(668115, 'PARACOCCIDIOIDES BRASILIENSIS AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(668127, 'PARACOCCIDIOIDES SPP AC. ANTI- TOTALES', '', '2023-10-03 09:15:59', NULL, 0),
(668135, 'PARAINFLUENZA I AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(668137, 'PARAINFLUENZA I AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(668139, 'PARAINFLUENZA I AG.', '', '2023-10-03 09:15:59', NULL, 0),
(668142, 'PARAINFLUENZA II AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(668144, 'PARAINFLUENZA II AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(668146, 'PARAINFLUENZA II AG.-', '', '2023-10-03 09:15:59', NULL, 0),
(668149, 'PARAINFLUENZA III AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(668151, 'PARAINFLUENZA III AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(668153, 'PARAINFLUENZA III AG.', '', '2023-10-03 09:15:59', NULL, 0),
(668156, 'PARA NITROFENOL', '', '2023-10-03 09:15:59', NULL, 0),
(668161, 'PARATHORMONA PTH (MOLECULA MEDIA)', '', '2023-10-03 09:15:59', NULL, 0),
(668170, 'PARATION', '', '2023-10-03 09:15:59', NULL, 0),
(668178, 'PAROTIDITIS AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(668187, 'PAROTIDITIS AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(668195, 'PAROTIDITIS AC. ESPECIF. POR FC', '', '2023-10-03 09:15:59', NULL, 0),
(668204, 'PAROTIDITIS AC. SOLUBLES', '', '2023-10-03 09:15:59', NULL, 0),
(668212, 'PAROTIDITIS AG.', '', '2023-10-03 09:15:59', NULL, 0),
(668221, 'PAROTIDITIS AG. EN LCR', '', '2023-10-03 09:15:59', NULL, 0),
(668229, 'PARVOVIRUS AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(668238, 'PARVOVIRUS AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(668247, 'PARVOVIRUS B19-1 Y B19-2 PCR', '', '2023-10-03 09:15:59', NULL, 0),
(668272, 'PENTACLOROFENOL', '', '2023-10-03 09:15:59', NULL, 0),
(668274, 'PEN PENFIGO AUTO ANTICUERPOS', '', '2023-10-03 09:15:59', NULL, 0),
(668281, 'PEPTIDO C', '', '2023-10-03 09:15:59', NULL, 0),
(668284, 'PEPTIDO CITRULINADO CICLICO - AC. ANTI- IGG (AC. ANTI- CCP)', '', '2023-10-03 09:15:59', NULL, 0),
(668286, 'PEPTIDO INTESTINAL VASOACTIVO (VIP)', '', '2023-10-03 09:15:59', NULL, 0),
(668289, 'PEPTIDO PROCOLAGENO', '', '2023-10-03 09:15:59', NULL, 0),
(668298, 'PERFIL LIPIDICO', '', '2023-10-03 09:15:59', NULL, 0),
(668315, 'PEROXIDASA TIROIDEO AC. ANTI- (ATPPO)', '', '2023-10-03 09:15:59', NULL, 0),
(668332, 'PESTICIDAS ORGANOCLORADOS (PLAGUICIDAS) URINARIOS', '', '2023-10-03 09:15:59', NULL, 0),
(668337, 'PESTICIDAS ORGANOFOSFORADOS (PLAGUICIDAS PARATHION) PLASMATICOS', '', '2023-10-03 09:15:59', NULL, 0),
(668348, 'PIRIDINOLINA', '', '2023-10-03 09:15:59', NULL, 0),
(668358, 'PLAQUETARIA ADHESIVIDAD', '', '2023-10-03 09:15:59', NULL, 0),
(668366, 'PLAQUETARIA AGREGACION (CON 6 INDUCTORES)', '', '2023-10-03 09:15:59', NULL, 0),
(668375, 'PLAQUETAS AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(668383, 'PLASMINOGENO', '', '2023-10-03 09:15:59', NULL, 0),
(668385, 'PLASMINOGENO ACTIVADOR TISULAR DE - PAI-1 (BIOLOGICO- INMUNOLOGICO)', '', '2023-10-03 09:15:59', NULL, 0),
(668387, 'PLASMINOGENO INHIBIDOR DEL ACTIVADOR TISULAR DEL (PAI - AIP)', '', '2023-10-03 09:15:59', NULL, 0),
(668397, 'PLATA - SERICA', '', '2023-10-03 09:15:59', NULL, 0),
(668400, 'PLATA - URINARIA', '', '2023-10-03 09:15:59', NULL, 0),
(668409, 'PLOMO - PELO', '', '2023-10-03 09:15:59', NULL, 0),
(668418, 'PM-1 AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 1),
(668426, 'PNEUMOCYSTIS CARINII IFD', '', '2023-10-03 09:15:59', NULL, 0),
(668435, 'PODER BACTERICIDA DEL SUERO (PBS)', '', '2023-10-03 09:15:59', NULL, 0),
(668440, 'PODER INHIBITORIO DEL SUERO (P.I.S.)', '', '2023-10-03 09:15:59', NULL, 0),
(668450, 'POLIMORFISMO IL 28B', '', '2023-10-03 09:15:59', NULL, 0),
(668460, 'POLIMORFONUCLEARES QUIMIOTAXIS', '', '2023-10-03 09:15:59', NULL, 0),
(668463, 'POLIOMAVIRUS BK CARGA VIRAL - SANGRE U ORINA', '', '2023-10-03 09:15:59', NULL, 0),
(668464, 'POLIOMAVIRUS BK PCR - SANGRE U ORINA', '', '2023-10-03 09:15:59', NULL, 0),
(668466, 'POLIOMAVIRUS JC CARGA VIRAL - SANGRE U ORINA', '', '2023-10-03 09:15:59', NULL, 0),
(668467, 'POLIOMAVIRUS JC PCR - LCR', '', '2023-10-03 09:15:59', NULL, 0),
(668469, 'POLIQUISTOSIS RENAL - PCR', '', '2023-10-03 09:15:59', NULL, 0),
(668477, 'PORFIRINAS - MATERIA FECAL', '', '2023-10-03 09:15:59', NULL, 0),
(668486, 'PORFIRINAS - SERICAS', '', '2023-10-03 09:15:59', NULL, 0),
(668489, 'PORFIRINAS INDICE DE - PLASMATICAS', '', '2023-10-03 09:15:59', NULL, 1),
(668493, 'PORFIRINAS TOTALES - ERITROCITARIAS', '', '2023-10-03 09:15:59', NULL, 0),
(668529, 'PORFOBILINOGENO (CUANTITATIVO).', '', '2023-10-03 09:15:59', NULL, 0),
(668537, 'POTASIO - ERITROCITARIO', '', '2023-10-03 09:15:59', NULL, 0),
(668546, 'PREALBUMINA', '', '2023-10-03 09:15:59', NULL, 0),
(668554, 'PRO BNP - PEPTIDO NATRIURETICO HORMONA.', '', '2023-10-03 09:15:59', NULL, 0),
(668563, 'PROCALCITONINA', '', '2023-10-03 09:15:59', NULL, 0),
(668571, 'PROINSULINA - PLASMATICA', '', '2023-10-03 09:15:59', NULL, 0),
(668580, 'PROGESTERONA 17-HIDROXI (17-OH-PG)', '', '2023-10-03 09:15:59', NULL, 0),
(668597, 'PROPOXIFENO - NORPROPOXIFENO', '', '2023-10-03 09:15:59', NULL, 0),
(668606, 'PROTEINA BASICA DE MIELINA', '', '2023-10-03 09:15:59', NULL, 0),
(668610, 'PROTEINA BENCE JONES INVESTIGACION DE CADENA LIVIANA KAPPA Y LAMBDA (HPLC / IEF)', '', '2023-10-03 09:15:59', NULL, 1),
(668614, 'PROTEINA C FUNCIONAL - CROMOGENICO', '', '2023-10-03 09:15:59', NULL, 0),
(668623, 'PROTEINA C REACTIVA - ULTRASENSIBLE', '', '2023-10-03 09:15:59', NULL, 0),
(668631, 'PROTEINA S LIBRE = INMUNOTURBIDIMETRIO', '', '2023-10-03 09:15:59', NULL, 0),
(668640, 'PROTEINA S TOTAL', '', '2023-10-03 09:15:59', NULL, 0),
(668641, 'PROTEINA 14-3-3 ENFERMEDAD DE CREUTZFELD JAKOV', '', '2023-10-03 09:15:59', NULL, 0),
(668648, 'PROTEINA S FUNCIONAL = COAGULOMETRICO', '', '2023-10-03 09:15:59', NULL, 0),
(668656, 'PROTEINASA 3(PR3) AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(668665, 'PROTEINOGRAMA LCR', '', '2023-10-03 09:15:59', NULL, 0),
(668682, 'PROTOPORFIRINA ERITROCITARIA', '', '2023-10-03 09:15:59', NULL, 0),
(668691, 'PROTROMBINA 20.210', '', '2023-10-03 09:15:59', NULL, 0),
(668710, 'PSEUDOMONAS AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(668734, 'QUERATINOCITOS (PIEL) AC ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(668759, 'QUIMIOTRIPSINA - MATERIA FECAL', '', '2023-10-03 09:15:59', NULL, 0),
(668768, 'QUINIDINA', '', '2023-10-03 09:15:59', NULL, 0),
(668780, 'REARREGLO DEL IGH/FGFR3 ESTUDIO PARA (FISH)', '', '2023-10-03 09:15:59', NULL, 0),
(668783, 'REARREGLO DEL IGH/MAF ESTUDIO PARA (FISH)', '', '2023-10-03 09:15:59', NULL, 0),
(668790, 'DETERMINACION DE AMPLIFICACION GENICA (FISH)', '', '2023-10-03 09:15:59', NULL, 0),
(668794, 'REARREGLO DEL TCR (CITROMETRÌA DE FLUJO)', '', '2023-10-03 09:15:59', NULL, 0),
(668802, 'RECEPTOR TSH AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 1),
(668819, 'RENINA-ANGIOTENSINA / RENINA ACTIVA', '', '2023-10-03 09:15:59', NULL, 0),
(668828, 'RESISTENCIA A LA PROTIINA C ACTIVADA', '', '2023-10-03 09:15:59', NULL, 0),
(668836, 'RETICULINA AC. ANTI- (ARA)', '', '2023-10-03 09:15:59', NULL, 0),
(668845, 'RETINA AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(668853, 'RI (ANNA-2) AC. ANTI- (NEURONAL NUCLEAR-2)', '', '2023-10-03 09:15:59', NULL, 0),
(668870, 'RICKETTSIAS PROWAZEKII AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(668874, 'RICKETTSIAS TYPHI AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(668888, 'RNA AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(668896, 'RNP AC. ANTI- (RIBONUCLEOPROT)', '', '2023-10-03 09:15:59', NULL, 0),
(668905, 'RO AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(668918, 'ROSA DE BENGALA', '', '2023-10-03 09:15:59', NULL, 0),
(668922, 'ROTAVIRUS - AG -AC- MN (ELISA)', '', '2023-10-03 09:15:59', NULL, 0),
(668934, 'ROTAVIRUS - ACC-', '', '2023-10-03 09:15:59', NULL, 0),
(668939, 'ROTAVIRUS AG. - HECES', '', '2023-10-03 09:15:59', NULL, 1),
(668947, 'SACAROSA', '', '2023-10-03 09:15:59', NULL, 0),
(668956, 'SACCHAROMYSES AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(668964, 'SALIVA EX. FISICO-QUIMICO', '', '2023-10-03 09:15:59', NULL, 0),
(668973, 'SANGRE OCULTA ESPECIFICO - MATERIA FECAL (S.O.M.F. ESP.)', '', '2023-10-03 09:15:59', NULL, 0),
(668982, 'SARAMPION AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(668990, 'SARAMPION AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(668999, 'SCLERODERMIA - SCL 70 AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(669007, 'SCORE DE MOCO', '', '2023-10-03 09:15:59', NULL, 0),
(669016, 'SELENIO (AA) - SERICO', '', '2023-10-03 09:15:59', NULL, 0),
(669019, 'SELENIO - URINARIO', '', '2023-10-03 09:15:59', NULL, 0),
(669041, 'SEROTONINA - PLAQUETARIA', '', '2023-10-03 09:15:59', NULL, 0),
(669045, 'SEROTONINA - URINARIA', '', '2023-10-03 09:15:59', NULL, 0),
(669058, 'SILICIO - ESPUTO', '', '2023-10-03 09:15:59', NULL, 0),
(669076, 'SINCICIAL RESPIRATORIO AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(669084, 'SINCICIAL RESPIRATORIO AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(669093, 'SINCICIAL RESPIRATORIO ANTIGENO (AG.)', '', '2023-10-03 09:15:59', NULL, 0),
(669101, 'SINDROMES LINFOPROLIF. CRONICOS - FENOTI', '', '2023-10-03 09:15:59', NULL, 0),
(669105, 'SIROLIMUS DROGA CITOSTATICA - RAPAMICINA', '', '2023-10-03 09:15:59', NULL, 0),
(669110, 'SM AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(669118, 'SOMATOMEDINA C- IGFB1', '', '2023-10-03 09:15:59', NULL, 0),
(669120, 'SOMATOMEDINA - IGFBP-3 - (INSULIN LIKE GROWTH FACTOR BIND PROT 3)', '', '2023-10-03 09:15:59', NULL, 0),
(669127, 'SREPTOCOCCUS BETA-HEMOLITICO GRUPO B - PRENATAL (ANAL/VAGINAL)', '', '2023-10-03 09:15:59', NULL, 0),
(669132, 'STREPTOCOCCUS GRUPO B AG. - SERICO', '', '2023-10-03 09:15:59', NULL, 0),
(669135, 'STREPTOCOCCUS GRUPO B AG. - URINARIO', '', '2023-10-03 09:15:59', NULL, 0),
(669157, 'STREPTOCOCCUS PNEUMONIAE AG. - ESPUTO', '', '2023-10-03 09:15:59', NULL, 0),
(669161, 'STREPTOCOCCUS PNEUMONIAE AG. - SERICO', '', '2023-10-03 09:15:59', NULL, 0),
(669164, 'STREPTOCOCCUS PNEUMONIAE AG. - URINARIO', '', '2023-10-03 09:15:59', NULL, 0),
(669180, 'STREPTOZYME TEST (ESTREPTOZIMA)', '', '2023-10-03 09:15:59', NULL, 0),
(669187, 'SUBUNIDAD ALFA HIPOFISIARIA', '', '2023-10-03 09:15:59', NULL, 0),
(669195, 'SUCCINIL ACETONA - URINARIA', '', '2023-10-03 09:15:59', NULL, 1),
(669204, 'SUCCINIL PURINAS', '', '2023-10-03 09:15:59', NULL, 0),
(669212, 'SUCROSA TEST DE', '', '2023-10-03 09:15:59', NULL, 0),
(669223, 'SUDOR TEST CONFIRMATORIO.', '', '2023-10-03 09:15:59', NULL, 0),
(669229, 'SULFAHEMOGLOBINA POR COOXIMETRIA', '', '2023-10-03 09:15:59', NULL, 0),
(669238, 'SULFATOS - URINARIOS', '', '2023-10-03 09:15:59', NULL, 0),
(669246, 'SULFOTEP', '', '2023-10-03 09:15:59', NULL, 0),
(669255, 'SUPEROXIDO DISMUTASA (S.O.D.) - SERICA', '', '2023-10-03 09:15:59', NULL, 0),
(669265, 'SUSTANCIA INTERCELULAR AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 1),
(669281, 'TALASEMIAS BETA-MUTACIONES', '', '2023-10-03 09:15:59', NULL, 0),
(669293, 'TALIO - PELO', '', '2023-10-03 09:15:59', NULL, 0),
(669306, 'TDT - CITOMETRIA DE FLUJO', '', '2023-10-03 09:15:59', NULL, 0),
(669314, 'TEST DE DESENSIBILIZACION TESTICULAR', '', '2023-10-03 09:15:59', NULL, 0),
(669332, 'TEST DE NITRO BLUE TETRAZOLIUM CON ESTIMULACION (TEST - NBTS)', '', '2023-10-03 09:15:59', NULL, 0),
(669340, 'TEST DE NITRO BLUE TETRAZOLIUM (TEST - NBT)', '', '2023-10-03 09:15:59', NULL, 0),
(669349, 'TEST DE NUGENT - SERICO', '', '2023-10-03 09:15:59', NULL, 0),
(669366, 'TESTOSTERONA DEHIDRO (DHT)', '', '2023-10-03 09:15:59', NULL, 0),
(669375, 'TESTOSTERONA LIBRE TO-L', '', '2023-10-03 09:15:59', NULL, 0),
(669383, 'TESTOSTERONA - URINARIA', '', '2023-10-03 09:15:59', NULL, 0),
(669409, 'TIOCIANATOS - URINARIOS', '', '2023-10-03 09:15:59', NULL, 0),
(669417, 'TIOCIANATOS - SERICOS', '', '2023-10-03 09:15:59', NULL, 0),
(669426, 'TIONACINA', '', '2023-10-03 09:15:59', NULL, 0),
(669434, 'TIOSULFATOS - URINARIOS', '', '2023-10-03 09:15:59', NULL, 0),
(669443, 'TIROGLOBULINA (TGS)', '', '2023-10-03 09:15:59', NULL, 0),
(669460, 'TIROGLOBULINA AC. ULTRASENSIBLE.', '', '2023-10-03 09:15:59', NULL, 0),
(669469, 'TIROGLOBULINA - LIQUIDO DE PUNCION (TG LP)', '', '2023-10-03 09:15:59', NULL, 0),
(669477, 'TIROSINA (AMINOACIDO - A. AC.)', '', '2023-10-03 09:15:59', NULL, 0),
(669486, 'TITULACION DE ANTICUERPO VIII (MET..BIOL.)', '', '2023-10-03 09:15:59', NULL, 0),
(669490, 'TOPIRAMATO', '', '2023-10-03 09:15:59', NULL, 0),
(669494, 'TOXINA BOTULINICA AC.', '', '2023-10-03 09:15:59', NULL, 0),
(669503, 'ESCHERICCIA COLI TOXINA DE (VEROTOXINA)', '', '2023-10-03 09:15:59', NULL, 0),
(669511, 'TOXOCARA CANIS AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(669514, 'TOXOCARA CANIS AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(669538, 'TOXOIDE TETANICO AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(669561, 'TOXOPLASMOSIS AC. IGA ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(669565, 'TOXOPLASMOSIS AC. IGA ISAGA ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(669571, 'TOXOPLASMOSIS AC. IGG ANTI- (ELISA)', '', '2023-10-03 09:15:59', NULL, 0),
(669575, 'TOXOPLASMOSIS AC. IGG ANTI- (TEST DE AVIDEZ)', '', '2023-10-03 09:15:59', NULL, 0),
(669580, 'TOXOPLASMOSIS AC. IGM ANTI- (ELISA)', '', '2023-10-03 09:15:59', NULL, 0),
(669588, 'TOXOPLASMOSIS AC. IGM ANTI- (IFI)', '', '2023-10-03 09:15:59', NULL, 0),
(669591, 'TOXOPLASMOSIS PCR', '', '2023-10-03 09:15:59', NULL, 0),
(669597, 'T-PA INMUNOLOGICO', '', '2023-10-03 09:15:59', NULL, 0),
(669622, 'TRANSGLUTAMINASA AC. IGA ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(669631, 'TRANSGLUTAMINASA AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(669633, 'TRANSLOCACION (9 22) REAR. BCR/ABL LMC', '', '2023-10-03 09:15:59', NULL, 0),
(669634, 'TRANSLOCACION (9 22) REAR. BCR/ABL LLA', '', '2023-10-03 09:15:59', NULL, 0),
(669635, 'TRANSLOCACION 14 18', '', '2023-10-03 09:15:59', NULL, 0),
(669636, 'TRANSLOCACION MLL/AF4 T (4 11)', '', '2023-10-03 09:15:59', NULL, 0),
(669637, 'TRANSLOCACION PML/RAR T (15 17)', '', '2023-10-03 09:15:59', NULL, 0),
(669638, 'TRASLOCACION T (8 21) - AML 1/ETO', '', '2023-10-03 09:15:59', NULL, 0),
(669639, 'TRASLOCACION TEL /AML T(12 21)', '', '2023-10-03 09:15:59', NULL, 0),
(669641, 'TRASLOCACION VARIAS - CUALITATIVA (C/U)', '', '2023-10-03 09:15:59', NULL, 0),
(669642, 'TRASLOCACION VARIOS - CUANTITATIVA (C/U)', '', '2023-10-03 09:15:59', NULL, 0),
(669644, 'TREPONEMA PALLIDUM FTA ABS AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(669647, 'TRICHINELLA SPIRALIS AC. IGG ANTI-/AC. TOTALES', '', '2023-10-03 09:15:59', NULL, 0),
(669649, 'TRICHINELLA SPIRALIS AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(669653, 'TRICHOMONAS CULTIVO PARA-', '', '2023-10-03 09:15:59', NULL, 0),
(669657, 'TRICLOROETANOL', '', '2023-10-03 09:15:59', NULL, 0),
(669661, 'TRIIODOTIRONINA LIBRE - T3 LIBRE', '', '2023-10-03 09:15:59', NULL, 0),
(669665, 'TRIPLE TEST', '', '2023-10-03 09:15:59', NULL, 0),
(669674, 'TRIPLE TEST SOFT', '', '2023-10-03 09:15:59', NULL, 0),
(669682, 'TRIPSINA AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(669691, 'TRIPTOFANO', '', '2023-10-03 09:15:59', NULL, 0),
(669699, 'TRIQUINOSIS AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 1),
(669703, 'TRIQUINOSIS AC. TOTALES ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(669716, 'TROMBOFILIA PANEL', '', '2023-10-03 09:15:59', NULL, 0),
(669725, 'TROPONINA I', '', '2023-10-03 09:15:59', NULL, 0),
(669734, 'TROPONINA T', '', '2023-10-03 09:15:59', NULL, 0),
(669735, 'TROPONINA T (CUANTITATIVO) TNT-CUANTI', '', '2023-10-03 09:15:59', NULL, 0),
(669747, 'TUMOR NECROSIS FACTOR', '', '2023-10-03 09:15:59', NULL, 0),
(669759, 'UREAPLASMA UREALITICUM (CULTIVO).', '', '2023-10-03 09:15:59', NULL, 0),
(669768, 'UROPORFIRINAS - MATERIA FECAL', '', '2023-10-03 09:15:59', NULL, 0),
(669773, 'UROPORFIRINAS - URINARIAS', '', '2023-10-03 09:15:59', NULL, 0),
(669780, 'VACUNA LINFOCITARIA', '', '2023-10-03 09:15:59', NULL, 0),
(669787, 'VAGINAL BALANCE DEL CONTENIDO (BACOVA)', '', '2023-10-03 09:15:59', NULL, 1),
(669793, 'VANCOMICINA', '', '2023-10-03 09:15:59', NULL, 0),
(669810, 'VARICELA ZOSTER AG.', '', '2023-10-03 09:15:59', NULL, 1),
(669819, 'VARICELA ZOSTER AC. IGG ANTI-', '', '2023-10-03 09:15:59', NULL, 1),
(669828, 'VARICELA ZOSTER AC. IGM ANTI-', '', '2023-10-03 09:15:59', NULL, 1),
(669834, 'VARICELA ZOSTER DNA POR PCR', '', '2023-10-03 09:15:59', NULL, 1),
(669846, 'VIGABATRINA', '', '2023-10-03 09:15:59', NULL, 0),
(669853, 'VIRUS-JUNIN AC. ANTI- IGG (FHA)', '', '2023-10-03 09:15:59', NULL, 0),
(669858, 'VIRUS-JUNIN AC. ANTI- IGM (FHA)', '', '2023-10-03 09:15:59', NULL, 0),
(669870, 'VISCOSIDAD PLASMATICA', '', '2023-10-03 09:15:59', NULL, 0),
(669879, 'VITAMINA B 1 (TIAMINA)', '', '2023-10-03 09:15:59', NULL, 0),
(669887, 'VITAMINA B6 (PIRIDOXINA)', '', '2023-10-03 09:15:59', NULL, 0),
(669896, 'VITAMINA C (LIQUIDO SEMINAL - PLAQUETARIA - SERICA)', '', '2023-10-03 09:15:59', NULL, 0),
(669905, 'VITAMINA D (1 25-DIHIDROXICALCIFEROL)', '', '2023-10-03 09:15:59', NULL, 0),
(669913, 'VITAMINA D3 (25-HIDROXICALCIFEROL)', '', '2023-10-03 09:15:59', NULL, 0),
(669918, 'VLDL-COLESTEROL LIPOPROTEINA DE MUY BAJA DENSIDAD.', '', '2023-10-03 09:15:59', NULL, 0),
(669939, 'XANTINA', '', '2023-10-03 09:15:59', NULL, 0),
(669947, 'YERSINIA ENTEROCOLITICA CULTIVO', '', '2023-10-03 09:15:59', NULL, 1),
(669956, 'YO AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(669960, 'YO (PCA-1) AC. ANTI-', '', '2023-10-03 09:15:59', NULL, 0),
(669966, 'ZAP 70', '', '2023-10-03 09:15:59', NULL, 0),
(669973, 'ZINC - URINARIO (ZN-URINARIO)', '', '2023-10-03 09:15:59', NULL, 0),
(669984, 'ZINC - PELO (ZN-PELO)', '', '2023-10-03 09:15:59', NULL, 0),
(669987, 'ZINC - SEMEN (ZN-SEMEN)', '', '2023-10-03 09:15:59', NULL, 0),
(669999, 'DETECCION DE LA MUTACION DEL GEN JAK 2', '', '2023-10-03 09:15:59', NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `new_audit_orders`
--

DROP TABLE IF EXISTS `new_audit_orders`;
CREATE TABLE `new_audit_orders` (
  `id` int(10) UNSIGNED NOT NULL,
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

DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` int(10) UNSIGNED NOT NULL,
  `diagnostico` varchar(250) NOT NULL,
  `comment` varchar(250) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1 COMMENT '0: inactivo, 1: activo',
  `date_create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `user_id` int(10) UNSIGNED NOT NULL COMMENT 'id de usuario paciente',
  `employee_id` int(10) UNSIGNED NOT NULL COMMENT 'id de usuarios que crea la orden',
  `doctor_id` int(10) UNSIGNED NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `diagnostico`, `comment`, `status`, `date_create_at`, `user_id`, `employee_id`, `doctor_id`, `createdAt`, `updatedAt`) VALUES
(1, 'Tiene fiebre', NULL, 1, '2023-10-21 01:52:45', 1, 1, 1, '2023-10-21 06:51:46', '2023-10-21 02:17:19'),
(2, 'Presenta diarrea', 'Esto proviene por ingerir una comida en mal estado', 1, '2023-10-23 21:31:55', 1, 2, 1, '0000-00-00 00:00:00', '2023-10-23 21:31:55'),
(3, 'control general', 'El doctor solicitó un analisis general para control', 1, '2023-10-23 21:40:05', 9, 2, 1, '0000-00-00 00:00:00', '2023-10-23 21:40:05'),
(4, 'Chequeo general', 'el medico solicita un control general', 1, '2023-10-23 21:49:01', 9, 2, 1, '0000-00-00 00:00:00', '2023-10-23 21:49:01'),
(5, 'diarrea', 'fdsasf', 1, '2023-10-23 22:48:28', 1, 2, 1, '0000-00-00 00:00:00', '2023-10-23 22:48:28');

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

DROP TABLE IF EXISTS `profiles`;
CREATE TABLE `profiles` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `access_auth` tinyint(3) UNSIGNED NOT NULL,
  `type` varchar(80) NOT NULL,
  `date_update_at` datetime DEFAULT NULL,
  `date_create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `license` varchar(45) DEFAULT NULL,
  `date_delete_at` varchar(45) DEFAULT NULL,
  `users_id` int(10) UNSIGNED NOT NULL,
  `users_update_users_id` int(10) UNSIGNED NOT NULL,
  `users_create_users_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `samples`
--

DROP TABLE IF EXISTS `samples`;
CREATE TABLE `samples` (
  `id` int(10) UNSIGNED NOT NULL,
  `date_update_at` datetime DEFAULT NULL,
  `date_create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `valid` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar ciudades';

-- --------------------------------------------------------

--
-- Table structure for table `states`
--

DROP TABLE IF EXISTS `states`;
CREATE TABLE `states` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(80) NOT NULL,
  `date_update_at` datetime DEFAULT NULL,
  `date_create_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar ciudades';

--
-- Dumping data for table `states`
--

INSERT INTO `states` (`id`, `name`, `date_update_at`, `date_create_at`) VALUES
(1, 'Buenos Aires', NULL, '2023-10-11 08:31:28'),
(2, 'Catamarca', NULL, '2023-10-11 08:31:28'),
(3, 'Chaco', NULL, '2023-10-11 08:31:28'),
(4, 'Chubut', NULL, '2023-10-11 08:31:28'),
(5, 'Córdoba', NULL, '2023-10-11 08:31:28'),
(6, 'Corrientes', NULL, '2023-10-11 08:31:28'),
(7, 'Entre Ríos', NULL, '2023-10-11 08:31:28'),
(8, 'Formosa', NULL, '2023-10-11 08:31:28'),
(9, 'Jujuy', NULL, '2023-10-11 08:31:28'),
(10, 'La Pampa', NULL, '2023-10-11 08:31:28'),
(11, 'La Rioja', NULL, '2023-10-11 08:31:28'),
(12, 'Mendoza', NULL, '2023-10-11 08:31:28'),
(13, 'Misiones', NULL, '2023-10-11 08:31:28'),
(14, 'Neuquén', NULL, '2023-10-11 08:31:28'),
(15, 'Río Negro', NULL, '2023-10-11 08:31:28'),
(16, 'Salta', NULL, '2023-10-11 08:31:28'),
(17, 'San Juan', NULL, '2023-10-11 08:31:28'),
(18, 'San Luis', NULL, '2023-10-11 08:31:28'),
(19, 'Santa Cruz', NULL, '2023-10-11 08:31:28'),
(20, 'Santa Fe', NULL, '2023-10-11 08:31:28'),
(21, 'Santiago del Estero', NULL, '2023-10-11 08:31:28'),
(22, 'Tierra del Fuego, Antártida e Islas del Atlántico Sur', NULL, '2023-10-11 08:31:28'),
(23, 'Tucumán', NULL, '2023-10-11 08:31:28');

-- --------------------------------------------------------

--
-- Table structure for table `studies`
--

DROP TABLE IF EXISTS `studies`;
CREATE TABLE `studies` (
  `id` int(10) UNSIGNED NOT NULL,
  `order_id` int(10) UNSIGNED NOT NULL,
  `exams_id` int(10) UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1 COMMENT 'estados de estudio TABLA',
  `date_create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `update_at` date DEFAULT NULL,
  `observations` varchar(250) DEFAULT NULL,
  `date_validate` date DEFAULT NULL,
  `studie_results_id` int(10) UNSIGNED DEFAULT NULL,
  `tests_id` int(10) UNSIGNED DEFAULT NULL,
  `samples_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar estudios a relaizar en un paciente';

-- --------------------------------------------------------

--
-- Table structure for table `studie_results`
--

DROP TABLE IF EXISTS `studie_results`;
CREATE TABLE `studie_results` (
  `id` int(10) UNSIGNED NOT NULL,
  `status` tinyint(1) DEFAULT 2 COMMENT 'estados de resultado en 1 valido, 0 no valido 2 en proceso ',
  `values` varchar(250) DEFAULT NULL,
  `values_standard` varchar(250) DEFAULT NULL,
  `date_create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `date_validate` date DEFAULT NULL,
  `observations` varchar(250) DEFAULT NULL,
  `studies_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar estudios a relaizar';

-- --------------------------------------------------------

--
-- Table structure for table `tests_reference_values`
--

DROP TABLE IF EXISTS `tests_reference_values`;
CREATE TABLE `tests_reference_values` (
  `id` int(10) UNSIGNED NOT NULL,
  `reference_value` varchar(50) NOT NULL,
  `date_create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `observations` varchar(250) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1 COMMENT '0: inactivo 1 activo',
  `gender` tinyint(1) DEFAULT NULL,
  `age_min` int(11) DEFAULT NULL,
  `age_max` int(11) DEFAULT NULL,
  `pregnant` tinyint(3) UNSIGNED NOT NULL,
  `tests_id` int(10) UNSIGNED NOT NULL,
  `value_max` int(11) DEFAULT NULL,
  `value_min` int(11) DEFAULT NULL,
  `exams_id` int(10) UNSIGNED NOT NULL,
  `name_value` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar valores standard de estudios';

-- --------------------------------------------------------

--
-- Table structure for table `test_groups`
--

DROP TABLE IF EXISTS `test_groups`;
CREATE TABLE `test_groups` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `date_create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `observations` varchar(250) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1 COMMENT '0: inactivo, 1: activo',
  `tests_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar esudios disponibles';

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `first_name` varchar(80) NOT NULL,
  `last_name` varchar(80) NOT NULL,
  `gender` char(1) NOT NULL COMMENT 'M: masculino, F: femenino, X: gen x',
  `active` tinyint(1) NOT NULL DEFAULT 1 COMMENT '0: inactivo, 1: activo',
  `document` int(11) NOT NULL,
  `phone` int(11) NOT NULL,
  `email` varchar(80) NOT NULL,
  `address` varchar(80) NOT NULL,
  `date_birth_at` date DEFAULT NULL,
  `password` varchar(80) NOT NULL,
  `create_users_id` int(10) UNSIGNED NOT NULL,
  `update_users_id` int(10) UNSIGNED NOT NULL,
  `cityId` int(10) UNSIGNED NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `pregnant` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `gender`, `active`, `document`, `phone`, `email`, `address`, `date_birth_at`, `password`, `create_users_id`, `update_users_id`, `cityId`, `createdAt`, `updatedAt`, `pregnant`) VALUES
(1, 'Rafael', 'Lopez', 'M', 0, 18364223, 555555, 'lopezrafa@gmail.com', 'mod 5 casa 6', '1967-10-23', '', 0, 0, 145, '2023-10-19 01:14:53', '2023-10-19 04:15:42', 0),
(2, 'Leonel', 'Toloza', 'M', 0, 38860057, 1133466839, 'leotoloza6@gmail.com', '', NULL, '12345', 0, 0, 1, '2023-10-19 01:14:53', '2023-10-19 04:35:19', 0),
(3, 'Usuario', 'Prueba', 'F', 1, 1232455, 555555555, 'usuarioPrubea@gmail.com', '', NULL, '123456', 0, 0, 1, '2023-10-19 01:14:53', '2023-10-23 23:34:53', 1),
(4, 'Usuario', 'Prueba2', 'M', 1, 12347891, 321546789, 'usuarioPrueba@gmail.com', '', NULL, '123456789', 0, 0, 1, '2023-10-19 01:14:53', '2023-10-19 02:01:14', 0),
(5, 'Francisco', 'Pancho', 'M', 1, 159753, 123456789, 'usuarioPrueba2@gmail.com', '', NULL, '123456798', 0, 0, 1, '2023-10-19 01:14:53', '2023-10-19 02:01:20', 0),
(6, 'Prueba', 'Usuario', 'F', 1, 123456, 123465, 'usuarioPrueba@gmail.com', '', NULL, '14789', 0, 0, 1, '2023-10-19 01:14:53', '2023-10-19 02:01:24', 0),
(7, 'Prueba', 'Usuario', 'F', 1, 123456, 123465, 'usuarioPrueba@gmail.com', '', NULL, '14789', 0, 0, 1, '2023-10-19 01:14:53', '2023-10-19 02:01:27', 0),
(8, 'Prueba', 'Usuario', 'F', 1, 123456, 123465, 'usuarioPrueba@gmail.com', '', NULL, '14789', 0, 0, 1, '2023-10-19 01:14:53', '2023-10-19 02:01:29', 0),
(9, 'Usuario', 'Prueba', 'M', 1, 159988, 123456, 'leotoloza6@gmail.com', '', NULL, '123456', 0, 0, 1, '2023-10-19 01:14:53', '2023-10-19 02:01:31', 0);

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
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `exams`
--
ALTER TABLE `exams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `empleado` (`employee_id`),
  ADD KEY `doctor` (`doctor_id`),
  ADD KEY `paciente` (`user_id`);

--
-- Indexes for table `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_profiles_users1_idx1` (`users_id`,`users_update_users_id`,`users_create_users_id`);

--
-- Indexes for table `samples`
--
ALTER TABLE `samples`
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
  ADD KEY `fk_studies_studie_results1_idx` (`studie_results_id`),
  ADD KEY `fk_studies_tests1_idx` (`tests_id`),
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
-- Indexes for table `tests_reference_values`
--
ALTER TABLE `tests_reference_values`
  ADD PRIMARY KEY (`id`,`tests_id`) USING BTREE,
  ADD KEY `fk_tests_reference_values_tests1_idx` (`tests_id`),
  ADD KEY `fk_tests_reference_values_exams1_idx` (`exams_id`);

--
-- Indexes for table `test_groups`
--
ALTER TABLE `test_groups`
  ADD PRIMARY KEY (`id`,`tests_id`),
  ADD KEY `fk_test_groups_tests1_idx` (`tests_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`,`update_users_id`,`create_users_id`) USING BTREE,
  ADD KEY `fk_users_citys1_idx` (`cityId`),
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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=370;

--
-- AUTO_INCREMENT for table `doctors`
--
ALTER TABLE `doctors`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `profiles`
--
ALTER TABLE `profiles`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `samples`
--
ALTER TABLE `samples`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `states`
--
ALTER TABLE `states`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `studies`
--
ALTER TABLE `studies`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `studie_results`
--
ALTER TABLE `studie_results`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tests_reference_values`
--
ALTER TABLE `tests_reference_values`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `test_groups`
--
ALTER TABLE `test_groups`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `citys`
--
ALTER TABLE `citys`
  ADD CONSTRAINT `citys_ibfk_1` FOREIGN KEY (`states_id`) REFERENCES `states` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `doctor` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `empleado` FOREIGN KEY (`employee_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `paciente` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `profiles`
--
ALTER TABLE `profiles`
  ADD CONSTRAINT `fk_profiles_users1` FOREIGN KEY (`users_id`,`users_update_users_id`,`users_create_users_id`) REFERENCES `users` (`id`, `update_users_id`, `create_users_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `studies`
--
ALTER TABLE `studies`
  ADD CONSTRAINT `fk_studies_exams1` FOREIGN KEY (`exams_id`) REFERENCES `exams` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_studies_orders1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_studies_samples1` FOREIGN KEY (`samples_id`) REFERENCES `samples` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `studie_results`
--
ALTER TABLE `studie_results`
  ADD CONSTRAINT `fk_studie_results_studies1` FOREIGN KEY (`studies_id`) REFERENCES `studies` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `tests_reference_values`
--
ALTER TABLE `tests_reference_values`
  ADD CONSTRAINT `fk_tests_reference_values_exams1` FOREIGN KEY (`exams_id`) REFERENCES `exams` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `ciudades` FOREIGN KEY (`cityId`) REFERENCES `citys` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
