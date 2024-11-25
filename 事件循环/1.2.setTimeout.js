const fs = require("fs");
const start = Date.now();

fs.readFile("./test.txt", () => {
  console.log("I/O: file time", Date.now() - start);
});

setTimeout(() => {
  console.log("setTimeout: ", Date.now() - start);
}, 10);

// I/O: file time 1
// setTimeout:  11
