const fs = require("fs");
const path = require("path");

// 定义文件路径
const filePath = path.join(__dirname, "example.txt");

const controller = new AbortController();
const signal = controller.signal;

// 异步读取文件内容
fs.readFile(
  filePath,
  {
    encoding: "utf8",
    signal,
  },
  (err, data) => {
    if (err) {
      return console.error("Failed to read file:", err);
    }
    console.log("File content:", data);
  }
);

// setImmediate(() => {
//   controller.abort();
// });
