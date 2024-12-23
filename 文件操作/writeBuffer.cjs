const fs = require("fs");

// 打开一个文件并获取文件描述符
fs.open("example.txt", "a", (err, fd) => {
  if (err) {
    throw err;
  }

  // 准备写入的数据
  const data = "ni hao!";
  const buffer = Buffer.from(data, "utf8");

  // 将数据写入文件
  fs.write(fd, buffer, 0, buffer.length, null, (err, written, buffer) => {
    if (err) {
      throw err;
    }

    console.log(`${written} bytes written to file.`);
    console.log(`Buffer content: ${buffer.toString()}`);

    // 关闭文件描述符
    fs.close(fd, (err) => {
      if (err) {
        throw err;
      }
      console.log("File closed successfully.");
    });
  });
});
