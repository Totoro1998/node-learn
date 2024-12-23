import { readFile, writeFile } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// 获取当前模块的文件路径
const __filename = fileURLToPath(import.meta.url);
// 获取当前模块的目录路径
const __dirname = dirname(__filename);

//! 整个过程非常浪费内存，读取内容的时候需要将内容写到内存中（淹没可用内存，64k以上的文件不建议采用 readFile）
readFile(resolve(__dirname, "../example.txt"), function (err, data) {
  console.log(data);
  writeFile(resolve(__dirname, "../example-copy.txt"), data, () => {
    console.log("write ok");
  });
});
