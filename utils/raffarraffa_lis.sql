-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql-raffarraffa.alwaysdata.net
-- Generation Time: Oct 31, 2023 at 02:58 AM
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
  `update_at` datetime DEFAULT NULL,
  `create_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar ciudades';

--
-- Dumping data for table `citys`
--

INSERT INTO `citys` (`id`, `name`, `states_id`, `update_at`, `create_at`) VALUES
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
-- Table structure for table `exams`
--

DROP TABLE IF EXISTS `exams`;
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

DROP TABLE IF EXISTS `exam_determinations`;
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

DROP TABLE IF EXISTS `exam_reference_values`;
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

DROP TABLE IF EXISTS `new_audit_orders`;
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

DROP TABLE IF EXISTS `orders`;
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
(4, 1, 'anemia', NULL, 1, 2, 2, '2023-10-28 17:19:45', NULL, NULL, NULL, 0),
(5, NULL, NULL, NULL, 1, 2, 1, '2023-10-30 23:38:24', '2023-10-30 23:38:24', NULL, NULL, NULL),
(6, NULL, NULL, NULL, 1, 2, 1, '2023-10-30 23:43:58', '2023-10-30 23:43:58', NULL, NULL, NULL),
(7, 2, 'Higado graso', 'No digiere bien el fernet', 1, 2, 1, '2023-10-30 23:47:54', '2023-10-30 23:47:54', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

DROP TABLE IF EXISTS `profiles`;
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

--
-- Dumping data for table `profiles`
--

INSERT INTO `profiles` (`id`, `users_id`, `access_auth`, `name`, `license`, `update_at`, `create_at`, `delete_at`) VALUES
(1, 1, 8, 'Administrador', NULL, NULL, '2023-10-29 22:50:11', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `samples`
--

DROP TABLE IF EXISTS `samples`;
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

DROP TABLE IF EXISTS `samples_type`;
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
(1, 1, 'Sangre', '2023-10-28 17:23:31', NULL, 'Muestra extraida In situ'),
(2, 1, 'Orina', '2023-10-31 01:43:04', '2023-10-31 01:43:45', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `states`
--

DROP TABLE IF EXISTS `states`;
CREATE TABLE `states` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(80) NOT NULL,
  `update_at` datetime DEFAULT NULL,
  `create_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para registrar ciudades';

--
-- Dumping data for table `states`
--

INSERT INTO `states` (`id`, `name`, `update_at`, `create_at`) VALUES
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

DROP TABLE IF EXISTS `studie_results`;
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

DROP TABLE IF EXISTS `users`;
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
(1, 'Jose', 'GOMEZ', 'F', 'M', 0, '55565tytt', '2664785699', 'jose@example.com', 'junin 34', '2002-10-01', NULL, 1, NULL, 5, '2023-10-28 17:13:23', '2023-10-30 23:34:59', NULL),
(2, 'Juan', 'Gomez', 'M', 'M', 1, '24555565', '26647856123', 'juan@example.com', 'pederna 34', '1993-10-01', NULL, 1, NULL, 5, '2023-10-28 17:13:23', NULL, NULL);

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
  ADD PRIMARY KEY (`id`);

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
  ADD KEY `fk_users_users1_idx` (`update_users_id`),
  ADD KEY `fk_users_citys1_idx` (`city_id`);

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
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `profiles`
--
ALTER TABLE `profiles`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `samples`
--
ALTER TABLE `samples`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `samples_type`
--
ALTER TABLE `samples_type`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `states`
--
ALTER TABLE `states`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

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
  ADD CONSTRAINT `fk_users_citys1_idx` FOREIGN KEY (`city_id`) REFERENCES `citys` (`id`) ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
