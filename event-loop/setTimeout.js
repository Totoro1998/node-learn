const fs = require("fs");
const start = Date.now();

// 不精准的定时器
setTimeout(() => {
  console.log("setTimeout exec", Date.now() - start);
}, 200);

fs.readFile("./name.txt", "utf-8", (err, data) => {
  console.log("file read");
  const start = Date.now();
  while (Date.now() - start < 300) {}
});

// file read
// setTimeout exec 311
