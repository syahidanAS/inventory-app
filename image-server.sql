-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 21, 2021 at 07:08 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `image-server`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category_name` varchar(30) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category_name`, `created_at`, `updated_at`) VALUES
(1, 'Plain', '2021-12-21 03:26:31', '2021-12-21 03:26:31'),
(2, 'Premium (updated)', '2021-12-21 03:26:31', '2021-12-21 05:56:08'),
(3, 'Fancy', '2021-12-21 03:26:58', '2021-12-21 03:26:58'),
(4, 'Pique', '2021-12-21 03:26:58', '2021-12-21 03:26:58'),
(5, 'Terry', '2021-12-21 03:27:34', '2021-12-21 03:27:34'),
(6, 'Polyester', '2021-12-21 03:27:34', '2021-12-21 03:27:34');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `net_price` bigint(20) NOT NULL,
  `cloth_name` varchar(20) NOT NULL,
  `category_id` int(11) NOT NULL,
  `color_kind` varchar(35) DEFAULT NULL,
  `color_type` varchar(35) DEFAULT NULL,
  `composition` varchar(35) DEFAULT NULL,
  `width` varchar(35) DEFAULT NULL,
  `gramation` varchar(35) DEFAULT NULL,
  `shape` varchar(35) DEFAULT NULL,
  `cloth_type` varchar(35) DEFAULT NULL,
  `processing` varchar(35) DEFAULT NULL,
  `characteristic` varchar(35) DEFAULT NULL,
  `spandex` varchar(35) DEFAULT NULL,
  `performance` varchar(35) DEFAULT NULL,
  `cloth_function` varchar(35) DEFAULT NULL,
  `image_url` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `net_price`, `cloth_name`, `category_id`, `color_kind`, `color_type`, `composition`, `width`, `gramation`, `shape`, `cloth_type`, `processing`, `characteristic`, `spandex`, `performance`, `cloth_function`, `image_url`, `created_at`, `updated_at`) VALUES
(5, 'COTTON COMBED 16S', 100000, 'Combed 16s', 1, 'Maroon', 'Tua', '-', '90\"', '235-245', 'Open Finish', 'Body', '-', '-', '-', '-', '-', '1640064921862.jpg', '2021-12-21 12:35:21', '2021-12-21 12:40:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
