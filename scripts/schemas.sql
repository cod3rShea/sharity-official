
  --  create the database--

CREATE  SHARITY;


--use database to create tables

--Users table--
USE sharity;

CREATE TABLE USERS (
  userId INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(50)NOT NULL,
  lastname  VARCHAR(50) NOT NULL,
  title VARCHAR(50)NOT NULL,
  email VARCHAR(50)NOT NULL,
  phone INT(20)NOT NULL,
  PRIMARY KEY (userId)
);

vendor table
USE sharity;

CREATE TABLE vendor (
  userId INT NOT NULL,
  businessName VARCHAR(100)NOT NULL,
  URL  VARCHAR(100),
  EIN  VARCHAR(20) NOT NULL,
  email VARCHAR(50)NOT NULL,
  phone VARCHAR(20) NOT NULL,
  businessType VARCHAR(50)NOT NULL,
storageReqs VARCHAR(50) NOT NULL
);


--address table--
USE sharity;

CREATE TABLE LocationAddress (
	userId INT NOT NULL,
	streetAddress VARCHAR(100) NOT NULL,
	City VARCHAR(50) NOT NULL,
	State VARCHAR(2) NOT NULL,
	ZIP  INT(10) NOT NULL,
    COUNTRY VARCHAR(50) NOT NULL
  
);

--BUyers table--
   
   USE sharity;
  
CREATE TABLE nonProfit (
  userId INT NOT NULL,
  nonProfitName VARCHAR(100) NOT NUll,
  URL  VARCHAR(100),
  taxNumber501C3 VARCHAR(20) not null,
  missionStatement  VARCHAR(200) NOT NULL,
  businessType VARCHAR(50)NOT NULL,
  storageReqs VARCHAR(50) NOT NULL
);


--table for inventory--
USE sharity;
   
CREATE TABLE Inventory (
  userId INT NOT NULL,
 foodItemDescription VARCHAR(100) NOT NUll,
  numberOfMeals  INTEGER (10),
  poundsOfProduce  INTEGER (10),
  poundsOfMeat  INTEGER (10),
  poundsOfCheeseandOtherDairy  INTEGER (10),
  poundsOfDryGoods  INTEGER (10),
  numberOfDozenEggs INTEGER (10),
  quartsOfLiquid  INTEGER (10),
  dollarValue INTEGER (10) NOT NULL,
  pickUpDate  VARCHAR(20) NOT NULL
 
);

--table for food request--
USE sharity;
   
CREATE TABLE FoodRequest (
  userId INT NOT NULL,
 foodItemDescription VARCHAR(100) NOT NUll,
  numberOfMeals  INTEGER (10),
  poundsOfProduce  INTEGER (10),
  poundsOfMeat  INTEGER (10),
  poundsOfCheeseandOtherDairy  INTEGER (10),
  poundsOfDryGoods  INTEGER (10),
  numberOfDozenEggs INTEGER (10),
  quartsOfLiquid  INTEGER (10),
  dollarValue INTEGER (10) NOT NULL,
  pickUpDate  VARCHAR(20) NOT NULL
 
);


