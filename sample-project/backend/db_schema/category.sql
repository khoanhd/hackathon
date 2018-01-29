CREATE TABLE `yii2-realtime`.category (
	id INT NULL AUTO_INCREMENT,
	name varchar(100) NULL,
	`channel-code` varchar(100) NULL,
	CONSTRAINT NewTable_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=latin1
COLLATE=latin1_swedish_ci ;


INSERT INTO `yii2-realtime`.category (id,name,`channel-code`) VALUES
(1,'IT Software','it-software')
,(2,'Accounting','accounting')
,(3,'Banking','banking');


ALTER TABLE `yii2-realtime`.notification ADD category_id INT NULL ;