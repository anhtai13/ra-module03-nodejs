SELECT `id` AS `user_id`, `username`, `user_phones`.`id` `user_phones_id`, `user_phones`.`phone_number`
FROM `users` RIGHT JOIN `user_phones` ON `id` = `user_phones`.`user_id`
ORDER BY `user_phones`.`phone_number` DESC;