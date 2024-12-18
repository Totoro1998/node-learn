const path = require("node:path");

// path.dirname(path) 方法返回 path 的目录名
console.log("=== path.dirname(path) ===");

// process.cwd()返回当前工作目录
console.log("=== process.cwd() ===");
console.log(process.cwd()); // /Users/apple/learn/node-learn/path

console.log(path.dirname(process.cwd())); // /Users/apple/learn/node-learn
console.log(path.dirname("/a/b/c")); // /a/b
