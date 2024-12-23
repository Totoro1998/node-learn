const fs = require("fs");
const path = require("path");

// 定义目录路径
const dirPath = path.join(__dirname, "emptyDirectory");

// // 异步删除空目录
// fs.rmdir(dirPath, (err) => {
//   if (err) {
//     return console.error("Failed to delete directory:", err);
//   }
//   console.log("Directory deleted successfully.");
// });

fs.rmdir(dirPath, { recursive: true }, (err) => {
  if (err) {
    return console.error("Failed to delete directory:", err);
  }
  console.log("Directory deleted successfully.");
});
