import { pipeline, Transform } from "node:stream";
import fs from "node:fs";

// 创建一个转换流，将输入转换为大写
const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase()); // 将数据转换为大写
    callback();
  },
});

// 创建可读流和可写流
const readableStream = fs.createReadStream("input.txt");
const writableStream = fs.createWriteStream("output.txt");

// 使用 pipeline 链接流，并进行转换
pipeline(
  readableStream, // 输入流
  upperCaseTransform, // 转换流
  writableStream, // 输出流
  (err) => {
    // 回调函数，处理错误
    if (err) {
      console.error("流处理失败:", err);
    } else {
      console.log("转换成功，数据已保存到 output.txt");
    }
  }
);
