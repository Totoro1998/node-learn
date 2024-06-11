import { write, close, open } from "node:fs";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";

// 获取当前模块的文件路径
const __filename = fileURLToPath(import.meta.url);
// 获取当前模块的目录路径
const __dirname = dirname(__filename);

// 定义文件路径
const filePath = join(__dirname, "example.txt");

// 以写入模式打开文件
open(filePath, "w", (err, fd) => {
  if (err) {
    return console.error("Failed to open file:", err);
  }
  console.log("File opened successfully, file descriptor:", fd);

  // 写入一些数据到文件
  const data = "Hello, world!";
  write(fd, data, (err, written, string) => {
    if (err) {
      return console.error("Failed to write to file:", err);
    }
    console.log("Data written successfully.");

    // 关闭文件描述符
    close(fd, (err) => {
      if (err) {
        return console.error("Failed to close file:", err);
      }
      console.log("File closed successfully.");
    });
  });
});
