const http = require("http");
const fs = require("fs");

http
  .createServer((request, response) => {
    response.writeHead(200, { "content-Type": "text/html; charset=utf-8" });

    const template = fs.readFileSync("template.html", "utf-8");
    const html = template.replace(/{{message}}/g, msg);
    response.write(html);

    response.end();
  })
  .listen(8080, "127.0.0.1", () => {
    console.log("Server started");
  });
