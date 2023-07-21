// const express = require("express");

import express, { request, response } from "express"; //Phải thêm "type": "module" ở package.json,

const application = express();

// // Khi lấy dữ liệu
// application.get();

// // Khi thêm mới dữ liệu, hoặc truyền lên dữ liệu nhạy cảm (ví dụ: mật khẩu, thông tin mật,...)
// application.post();

// // Thường dùng sử dụng cập nhật dữ liệu
// application.put();

// //Dùng khi xóa dữ liệu
// application.delete();

// Ví dụ: trả về HTML
application.get("/", (request, response) => {
  //     // dùng thuần
  //   response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  //   response.write("<h1>Đây là trang chủ<h1>");
  //   response.end();

  //   Trả về với hàm send()
  response.send("<h1>Đây là trang chủ<h1>");
});

// Ví dụ: trả về JSON
application.get("/users", (request, response) => {
  const users = [
    { id: 1, name: "Thai" },
    { id: 2, name: "Sang" },
  ];
  response.send(users);
});

// Ví dụ đường dẫn tương đối
application.get("about/*", function (req, res) {
  res.send("Trang đường dẫn tương đối");
});

// Ví dụ: về param
application.get("users/:id", (req, res) => {
  const users = [
    { id: 1, name: "Thai" },
    { id: 2, name: "Sang" },
  ];

  const id = req.params.id;

  const user = users.find((u) => u.id === id);

  if (user) {
    res.send(user);
  } else {
    res.send({ error: "Nguời dùng không tồn tại" });
  }
});

// Ví dụ: lấy query string
application.get("/products", (req, res) => {
  const products = [
    { id: 1, name: "product" },
    { id: 2, name: "tablet" },
  ];

  //   const keyword = req.query.keyword;
  //   const id = req.query.id;

  //   Viết ngắn gọn
  const { keyword, id } = req.query;

  const searchResult = products.filter((product) => {
    return (
      (keyword && product.name.toLowerCase.includes(keyword.toLowerCase())) ||
      product.id == id
    );
  });

  res.send(searchResult);
});

// Ví dụ: Tạo form POST
application.get("/products/add", (req, res) => {
  res.send(
    `<form action="http://localhost:8000/products" method="POST">
        <input name="name" placeholder="name"/>
        <input name="description" placeholder="description"/>
        <input name="price" placeholder="price"/>
        <button type="submit">ADD</button>
    </form>`
  );
});

// Với method GET: khi submit thì sẽ nhận dữ liệu payload sẽ lấy thông qua res.query
// Với method POST: khi submit thì sẽ nhận dữ liệu payload sẽ lấy thông qua res.body
// Ví dụ: POST method
application.post("/products", (req, res) => {
  req.body;
  res.send({ body: req.body });
});

application.listen(8000, () => {
  console.log("server started");
});
