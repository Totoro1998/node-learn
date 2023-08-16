let b = require("./b.js");

let a_name = "a_name";
let a_age = "a_age";

console.log("a.js中的b", b);
// a.js中的b { b_name: 'b_name', b_age: 'b_age' }

module.exports = {
  a_name,
  a_age,
};
