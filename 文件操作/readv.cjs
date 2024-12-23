const fs = require("fs");
const path = require("path");

// 定义文件路径
const filePath = path.join(__dirname, "example.txt");

// 以只读模式打开文件
fs.open(filePath, "r", (err, fd) => {
  if (err) {
    return console.error("Failed to open file:", err);
  }
  console.log("File opened successfully, file descriptor:", fd);

  // 创建缓冲区数组来存储读取的数据
  const buffers = [Buffer.alloc(5), Buffer.alloc(10)];

  // 读取文件内容
  fs.readv(fd, buffers, 0, (err, bytesRead, buffers) => {
    if (err) {
      console.error("Failed to read file:", err);
    } else {
      console.log(`Read ${bytesRead} bytes from file.`);
      buffers.forEach((buffer, index) => {
        console.log(`Buffer ${index + 1}:`, buffer.toString("utf8"));
      });
    }

    // 关闭文件描述符
    fs.close(fd, (err) => {
      if (err) {
        console.error("Failed to close file:", err);
      } else {
        console.log("File closed successfully.");
      }
    });
  });
});
