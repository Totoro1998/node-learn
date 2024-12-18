const path = require("node:path");

// 获取路径中的文件扩展名。
console.log("=== path.extname(path) ===");
console.log(path.extname("index.html")); // .html
console.log(path.extname("index.coffee.md")); // .md
console.log(path.extname("index.")); // .
console.log(path.extname("index")); //
console.log(path.extname(".index")); //
console.log(path.extname(".index.md")); // .md

// 确定 path 是否为绝对路径。
console.log("=== path.isAbsolute ===");
console.log(path.isAbsolute("/foo/bar")); // true
console.log(path.isAbsolute("qux/")); // false
console.log(path.isAbsolute(".")); // false

// 规范化给定的 path
console.log("=== path.normalize ===");
console.log(path.normalize("a//b//c/d/e/.."));

// 用于解析文件路径，将其拆分为一个对象
console.log("=== path.parse ===");
console.log(path.parse("/home/user/dir/file.txt"));

// 从对象返回路径字符串
console.log("=== path.format ===");
console.log(
  path.format({
    root: "/ignored",
    dir: "/home/user/dir",
    base: "file.txt",
  })
);

// 提供特定于平台的路径片段分隔符。
console.log("=== path.sep ===");
console.log("foo/bar/baz".split(path.sep));
console.log("foo\\bar\\baz".split(path.sep));

// 获取特定于平台的路径定界符
console.log("=== path.delimiter ===");
console.log(process.env.PATH);
process.env.PATH.split(path.delimiter);

// 据当前工作目录返回从 from 到 to 的相对路径。
console.log("=== path.relative ===");
console.log(path.relative("/data/orandea/test/aaa", "/data/orandea/impl/bbb")); //../../impl/bbb
