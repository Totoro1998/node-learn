const fs = require("fs");
const start = Date.now();

console.log("Start");

setTimeout(() => {
  console.log("Timeout callback"); // Timers 阶段
}, 0);

// 第一轮事件循环poll阶段是空，读取文件后，将回调函数添加到poll队列，然后第二轮循环时取出

fs.readFile("./name.txt", () => {
  console.log("File read callback"); // Poll 阶段
});

setImmediate(() => {
  console.log("Immediate callback"); // Check 阶段
});

Promise.resolve().then(() => {
  console.log("Promise callback"); // 微任务
});

console.log("End");

/**
Start
End
Promise callback
Timeout callback
Immediate callback
File read callback
 */
