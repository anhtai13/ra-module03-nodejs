CREATE TABLE `user_phones` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
	`user_id` INT NOT NULL,
    `phone_number` VARCHAR(20) NOT NULL
);

INSERT INTO `user_phones` (`user_id`, `phone_number`)
VALUES (3, '1234567890'),
(3, '2234567890'),
(3, '3234567890'),
(4, '4234567890'),
(4, '5234567890'),
(5, '6234567890')