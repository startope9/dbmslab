-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: hotel_mgmt
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accholder`
--

DROP TABLE IF EXISTS `accholder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accholder` (
  `accId` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `mobileNo` varchar(100) DEFAULT NULL,
  `mail` varchar(100) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `aadharNo` varchar(16) DEFAULT NULL,
  `streetNo` int DEFAULT NULL,
  `city` varchar(70) DEFAULT NULL,
  `state` varchar(70) DEFAULT NULL,
  `country` varchar(70) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`accId`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accholder`
--

LOCK TABLES `accholder` WRITE;
/*!40000 ALTER TABLE `accholder` DISABLE KEYS */;
INSERT INTO `accholder` VALUES (12,'John Doe','1234567890','john.doe@example.com','Male','1990-01-01','5692602382',10,'New Delhi','Delhi','India','password123'),(13,'Jane Smith','9876543210','jane.smith@example.com','Female','1995-07-14','0086803482',22,'Mumbai','Maharashtra','India','secretpass'),(14,'David Lee','8613579246','david.lee@example.com','Male','1988-03-21','3356210573',31,'Bangalore','Karnataka','India','qwerty123'),(15,'Maria Garcia','5511987654','maria.garcia@example.com','Female','2002-12-25','6520642727',4,'Chennai','Tamil Nadu','India','sunshine'),(16,'Michael Brown','3210987654','michael.brown@example.com','Male','1975-04-10','543210987654',52,'Kolkata','West Bengal','India','passw0rd!'),(17,'Emily Jones','1491234567','emily.jones@example.com','Female','2000-09-09','2534582225',18,'Hyderabad','Telangana','India','ilovecats'),(18,'Alex Williams','3322114455','alex.williams@example.com','Male','1992-02-29','789654321012',7,'Ahmedabad','Gujarat','India','12345678'),(19,'Sophia Hernandez','2109876543','sophia.hernandez@example.com','Female','1985-11-17','321098765432',23,'Pune','Maharashtra','India','welcome123'),(20,'William Miller','6543219870','william.miller@example.com','Male','1968-08-06','3110983253',45,'Jaipur','Rajasthan','India','dragonfire'),(21,'Isabella Moore','1223344556','isabella.moore@example.com','Female','2004-06-15','7951169896',19,'Lucknow','Uttar Pradesh','India','summerdays'),(22,'test',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1234'),(23,'Lokaprasaad',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Exam');
/*!40000 ALTER TABLE `accholder` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-06 11:59:07
