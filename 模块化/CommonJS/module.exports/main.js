let { name } = require("./bar");
let bar = require("./bar");

setTimeout(() => {
  console.log(name); // bar
  console.log(bar.name); // bar2
}, 2000);
