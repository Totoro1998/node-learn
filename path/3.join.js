const path = require("node:path");
// 将多个路径拼接成一个路径
console.log("=== path.join([...paths]) ===");
console.log(path.join("a", "b", "c")); // a/b/c
console.log(path.join("/foo", "bar", "baz/asdf", "quux")); ///foo/bar/baz/asdf/quux
console.log(path.join("/foo", "bar", "baz/asdf", "..")); // /foo/bar/baz
console.log(path.join("/foo", "bar", "baz/asdf", "quux", "..")); // /foo/bar/baz/asdf/quux
console.log(path.join(process.cwd(), "/hello", "world")); // /Users/apple/learn/node-learn/path/hello/world
