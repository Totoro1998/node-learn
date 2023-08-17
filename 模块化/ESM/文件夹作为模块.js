// import moduleA from "./module_a"; 不支持文件夹作为模块，必须完全指定目录索引（例如 './startup/index.js'）

// 但加载node_modules中的包可以这样写 import pkg from "pkg";

// !任何以 '.', '..', '/'开头的标识符都是文件模块，文件模块和node_modules模块的加载逻辑不一样
import moduleA from "./module_a/index.js";

console.log(moduleA);
