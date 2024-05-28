const fs = require("fs");
fs.readFile("./test.txt", () => {
  console.log("I/O: file ");
});

setTimeout(() => {
  console.log("setTimeout: ");
}, 0);
