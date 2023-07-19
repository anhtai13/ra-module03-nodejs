const fs = require("fs");

const content = "Tín\nThái\nTrung\nSáng\nViệt Plus\nSơn\nTài\nGiang";
fs.writeFile("test.txt", content, "utf-8", (error) => {
  if (error) {
    console.log("error: ", error.message);
  } else {
    console.log("Ghi file thành công");
  }
});

console.log("Phía dưới hàm writeFile()");
