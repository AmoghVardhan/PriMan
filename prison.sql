-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 27, 2017 at 03:53 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `prison`
--

-- --------------------------------------------------------

--
-- Table structure for table `cases`
--

CREATE TABLE `cases` (
  `Cid` int(10) NOT NULL,
  `Details` varchar(50) NOT NULL,
  `Status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cases`
--

INSERT INTO `cases` (`Cid`, `Details`, `Status`) VALUES
(1, 'Abc', 'def'),
(2, 'ghi', 'jkl'),
(3, 'mno', 'pqr'),
(4, 'stu', 'vwx'),
(5, 'yza', 'bcd');

-- --------------------------------------------------------

--
-- Table structure for table `cell`
--

CREATE TABLE `cell` (
  `Cell_id` int(10) NOT NULL,
  `FloorNo` int(10) NOT NULL,
  `Capacity` int(10) NOT NULL,
  `G_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cell`
--

INSERT INTO `cell` (`Cell_id`, `FloorNo`, `Capacity`, `G_id`) VALUES
(1, 1, 3, 1),
(2, 1, 3, 5),
(3, 2, 2, 4),
(4, 2, 2, 3),
(5, 2, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `credentials`
--

CREATE TABLE `credentials` (
  `sl.no` int(3) NOT NULL,
  `id` int(10) NOT NULL,
  `usr` varchar(20) NOT NULL,
  `pass` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `credentials`
--

INSERT INTO `credentials` (`sl.no`, `id`, `usr`, `pass`) VALUES
(1, 1, 'd01', 'dp01'),
(2, 2, 'l01', 'lp01'),
(3, 3, 'doc01', 'docp01'),
(4, 4, 's01', 'sp01');

-- --------------------------------------------------------

--
-- Table structure for table `crime`
--

CREATE TABLE `crime` (
  `Cname` varchar(20) NOT NULL,
  `Duration` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `crime`
--

INSERT INTO `crime` (`Cname`, `Duration`) VALUES
('C5', 5),
('money laundering', 4),
('Murder', 1),
('Rape', 3),
('Theft', 2);

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `Did` int(10) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `No_of_people` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`Did`, `Name`, `No_of_people`) VALUES
(1, 'Administrative', 20),
(2, 'Kitchen', 15),
(3, 'Workshop', 40),
(4, 'Laundry', 20),
(5, 'Cleaning', 30);

-- --------------------------------------------------------

--
-- Table structure for table `dependants`
--

CREATE TABLE `dependants` (
  `Name` varchar(20) NOT NULL,
  `P_id` int(10) NOT NULL,
  `Relation` varchar(20) NOT NULL,
  `PhNo` int(10) NOT NULL,
  `Status` varchar(20) DEFAULT NULL,
  `Super_id` int(10) DEFAULT NULL,
  `Reason` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dependants`
--

INSERT INTO `dependants` (`Name`, `P_id`, `Relation`, `PhNo`, `Status`, `Super_id`, `Reason`) VALUES
('Ashu', 1, 'brother', 2131289701, 'Approved', 1, 'sdf'),
('kas', 2, 'adsf', 1234543492, 'Pending', 2, 'adfd'),
('kashish', 6, 'friend', 1234567891, 'Approved', 2, 'df'),
('khamar', 3, 'spouse', 1001293021, 'Approved', 2, 'Personal'),
('Luke', 8, 'Brother', 2147483647, 'Approved', 2, 'Personal'),
('Mitch', 9, 'Father', 2147483647, 'Approved', 1, 'Personal'),
('qpwoq', 2, 'df', 2147483647, 'Rejected', 1, ''),
('Sam', 2, 'Brother', 56789567, 'Approved', 2, 'Personal'),
('Tom', 4, 'Son', 34256787, 'Accepted', 1, 'sadf');

-- --------------------------------------------------------

--
-- Table structure for table `guard`
--

CREATE TABLE `guard` (
  `Gid` int(10) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Address` varchar(20) NOT NULL,
  `PhNo` int(10) NOT NULL,
  `Salary` int(10) NOT NULL,
  `D_id` int(10) DEFAULT NULL,
  `Shift` varchar(20) NOT NULL,
  `Super_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `guard`
--

INSERT INTO `guard` (`Gid`, `Name`, `Address`, `PhNo`, `Salary`, `D_id`, `Shift`, `Super_id`) VALUES
(1, 'Cal', 'abc', 123123123, 10000, 1, 'Morning', 1),
(2, 'Devin', 'def', 234234234, 10000, 5, 'Night', 2),
(3, 'Earl', 'ghi', 345345345, 10000, 2, 'Morning', 1),
(4, 'Gil', 'jkl', 456456456, 10000, 4, 'Morning', 2),
(5, 'Hector', 'mno', 567567567, 10000, 2, 'Morning', 2);

-- --------------------------------------------------------

--
-- Table structure for table `lawyer`
--

CREATE TABLE `lawyer` (
  `Lid` int(10) NOT NULL,
  `PhNo` int(10) NOT NULL,
  `Address` varchar(20) NOT NULL,
  `Super_id` int(10) DEFAULT NULL,
  `Status` varchar(20) DEFAULT NULL,
  `Reason` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lawyer`
--

INSERT INTO `lawyer` (`Lid`, `PhNo`, `Address`, `Super_id`, `Status`, `Reason`) VALUES
(1, 321321321, 'abcdef', 1, 'Approved', 'Case Discussion'),
(2, 432432432, 'ghijkl', 1, 'Pending', 'zasdf'),
(3, 543543543, 'mnopqr', 2, 'Pending', 'Case'),
(4, 654654654, 'stuvwx', 2, 'Approved', 'asfd'),
(5, 765765765, 'yzabcd', 1, 'Rejected', 'bn');

-- --------------------------------------------------------

--
-- Table structure for table `prisoner`
--

CREATE TABLE `prisoner` (
  `Pid` int(10) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Crime` varchar(20) NOT NULL,
  `Address` varchar(20) NOT NULL,
  `DOJ` date NOT NULL,
  `D_id` int(10) DEFAULT NULL,
  `Shift` varchar(20) NOT NULL,
  `C_id` int(10) DEFAULT NULL,
  `Cell_id` int(10) DEFAULT NULL,
  `L_id` int(10) DEFAULT NULL,
  `Remarks` varchar(20) NOT NULL,
  `Medical_records` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prisoner`
--

INSERT INTO `prisoner` (`Pid`, `Name`, `Crime`, `Address`, `DOJ`, `D_id`, `Shift`, `C_id`, `Cell_id`, `L_id`, `Remarks`, `Medical_records`) VALUES
(1, 'Luke', 'Murder', 'lmnlmn', '2017-10-03', 1, 'Morning', 3, 2, 4, 'None', 'Arm Injury'),
(2, 'Mitch', 'money laundering', 'mklmkl', '2017-10-01', 3, 'Afternoon', 1, 2, 5, 'None', 'None'),
(3, 'Nick', 'Murder', 'qweqwe', '2017-09-12', 2, 'Morning', 1, 5, 1, 'None', 'None'),
(4, 'Peter', 'Rape', 'erfcasdf', '2017-08-07', 5, 'Afternoon', 4, 4, 3, 'good conduct', 'None'),
(5, 'Rick', 'Theft', 'lolllolloolol', '2017-04-11', 1, 'Night', 3, 3, 5, 'None', 'Drug abuse'),
(6, 'ashutosh', 'Murder', 'rvce hostel', '2017-10-29', 2, 'Morning', 4, 4, 2, 'very dangerous', 'cold'),
(7, 'Arvind Kumar', 'Theft', 'cse dept', '2017-10-29', 5, 'Night', 3, 5, 4, 'should be kept in hi', 'none'),
(8, 'Jack', 'money laundering', '3rd Street', '0000-00-00', 3, 'Morning', 3, 1, 2, 'None', 'None'),
(9, 'Chris', 'Theft', 'Main Street', '2016-08-01', 5, 'Afternoon', 2, 1, 4, 'Highly Dangerous', 'Multiple Leg Injurie');

-- --------------------------------------------------------

--
-- Table structure for table `supervisor`
--

CREATE TABLE `supervisor` (
  `Superid` int(10) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Wing` varchar(10) NOT NULL,
  `Salary` int(10) NOT NULL,
  `Years_Worked` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `supervisor`
--

INSERT INTO `supervisor` (`Superid`, `Name`, `Wing`, `Salary`, `Years_Worked`) VALUES
(1, 'Alex', 'A', 20000, 3),
(2, 'Bob', 'B', 25000, 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cases`
--
ALTER TABLE `cases`
  ADD PRIMARY KEY (`Cid`);

--
-- Indexes for table `cell`
--
ALTER TABLE `cell`
  ADD PRIMARY KEY (`Cell_id`),
  ADD KEY `f` (`G_id`);

--
-- Indexes for table `credentials`
--
ALTER TABLE `credentials`
  ADD PRIMARY KEY (`sl.no`);

--
-- Indexes for table `crime`
--
ALTER TABLE `crime`
  ADD PRIMARY KEY (`Cname`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`Did`);

--
-- Indexes for table `dependants`
--
ALTER TABLE `dependants`
  ADD PRIMARY KEY (`Name`,`P_id`),
  ADD KEY `Fk8` (`Super_id`),
  ADD KEY `Fk9` (`P_id`);

--
-- Indexes for table `guard`
--
ALTER TABLE `guard`
  ADD PRIMARY KEY (`Gid`),
  ADD KEY `Fk1` (`D_id`),
  ADD KEY `Fk2` (`Super_id`);

--
-- Indexes for table `lawyer`
--
ALTER TABLE `lawyer`
  ADD PRIMARY KEY (`Lid`),
  ADD KEY `Fk` (`Super_id`);

--
-- Indexes for table `prisoner`
--
ALTER TABLE `prisoner`
  ADD PRIMARY KEY (`Pid`),
  ADD KEY `Fk3` (`C_id`),
  ADD KEY `Fk4` (`Cell_id`),
  ADD KEY `Fk5` (`D_id`),
  ADD KEY `Fk6` (`L_id`),
  ADD KEY `Fk7` (`Crime`);

--
-- Indexes for table `supervisor`
--
ALTER TABLE `supervisor`
  ADD PRIMARY KEY (`Superid`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cell`
--
ALTER TABLE `cell`
  ADD CONSTRAINT `f` FOREIGN KEY (`G_id`) REFERENCES `guard` (`Gid`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `dependants`
--
ALTER TABLE `dependants`
  ADD CONSTRAINT `Fk8` FOREIGN KEY (`Super_id`) REFERENCES `supervisor` (`Superid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Fk9` FOREIGN KEY (`P_id`) REFERENCES `prisoner` (`Pid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `guard`
--
ALTER TABLE `guard`
  ADD CONSTRAINT `Fk1` FOREIGN KEY (`D_id`) REFERENCES `department` (`Did`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Fk2` FOREIGN KEY (`Super_id`) REFERENCES `supervisor` (`Superid`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `lawyer`
--
ALTER TABLE `lawyer`
  ADD CONSTRAINT `Fk` FOREIGN KEY (`Super_id`) REFERENCES `supervisor` (`Superid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `prisoner`
--
ALTER TABLE `prisoner`
  ADD CONSTRAINT `Fk3` FOREIGN KEY (`C_id`) REFERENCES `cases` (`Cid`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Fk4` FOREIGN KEY (`Cell_id`) REFERENCES `cell` (`Cell_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Fk5` FOREIGN KEY (`D_id`) REFERENCES `department` (`Did`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Fk6` FOREIGN KEY (`L_id`) REFERENCES `lawyer` (`Lid`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Fk7` FOREIGN KEY (`Crime`) REFERENCES `crime` (`Cname`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
