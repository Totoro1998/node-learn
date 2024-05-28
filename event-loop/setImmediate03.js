const fs = require("fs");
fs.readFile("./file.js", () => {
  // poll阶段立马到check阶段
  setImmediate(() => {
    console.log("setImmediate");
  });
  setTimeout(() => {
    console.log("setTimeout");
  }, 0);
});

// setImmediate;
// setTimeout;
