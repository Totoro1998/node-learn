const fs = require("fs");

// 打开一个文件并获取文件描述符，a是追加模式
fs.open("example.txt", "a", (err, fd) => {
  if (err) {
    throw err;
  }

  // 准备写入的字符串数据
  const data = "你好，世界!";

  // 将字符串数据写入文件
  fs.write(fd, data, null, "utf8", (err, written, str) => {
    if (err) {
      throw err;
    }

    console.log(`${written} bytes written to file.`);
    console.log(`String written: ${str}`);

    // 关闭文件描述符
    fs.close(fd, (err) => {
      if (err) {
        throw err;
      }
      console.log("File closed successfully.");
    });
  });
});
