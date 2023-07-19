const { error } = require("console");
const fs = require("fs");

// Các định dạng file hay được sử dụng:
// 1) .CSV
// 2) .TSV
// 3) .dat
// 4) .xls, xlsx (Excel)
// 5) .zip / .rar / .7z / .grip (nén)
// 6) .png /.jpg / .gif / .mp4 / .mp3 (media)

// // Ghi file đồng bộ
// const constent = "Đây là nội dung file test.txt";
// fs.writeFileSync("test.txt", constent);

console.log("phía dưới xủ lý ghi file");

// // Đọc file đồng bộ
// const data = fs.readFileSync('test.txt,utf8');
// console.log('data',data);

// // Xóa file
// fs.unlink("test.txt", (error) => {
//   if (error) {
//     console.log("error", error.message);
//   } else {
//     console.log("Xóa file thành công");
//   }
// });

// // Ghi file  bất đồng bộ
// const constent2 = "Đây là nội dung file test2.txt";
// fs.writeFile("test2.txt", constent2, "utf-8", (error) => {
//   if (error) {
//     console.log("error", error.message);
//   } else {
//     console.log("Ghi file thành công");
//   }
// });
// // trả kết quả
// console.log("Phía dưới hàm writeFile()");

// Đọc file bất đồng bộ
fs.readFile("test2.txt", "utf-8", (error, data) => {
  if (error) {
    console.log("error", error.message);
  } else {
    console.log("Data:", data);
  }
});

console.log("Phía dưới hàm writFile()");
