-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: latihan_nx
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `remote_components`
--

LOCK TABLES `remote_components` WRITE;
/*!40000 ALTER TABLE `remote_components` DISABLE KEYS */;
INSERT INTO `remote_components` VALUES (1,'Employee Menu','EmployeeMenu',1),(2,'User List','UserList',1);
/*!40000 ALTER TABLE `remote_components` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `remote_position`
--

LOCK TABLES `remote_position` WRITE;
/*!40000 ALTER TABLE `remote_position` DISABLE KEYS */;
INSERT INTO `remote_position` VALUES (1,'BANNER',2);
/*!40000 ALTER TABLE `remote_position` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `remotes`
--

LOCK TABLES `remotes` WRITE;
/*!40000 ALTER TABLE `remotes` DISABLE KEYS */;
INSERT INTO `remotes` VALUES (1,'employee','http://localhost:4300/assets/employee.js');
/*!40000 ALTER TABLE `remotes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-14 13:21:13
