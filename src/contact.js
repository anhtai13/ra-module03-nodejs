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

let contacts = [];

// search for contacts
app.get("/contacts", (req, res) => {
  const keyword = req.query.keyword;

  if (keyword !== undefined) {
    const searchContacts = contacts.filter((contact) => {
      return contact.email.toLowerCase().includes(keyword.toLowerCase());
    });
    res.send(searchContacts);
  } else {
    res.send(searchContacts);
  }
});

// Create a contacts
app.post("/contacts", (req, res) => {
  contacts.push({
    ...req.body,
    id: getNextId(contacts),
    created_at: new Date(),
    updated_at: new Date(),
  });

  res
    .status(201) // HTTP status code 201: CREATED
    .send(req.body);
});

// Lấy thông tin 1 orders
application.get("/contacts/:id", (req, res) => {
  const { id } = req.params;

  const contact = contacts.find((contact) => contact.id == id);

  if (contact) {
    res.send(contact);
  } else {
    res.status(404).send({
      error: "contacts not found",
    });
  }
});

app.put("/contacts", (req, res) => {
  const { id } = req.params;

  // Kiểm tra contacts với param id có tồn tại không
  const contact = contacts.find((contact) => contact.id == id);

  // Nếu không tồn tại thì trả về lỗi
  if (!contact) {
    res.status(404).send({
      error: "contact not found",
    });
  }

  // Lấy request body
  const requestBody = req.body;
  let updatedContact = null;

  contacts = orders.map((contact) => {
    if (contact.id == id) {
      updatedContact = {
        ...contact,
        first_name: requestBody.first_name,
        last_name: requestBody.last_name,
        email: requestBody.email,
        role: requestBody.role,
        updated_at: new Date(),
      };
      return updatedContact;
    } else {
      return contact;
    }
  });

  res.send(updatedContact);
});

app.delete("/contacts", (req, res) => {
  const { id } = req.params;

  // Kiểm tra contacts với param id có tồn tại không
  const contact = contacts.find((contact) => contact.id == id);

  // Nếu không tồn tại thì trả về lỗi
  if (!contact) {
    res.status(404).send({
      error: "contacts not found",
    });
  }

  contacts = contacts.filter((contact) => contact.id != id);
  res.status(204).send();
});

app.listen(8000, () => {
  console.log("Server started");
});
