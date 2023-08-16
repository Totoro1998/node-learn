let a = require("./a.js");

let b_name = "b_name";
let b_age = "b_age";

console.log("b.js中的a", a);

// b.js中的a {}

module.exports = {
  b_name,
  b_age,
};
