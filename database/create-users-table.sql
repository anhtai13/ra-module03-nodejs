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