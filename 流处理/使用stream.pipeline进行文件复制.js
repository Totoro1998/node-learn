import { pipeline } from "node:stream";

import fs from "node:fs";
// 创建可读流
const readableStream = fs.createReadStream("input.txt");

// 创建可写流
const writableStream = fs.createWriteStream("output.txt");

// 使用 pipeline 将可读流和可写流连接
pipeline(
  readableStream, // 输入流
  writableStream, // 输出流
  (err) => {
    // 回调函数，处理错误
    if (err) {
      console.error("文件复制失败:", err);
    } else {
      console.log("文件复制成功");
    }
  }
);
