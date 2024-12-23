const fs = require("fs");

// 打开一个文件并获取文件描述符
fs.open("example.txt", "w", (err, fd) => {
  if (err) throw err;

  // 准备写入的多个缓冲区数据
  const buffer1 = Buffer.from("Hello, ");
  const buffer2 = Buffer.from("Node.js!");

  // 将多个缓冲区写入文件
  fs.writev(fd, [buffer1, buffer2], null, (err, bytesWritten, buffers) => {
    if (err) throw err;

    console.log(`${bytesWritten} bytes written to file.`);
    console.log("Buffers written:");
    buffers.forEach((buffer, index) => {
      console.log(`Buffer ${index + 1}: ${buffer.toString()}`);
    });

    // 关闭文件描述符
    fs.close(fd, (err) => {
      if (err) throw err;
      console.log("File closed successfully.");
    });
  });
});
