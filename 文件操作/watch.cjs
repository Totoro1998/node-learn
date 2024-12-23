const fs = require("fs");
const path = require("path");

// 定义要监视的文件路径
const filePath = path.join(__dirname, "example.txt");
const dirPath = path.join(__dirname, "exampleDirectory");

// 监视文件的更改
fs.watch(filePath, (eventType, filename) => {
  console.log(`Event type: ${eventType}`);
  if (filename) {
    console.log(`File name: ${filename}`);
  } else {
    console.log("File name not provided");
  }
});
const abortController = new AbortController();
const signal = abortController.signal;
// 递归监视目录的更改
fs.watch(dirPath, { recursive: true, signal }, (eventType, filename) => {
  console.log(`Event type: ${eventType}`);
  if (filename) {
    console.log(`File name: ${filename}`);
  } else {
    console.log("File name not provided");
  }
});

setTimeout(() => {
  abortController.abort();
  console.log("Watcher signal stopped");
}, 5 * 1000);

const watcher = fs.watch(filePath, (eventType, filename) => {
  console.log(`Event type: ${eventType}`);
  if (filename) {
    console.log(`File name: ${filename}`);
  } else {
    console.log("File name not provided");
  }
});

// 停止监视
setTimeout(() => {
  watcher.close();
  console.log("Watcher stopped");
}, 10 * 1000); // 5秒后停止监视
