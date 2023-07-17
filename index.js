const http = require("http");

const server = http.createServer((request, response) => {
  response.writeHead(200, {
    "Content-Type": "text/html, charset=utf-8",
  });

 
  response.write("<h1>Hello world</h1>");

  response.end();
});

server.listen(8080, "127.0.0.1", () => {
  console.log("Máy chủ đang chạy. Vui lòng truy cấp http://127.0.0.1:8080/");
});
