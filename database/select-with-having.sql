SET SESSION sql_mode = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

SELECT
    id, username, created_by, `role`, count(1) as `count_users`
FROM rikkei_academy.users
GROUP BY `role`
HAVING COUNT(1) > 10