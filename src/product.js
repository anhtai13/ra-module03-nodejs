import express from "express";

const app = express();

// Trang chủ
app.get("/", (req, res) => {
  res.send("<h1>Đây là trang chủ<h1>");
});

// GET: product
app.get("/product", (req, res) => {
  const products = [
    { id: "1", nameProduct: "Laptop" },
    { id: "2", nameProduct: "Telephone" },
    { id: "3", nameProduct: "Smart watch" },
  ];
  // const { id, keyword } = req.query;
  // const searchResult = products.filter((product) => {
  //   return (
  //     (keyword && product.name.toLowerCase().includes(keyword.toLowerCase())) ||
  //     product.id == id
  //   );
  // });
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
