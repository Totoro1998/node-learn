const path = require("node:path");

// 将路径或路径片段的序列解析为绝对路径。
console.log("=== path.resolve ===");
console.log(path.resolve()); // /Users/apple/learn/node-learn/path
console.log(path.resolve("/foo", "/bar", "baz")); // /bar/baz
console.log(path.resolve("/foo/bar", "/tmp/file/")); // /tmp/file/
console.log(path.resolve("/foo/bar", "./baz")); // /foo/bar/baz
console.log(path.resolve("wwwroot", "static_files/png/", "../gif/image.gif")); // /Users/apple/learn/node-learn/path/wwwroot/static_files/gif/image.gif
console.log(path.resolve("a", "b", "c")); // /Users/apple/learn/node-learn/path/a/b/c
console.log(path.resolve("/hello", "world", "./a", "b")); // /hello/world/a/b

console.log(path.resolve("./name.txt")); // /Users/apple/learn/node-learn/path/name.txt
