// const express = require('express');
import express from "express"; // Phải thêm "type": "module" ở package.json
import bodyParser from "body-parser";
import morgan from "morgan";
import fs from "fs";

const app = express();

// Cấu hình body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Cấu hình morgan
const accessLogStream = fs.createWriteStream("src/logs/access.log", {
  flags: "a",
});
app.use(morgan("combined", { stream: accessLogStream }));

const getNextId = (items) => {
  // Trường hợp 1: nếu items rỗng thì next ID sẽ là 1
  if (items.length === 0) {
    return 1;
  }
  // Trường hợp 2: Nếu items không rỗng thì next ID sẽ bằng ID lớn nhất trong danh sách items + 1
  else {
    // Lấy tất cả ID trong danh sách items lưu vào mảng idList
    const idList = items.map((todo) => {
      return todo.id;
    });

    // Lấy giá trị ID lớn nhất trong mảng idList
    const maxId = Math.max(...idList);

    // Trả về next ID: ID lớn nhất trong danh sách items + 1
    return maxId + 1;
  }
};

let products = [];

// search for products
app.get("/products", (req, res) => {
  const keyword = req.query.keyword;

  if (keyword !== undefined) {
    const searchProducts = products.filter((product) => {
      return product.nameProduct.toLowerCase().includes(keyword.toLowerCase());
    });
    res.send(searchProducts);
  } else {
    res.send(products);
  }
});

// Create a product
app.post("/products", (req, res) => {
  products.push({
    ...req.body,
    id: getNextId(products),
    created_at: new Date(),
    updated_at: new Date(),
  });

  res
    .status(201) // HTTP status code 201: CREATED
    .send(req.body);
});

// Lấy thông tin 1 product
application.get("/products/:id", (req, res) => {
  const { id } = req.params;

  const product = products.find((product) => product.id == id);

  if (product) {
    res.send(product);
  } else {
    res.status(404).send({
      error: "Product not found",
    });
  }
});

app.put("/products", (req, res) => {
  const { id } = req.params;

  // Kiểm tra product với param id có tồn tại không
  const product = products.find((product) => product.id == id);

  // Nếu không tồn tại thì trả về lỗi
  if (!product) {
    res.status(404).send({
      error: "Product not found",
    });
  }

  // Lấy request body
  const requestBody = req.body;
  let updatedProduct = null;

  products = products.map((product) => {
    if (product.id == id) {
      updatedProduct = {
        ...product,
        first_name: requestBody.first_name,
        last_name: requestBody.last_name,
        password: requestBody.password
          ? requestBody.password
          : product.password,
        role: requestBody.role,
        updated_at: new Date(),
      };
      return updatedProduct;
    } else {
      return product;
    }
  });

  res.send(updatedProduct);
});

app.delete("/products", (req, res) => {
  const { id } = req.params;

  // Kiểm tra product với param id có tồn tại không
  const product = products.find((product) => product.id == id);

  // Nếu không tồn tại thì trả về lỗi
  if (!product) {
    res.status(404).send({
      error: "Product not found",
    });
  }

  products = products.filter((product) => product.id != id);
  res.status(204).send();
});

app.listen(8000, () => {
  console.log("Server started");
});
