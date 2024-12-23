import { createReadStream, createWriteStream } from "node:fs";

// 创建可读流，从 'input.txt' 文件读取
const readableStream = createReadStream("input.txt");

// 创建可写流，将数据写入 'output.txt' 文件
const writableStream = createWriteStream("output.txt");

// 使用 pipe 将数据从可读流传输到可写流
readableStream.pipe(writableStream);

writableStream.on("finish", () => {
  console.log("文件内容已成功复制到 output.txt");
});
