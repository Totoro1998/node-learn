const path = require("node:path");

// 返回路径中的文件名，并可选地去除给定的文件扩展名。

console.log("=== path.basename ===");
console.log(path.basename("a/b/c.js"));
console.log(path.basename("a/b/c.js", ".js"));
console.log(path.basename("a/b/c.js", "js"));
console.log(path.basename("a/b/c.js", "s"));

// path.dirname() 方法返回 path 的目录名
console.log("=== path.dirname ===");
console.log(path.dirname(process.cwd()));
console.log(path.dirname("/a/b/c"));

// 获取路径中的文件扩展名。
console.log("=== path.extname ===");
console.log(path.extname("index.html"));
console.log(path.extname("index.coffee.md"));
console.log(path.extname("index."));
console.log(path.extname("index"));
console.log(path.extname(".index"));
console.log(path.extname(".index.md"));

// 将多个路径拼接成一个路径
console.log("=== path.join ===");
console.log(path.join("/foo", "bar", "baz/asdf", "quux"));
console.log(path.join("/foo", "bar", "baz/asdf", ".."));
console.log(path.join("/foo", "bar", "baz/asdf", "quux", ".."));
console.log(path.join("a", "b", "c"));
console.log(path.join(process.cwd(), "/hello", "world"));

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

// 确定 path 是否为绝对路径。
console.log("=== path.isAbsolute ===");
console.log(path.isAbsolute("/foo/bar")); // true
console.log(path.isAbsolute("qux/")); // false
console.log(path.isAbsolute(".")); // false

// 提供特定于平台的路径片段分隔符。
console.log("=== path.sep ===");
console.log("foo/bar/baz".split(path.sep));
console.log("foo\\bar\\baz".split(path.sep));

// 将路径或路径片段的序列解析为绝对路径。
console.log("=== path.resolve ===");
console.log(path.resolve());
console.log(path.resolve("/foo/bar", "./baz"));
console.log(path.resolve("/foo/bar", "/tmp/file/"));
console.log(path.resolve("/foo", "/bar", "baz"));
console.log(path.resolve("wwwroot", "static_files/png/", "../gif/image.gif"));
console.log(path.resolve("a", "b", "c"));
console.log(path.resolve("/hello", "world", "./a", "b"));

// 获取特定于平台的路径定界符
console.log("=== path.delimiter ===");
console.log(process.env.PATH);
process.env.PATH.split(path.delimiter);

// 据当前工作目录返回从 from 到 to 的相对路径。
console.log("=== path.relative ===");
console.log(path.relative("/data/orandea/test/aaa", "/data/orandea/impl/bbb"));
