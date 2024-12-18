const path = require("node:path");

// 返回路径中的文件名，并可选地去除给定的文件扩展名。
console.log("=== path.basename() ===");
console.log(path.basename("a/b/c.js")); // c.js
console.log(path.basename("a/b/c.js", ".js")); // c
console.log(path.basename("a/b/c.js", "js")); // c.
console.log(path.basename("a/b/c.js", "s")); // c.j
