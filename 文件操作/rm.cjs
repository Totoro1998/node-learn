const fs = require("fs");
const path = require("path");

// 定义文件路径
const filePath = path.join(__dirname, "example.txt");
const dirPath = path.join(__dirname, "emptyDirectory");

// 异步删除文件
fs.rm(filePath, (err) => {
  if (err) {
    return console.error("Failed to delete file:", err);
  }
  console.log("File deleted successfully.");
});

// 异步删除空目录
fs.rm(dirPath, (err) => {
  if (err) {
    return console.error("Failed to delete directory:", err);
  }
  console.log("Directory deleted successfully.");
});

// 异步递归删除目录及其内容
fs.rm(dirPath, { recursive: true, force: true }, (err) => {
  if (err) {
    return console.error("Failed to delete directory recursively:", err);
  }
  console.log("Directory and its contents deleted successfully.");
});
