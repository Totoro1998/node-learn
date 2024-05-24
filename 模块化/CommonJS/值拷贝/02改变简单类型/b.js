const { val } = require("./a.js");
const moduleA = require("./a.js");

console.log(val);

setTimeout(() => {
  console.log("val", val);
  // 因为加载模块，就是加载module.exports对象，除非修改module.exports.val,直接在a.js中修改val是无用的
  console.log("module.value", moduleA.val);
}, 200);

// 1
// val 1
// module.value 1
