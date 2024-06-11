const fs = require("fs");
const path = require("path");

// 定义文件路径
const oldPath = path.join(__dirname, "example.txt");
const newPath = path.join(__dirname, "newDirectory", "example.txt");

// 异步移动文件
fs.rename(oldPath, newPath, (err) => {
  if (err) {
    return console.error("Failed to move file:", err);
  }
  console.log("File moved successfully.");
});
