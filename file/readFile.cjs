const fs = require("fs");
const path = require("path");

// 定义文件路径
const filePath = path.join(__dirname, "example.txt");

// 异步读取文件内容
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    return console.error("Failed to read file:", err);
  }
  console.log("File content:", data);
});
