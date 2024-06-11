const fs = require("fs");
const path = require("path");

// 定义要监视的文件路径
const filePath = path.join(__dirname, "example.txt");

// 定义监听器函数
const listener = (curr, prev) => {
  console.log("File changed:", filePath);
  console.log("Current stats:", curr);
  console.log("Previous stats:", prev);
};

// 开始监视文件更改
fs.watchFile(filePath, { persistent: true, interval: 500 }, listener);

// 10秒后停止监视
setTimeout(() => {
  fs.unwatchFile(filePath, listener);
  console.log("Stopped watching file:", filePath);
}, 10000);
