const fs = require("fs");

// process.nextTick会阻塞IO
process.nextTick(() => {
  const now = +new Date();
  /* 阻塞代码100毫秒 */
  while (+new Date() < now + 100) {}
});

fs.readFile("./test.txt", () => {
  console.log("I/O: file ");
});

setTimeout(() => {
  console.log("setTimeout: ");
}, 0);

// setTimeout:
// I/O: file
