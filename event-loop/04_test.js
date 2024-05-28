const fs = require("fs");

console.log("Start");

setTimeout(() => {
  console.log("Timeout callback"); // Timers 阶段
}, 0);

setImmediate(() => {
  console.log("Immediate callback"); // Check 阶段
});

fs.readFile(__filename, () => {
  console.log("File read callback"); // Poll 阶段
});

Promise.resolve().then(() => {
  console.log("Promise callback"); // 微任务
});

console.log("End");
