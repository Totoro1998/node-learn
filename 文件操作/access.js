import { access, constants } from "node:fs";
import path from "node:path";

const __dirname = import.meta.dirname;

const file = path.resolve(__dirname, "example.txt");

// 检查文件是否存在于当前目录。
access(file, constants.F_OK, (err) => {
  console.log(`${file} ${err ? "不存在" : "存在"}`);
});

// 检查文件是否可读。
access(file, constants.R_OK, (err) => {
  console.log(`${file} ${err ? "不可读" : "可读"}`);
});

// 检查文件是否可写。
access(file, constants.W_OK, (err) => {
  console.log(`${file} ${err ? "不可写" : "可写"}`);
});

// 检查文件是否可读且可写。
access(file, constants.R_OK | constants.W_OK, (err) => {
  console.log(`${file} ${err ? "不可" : "可"}读写`);
});
