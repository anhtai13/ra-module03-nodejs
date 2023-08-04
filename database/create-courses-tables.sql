CREATE TABLE `courses` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100)
);

CREATE TABLE `user_course_mapping` (
	`user_id` INT NOT NULL,
    `course_id` INT NOT NULl
);