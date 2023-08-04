CREATE TABLE `users`(
	`id` INT auto_increment primary key,
    `email` VARCHAR(20) NOT NULL,
    `username` VARCHAR(20) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `first_name` VARCHAR(50),
    `last_name` VARCHAR(50),
    `role` TINYINT(1),
    `avatar` VARCHAR(255),
    `created_at` DATETIME,
    `created_by` INT,
    `updated_at` DATETIME,
    `updated_by` INT
);

CREATE TABLE `products`(
`product_id` INT AUTO_INCREMENT PRIMARY KEY,
`sku` VARCHAR(10) NOT NULL,
`name` VARCHAR(100) ,
`category` TINYINT(2),
`description` TEXT,
`unit_price` DECIMAL(10,2),
`image` VARCHAR(255),
`created_at` DATETIME,
`create_by_id` INT,
`updated_at` DATETIME,
`updated_by_id` INT
);


CREATE TABLE `orders`(
	`order_id` INT AUTO_INCREMENT PRIMARY KEY,
    `serial_number` VARCHAR(10) NOT NULL,
    `user_id` INT,
    `order_at` DATETIME,
    `total_price` DECIMAL(10,2),
    `status` TINYINT(1),
    `created_at` DATETIME,
    `created_by` INT,
    `updated_at` DATETIME,
    `updated_by` INT
);

CREATE TABLE `contacts`(
	`id` INT AUTO_INCREMENT PRIMARY KEY,
    `full_name` VARCHAR(100),
    `email` VARCHAR(100),
    `content` TEXT,
    `status` TINYINT(1),
    `created_at` DATETIME,
    `created_by` INT,
    `updated_at` DATETIME,
    `updated_by` INT
);
