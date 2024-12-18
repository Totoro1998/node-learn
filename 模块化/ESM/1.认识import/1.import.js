//! 在esm模块中没有__filename 或 __dirname；也没有require、exports、module.exports

import { fileURLToPath } from "url";

import path from "path";

// 在esm中，获取文件的绝对路径和目录
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("__dirname", __dirname);
console.log("__filename", __filename);
