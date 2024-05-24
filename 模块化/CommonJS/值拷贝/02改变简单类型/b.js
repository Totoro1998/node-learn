const { val } = require("./a.js");

console.log(val);

setTimeout(() => {
  console.log(val);
}, 200);

// 1
// 2
