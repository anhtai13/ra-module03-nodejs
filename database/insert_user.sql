INSERT INTO `users`
(`username`,`email`,`password`, `first_name`, `last_name`, `role`, `avatar`, `created_at`, `created_by`, `updated_at`, `updated_by`)
VALUES ('tintt', 'tintt@gmail.com', 'pw123', 'Tin', 'Tran Trong', 1, 'avatar', NOW(), 1, NOW(),2);

INSERT INTO `users`
(`username`,`email`,`password`, `first_name`, `last_name`, `role`, `avatar`, `created_at`, `created_by`, `updated_at`, `updated_by`)
VALUES ('tainpa', 'tainpa@gmail.com', 'pw123', 'Tai', 'Nguyen Pham Anh', 1, 'avatar', NOW(), 1, NOW(),2),
('giangnt', 'giangnt@gmail.com', 'pw123', 'Giang', 'Nguyen Truong', 1, 'avatar', NOW(), 1, NOW(),2),
('vietplus', 'vietplus@gmail.com', 'pw123', 'Viet', 'Viet Plus', 1, 'avatar', NOW(), 1, NOW(),2),
('sonnui', 'sonnui@gmail.com', 'pw123', 'Son', 'Son Nui', 1, 'avatar', NOW(), 1, NOW(),2),
('sangnq', 'sangnq@gmail.com', 'pw123', 'Sang', 'Nguyen Quang', 1, 'avatar', NOW(), 1, NOW(),2),
('trungnt', 'trungnt@gmail.com', 'pw123', 'Trung', 'Nguyen Thanh', 1, 'avatar', NOW(), 1, NOW(),2),
('thailq', 'thailq@gmail.com', 'pw123', 'Thai', 'Thai lien quan', 1, 'avatar', NOW(), 1, NOW(),2)
;

INSERT INTO `products`
(`sku`, `name`, `category`, `description`, `unit_price`, `image`, `created_at`, `create_by_id`, `updated_at`, `updated_by_id`)
VALUES ('VS001', 'áo sơ mi cổ cao', '1', 'Mô tả sản phẩm 1', 100000, 'image_url_1', NOW(), 1, NOW(), 2),
('VS002', 'áo sơ mi cổ cao', '1', 'Mô tả sản phẩm 2', 100000, 'image_url_2', NOW(), 1, NOW(), 2),
('VS003', 'áo sơ mi cổ cao ngắn tay', '1', 'Mô tả sản phẩm 3', 100000, 'image_url_3', NOW(), 1, NOW(), 2),
('VS004', 'áo sơ mi cổ ngắn', '1', 'Mô tả sản phẩm 4', 100000, 'image_url_4', NOW(), 1, NOW(), 2),
('VS005', 'áo phong mùa hè', '2', 'Mô tả sản phẩm 5', 100000, 'image_url_5', NOW(), 1, NOW(), 2),
('VS006', 'quần jean ngắn một bên', '3', 'Mô tả sản phẩm 6', 100000, 'image_url_6', NOW(), 1, NOW(), 2),
('VS007', 'quần jean ống dài', '3', 'Mô tả sản phẩm 7', 100000, 'image_url_7', NOW(), 1, NOW(), 2),
('VS008', 'quần đùi jean', '3', 'Mô tả sản phẩm 8', 100000, 'image_url_8', NOW(), 1, NOW(), 2),
('VS009', 'áo khoác sơ mi tay dài', '1', 'Mô tả sản phẩm 9', 100000, 'image_url_9', NOW(), 1, NOW(), 2),
('VS010', 'áo sơ mi đi biển', '1', 'Mô tả sản phẩm 10', 100000, 'image_url_10', NOW(), 1, NOW(), 2);

INSERT INTO `order_details`
(`order_id`, `product_id`, `sku`, `name`, `unit_price`, `quantity`, `sub_total_price`)
VALUES 
('001', '001', 'VS001', 'áo sơ mi cổ cao', 100000, 1, 100000),
('002', '001', 'VS002', 'áo sơ mi cổ cao', 100000, 1, 100000),
('003', '001', 'VS003', 'áo sơ mi cổ cao ngắn tay', 100000, 1, 100000),
('004', '001', 'VS004', 'áo sơ mi cổ ngắn', 100000, 1, 100000),
('005', '001', 'VS005', 'áo phong mùa hè', 100000, 1, 100000),
('006', '001', 'VS006', 'quần jean ngắn một bên', 100000, 1, 100000),
('007', '001', 'VS007', 'quần jean ống dài', 100000, 1, 100000),
('008', '001', 'VS008', 'quần đùi jean', 100000, 1, 100000),
('009', '001', 'VS009', 'áo khoác sơ mi tay dài', 100000, 1, 100000),
('0010', '001', 'VS010', 'áo sơ mi đi biển', 100000, 1, 100000);
