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

let orders = [];

// search for orders
app.get("/orders", (req, res) => {
  const keyword = req.query.keyword;

  if (keyword !== undefined) {
    const searchOrders = orders.filter((order) => {
      return order.nameProduct.toLowerCase().includes(keyword.toLowerCase());
    });
    res.send(searchOrders);
  } else {
    res.send(orders);
  }
});

// Create a orders
app.post("/orders", (req, res) => {
  orders.push({
    ...req.body,
    id: getNextId(orders),
    created_at: new Date(),
    updated_at: new Date(),
  });

  res
    .status(201) // HTTP status code 201: CREATED
    .send(req.body);
});

// Lấy thông tin 1 orders
application.get("/orders/:id", (req, res) => {
  const { id } = req.params;

  const order = orders.find((order) => order.id == id);

  if (order) {
    res.send(order);
  } else {
    res.status(404).send({
      error: "orders not found",
    });
  }
});

app.put("/orders", (req, res) => {
  const { id } = req.params;

  // Kiểm tra orders với param id có tồn tại không
  const order = orders.find((order) => order.id == id);

  // Nếu không tồn tại thì trả về lỗi
  if (!order) {
    res.status(404).send({
      error: "order not found",
    });
  }

  // Lấy request body
  const requestBody = req.body;
  let updatedOrder = null;

  orders = orders.map((order) => {
    if (order.id == id) {
      updatedOrder = {
        ...order,
        first_name: requestBody.first_name,
        last_name: requestBody.last_name,
        password: requestBody.password ? requestBody.password : orderpassword,
        role: requestBody.role,
        updated_at: new Date(),
      };
      return updatedOrder;
    } else {
      return order;
    }
  });

  res.send(updatedOrder);
});

app.delete("/orders", (req, res) => {
  const { id } = req.params;

  // Kiểm tra order với param id có tồn tại không
  const order = orders.find((order) => order.id == id);

  // Nếu không tồn tại thì trả về lỗi
  if (!order) {
    res.status(404).send({
      error: "order not found",
    });
  }

  orders = orders.filter((order) => order.id != id);
  res.status(204).send();
});

app.listen(8000, () => {
  console.log("Server started");
});
