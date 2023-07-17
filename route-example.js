const http = require("http");
const url = require("url");

const server = http.createServer((request, response) => {
  const { pathname } = url.parse(request.url);

  console.log("pathname ", pathname);

  response.writeHead(200, {
    "Content-Type": "text/html ; charset=utf-8 ",
  });

  response.write("<h1>Hello world</h1>");

  if (pathname === "/products") {
    response.write("<h1>Danh sách sản phẩm</h1>");
  } else if (pathname === "/users") {
    response.write("<h1>Danh sách người dùng</h1>");
  } else if (pathname === "/orders") {
    response.write("<h1>Danh sách đơn hàng</h1>");
  } else {
    response.write("<h1>Danh sách không tồn tại</h1>");
  }

  response.end();
});

server.listen(8080, "127.0.0.1", () => {
  console.log("Máy chủ đang chạy. Vui lòng truy cấp http://127.0.0.1:8080/");
});
