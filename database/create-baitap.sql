-- Bài 1: Lấy tất cả bản ghi "users" có role là 1
SELECT  `role` as `role_users`, count(1) as `count_users` FROM rikkei_academy.users GROUP BY `role`;
SELECT * FROM rikkei_academy.users WHERE `role` = 1;

-- Bài 2: Lấy 5 products có giá trị cao nhất, kèm hiển thị ngày tạo theo định dạng ngày
SELECT * FROM rikkei_academy.products WHERE `unit_price` > 100000;
SELECT product_id, name, DATE_FORMAT(created_at, '%d-%m-%y') AS created_date, unit_price FROM rikkei_academy.products ORDER BY `unit_price` DESC LIMIT 5;

-- Bài 3: Lấy số lượng sản phẩm theo mỗi danh mục products
SELECT  `category`, count(1) as `count_category` FROM rikkei_academy.products GROUP BY `category`;

-- Bài 4: Lấy các danh mục có ít nhất 2 sản phẩm
SELECT  `category`, count(1) as `count_category` FROM rikkei_academy.products GROUP BY `category` HAVING `count_category` >= 2;

-- Bài 5: Lấy tất cả sản phẩm có tên chứa chữ "prd" và giá trị trên 20
SELECT product_id, `name`, `unit_price` FROM rikkei_academy.products WHERE `name` LIKE '%ao%' AND `unit_price` > 110000;
SELECT p.product_id, p.name , p.unit_price FROM products p INNER JOIN (SELECT product_id FROM products WHERE name LIKE '%ao%' AND unit_price >100000) filtered_products 
ON p.product_id = filtered_products.product_id;
 
 -- Bài 6: Lấy tất cả products kèm tên người tạo và tên tạo và tên người chỉnh sửa
SELECT products.`create_by_id`, products.`updated_by_id`, products.`name`, users.`username` FROM products LEFT JOIN users ON users.`id` = products.`product_id`
ORDER BY products.`unit_price` ASC;

-- Bài 7: Lấy tổng giá trị của các sản phẩm theo từng danh mục
SELECT category, SUM(unit_price) as total_value FROM products GROUP BY category;


-- Bài 8: Lấy thông tin users kèm tổng tiền đã đặt (trong đơn hàng)
SELECT users.`id` AS `user_id`, users.`email`, users.`username`, users.`first_name`, users.`last_name`, SUM(orders.total_price) AS `SUM` FROM orders LEFT JOIN users 
ON users.`id` = orders.`user_id` GROUP BY users.`id`, users.`username`;