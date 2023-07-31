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
	`id` INT auto_increment primary key,
    `name_product` VARCHAR(20) NOT NULL,
    `description` VARCHAR(20) NOT NULL,
    `quantity` VARCHAR(255) NOT NULL,
    `unit_price` VARCHAR(50),
    `avatar` VARCHAR(255)
);

CREATE TABLE `orders`(
	`id` INT auto_increment primary key,
    `name_product` VARCHAR(20) NOT NULL,
    `description` VARCHAR(20) NOT NULL,
    `quantity` VARCHAR(255) NOT NULL,
    `status` VARCHAR(255) NOT NULL
    `unit_price` NUMBER(50),
    `total` NUMBER(50),
    `avatar` VARCHAR(255),
    `created_at` DATETIME,
    `created_by` INT,
    `updated_at` DATETIME,
    `updated_by` INT
);

