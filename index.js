const fs = require("fs");

const students = [
  {
    name: "Thái",
    age: 28,
    hometown: " Đà Nẵng",
  },
  {
    name: "Tín",
    age: 29,
    hometown: " Quảng Nam",
  },
  {
    name: "Tài",
    age: 22,
    hometown: "Quảng Nam",
  },
  {
    name: "Giang",
    age: 22,
    hometown: "Quảng Bình",
  },
  {
    name: "Phương",
    age: 27,
    hometown: "",
  },
  { name: "Sáng", age: 21, hometown: "" },
  { name: "Việt", age: 22, hometown: "" },
];

// // Ghi nhiều files - tên mỗi file là tên mỗi học viên trong lớp, nội dung file chứa tên, tuổi, quê quán của học viên tương ứng
// for (let student of students) {
//   const content =
//     "Tên: " +
//     student.name +
//     "\n" +
//     "Tuổi: " +
//     student.age +
//     "\n" +
//     "Quê quán: " +
//     student.hometown;
//   fs.writeFileSync(student.name + ".txt", content, "utf-8");
// }

// Đọc files và in ra console thông tin của từng học viên
for (let student of students) {
  const fileName = student.name + ".txt";
  const fileContent = fs.readFileSync(fileName, "utf-8");
  console.log(fileContent);
}
