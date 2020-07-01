/*
SQLyog Community
MySQL - 10.4.11-MariaDB : Database - angularcode_task
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*Table structure for table `tasks` */

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `task` varchar(200) NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` int(11) NOT NULL,
  `dob` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

/*Data for the table `tasks` */

insert  into `tasks`(`id`,`task`,`status`,`created_at`,`dob`) values 
(1,'My first task',0,1390815970,''),
(2,'Perform unit testing',0,1390815993,''),
(3,'Find bugs',0,1390817659,''),
(4,'Test in small devices',0,1390818389,''),
(5,'New One',0,1593596847,'12-12-2019'),
(7,'New One 1',0,1593597651,''),
(8,'New One 2',0,1593597708,''),
(9,'New One 3',0,1593597732,''),
(10,'New One 4',0,1593597799,'11-11-2000'),
(11,'Lakshman',0,1593598612,'23-09-2000');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
