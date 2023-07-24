import express from "express";

const app = express();

// Trang chủ
app.get("/", (req, res) => {
  res.send("<h1>Đây là trang chủ<h1>");
});

// ------------------ USER ---------------------------

// GET: users
app.get("/users", (req, res) => {
  const users = [
    { id: "1", name: "John", email: "john@example.com" },
    { id: "2", name: "Mary", email: "mary@example.com" },
  ];
  // const { id, keyword } = req.query;
  // const searchResult = users.filter((user) => {
  //   return (
  //     (keyword && user.name.toLowerCase().includes(keyword.toLowerCase())) ||
  //     user.id == id
  //   );
  // });
  res.send(users);
});

// POST: Tạo form POST
// Add user
app.get("/users/add", (req, res) => {
  res.send(`<form action="http://localhost:8080/users" method="POST">
  <input name="name" placeholder="name"/>
  <input name="email" placeholder="email"/>
  <button type="submit">ADD</button>
  </form>`);
});

// POST: method="POST"
// Tạo user mới
app.post("/users", (req, res) => {
  req.body;
  res.send({ body: req.body });
});

// Param
app.get("/users/:id", (req, res) => {
  const users = [
    { id: "1", name: "John", email: "john@example.com" },
    { id: "2", name: "Mary", email: "mary@example.com" },
  ];
  const id = req.params.id;
  const user = users.find((u) => u.id == id);

  if (user) {
    res.send(user);
  } else {
    res.send({ error: "Người dùng không tồn tại" });
  }
});

// Xóa user theo id
app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;

  res.send(userId);
});

// ------------------ ORDER ---------------------------

// GET: order
app.get("/order", (req, res) => {
  const orders = [
    { id: "1", nameProduct: "Laptop" },
    { id: "2", nameProduct: "Telephone" },
    { id: "3", nameProduct: "Smart watch" },
  ];
  // const { id, keyword } = req.query;
  // const searchResult = orders.filter((order) => {
  //   return (
  //     (keyword && order.name.toLowerCase().includes(keyword.toLowerCase())) ||
  //     order.id == id
  //   );
  // });
  res.send(orders);
});

// POST: Tạo form POST
//  add order
app.get("/order/add", (req, res) => {
  res.send(`<form action="http://localhost:8080/order" method="POST">
  <input name="nameProduct" placeholder="name"/>
  <input name="description" placeholder="description"/>
  <button type="submit">order</button>
  </form>`);
});

// POST: method="POST"
// Tạo product mới
app.post("/order", (req, res) => {
  req.body;
  res.send({ body: req.body });
});

// Param
app.get("/order/:id", (req, res) => {
  const products = [
    { id: "1", nameProduct: "Laptop" },
    { id: "2", nameProduct: "Telephone" },
    { id: "3", nameProduct: "Smart watch" },
  ];
  const id = req.params.id;
  const product = products.find((u) => u.id == id);

  if (product) {
    res.send(product);
  } else {
    res.send({ error: "Người dùng không tồn tại" });
  }
});

// Xóa product theo id
app.delete("/order/:id", (req, res) => {
  const productId = req.params.id;

  res.send(productId);
});

// ------------------ PRODUCT ---------------------------
// GET: product
app.get("/product", (req, res) => {
  const products = [
    { id: "1", nameProduct: "Laptop" },
    { id: "2", nameProduct: "Telephone" },
    { id: "3", nameProduct: "Smart watch" },
  ];

  res.send(products);
});

// POST: Tạo form POST
// Add product
app.get("/product/add", (req, res) => {
  res.send(`<form action="http://localhost:8080/product" method="POST">
  <input name="nameProduct" placeholder="name"/>
  <input name="description" placeholder="description"/>
  <button type="submit">ADD</button>
  </form>`);
});

// POST: method="POST"
// Tạo product mới
app.post("/product", (req, res) => {
  req.body;
  res.send({ body: req.body });
});

// Param
app.get("/product/:id", (req, res) => {
  const products = [
    { id: "1", nameProduct: "Laptop" },
    { id: "2", nameProduct: "Telephone" },
    { id: "3", nameProduct: "Smart watch" },
  ];
  const id = req.params.id;
  const product = products.find((u) => u.id == id);

  if (product) {
    res.send(product);
  } else {
    res.send({ error: "Người dùng không tồn tại" });
  }
});

// Xóa product theo id
app.delete("/product/:id", (req, res) => {
  const productId = req.params.id;

  res.send(productId);
});

app.listen(8080, () => {
  console.log("server started");
});
