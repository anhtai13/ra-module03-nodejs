import express from "express";

const app = express();

// Trang chủ
app.get("/", (req, res) => {
  res.send("<h1>Đây là trang chủ<h1>");
});

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
app.listen(8080, () => {
  console.log("server started");
});
