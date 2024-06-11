const fs = require("fs");
const path = require("path");

// 定义文件路径
const oldPath = path.join(__dirname, "oldFilename.txt");
const newPath = path.join(__dirname, "newFilename.txt");

// 异步重命名文件
fs.rename(oldPath, newPath, (err) => {
  if (err) {
    return console.error("Failed to rename file:", err);
  }
  console.log("File renamed successfully.");
});
