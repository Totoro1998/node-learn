import { close, open, read, write } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// 获取当前模块的文件路径
const __filename = fileURLToPath(import.meta.url);
// 获取当前模块的目录路径
const __dirname = dirname(__filename);

const buf = Buffer.alloc(10); // 我希望先读取10个字节

open(resolve(__dirname, "../example.txt"), "r", function (err, rfd) {
  // fd -> 就意味着我操作的是 pc.js 而且可以做读取操作
  open(resolve(__dirname, "../example-copy.txt"), "w", 0o666, function (err, wfd) {
    // 将读取到的内容写入到这个buf中
    // 告诉读取的时候 写入到buf的第零个为止，写入10个，从文件的第零个开始读取
    let readPosition = 0;
    let writePosition = 0;
    function next() {
      read(rfd, buf, 0, buf.length, readPosition, function (err, bytesRead) {
        if (bytesRead) {
          write(wfd, buf, 0, bytesRead, writePosition, function () {
            readPosition += bytesRead;
            writePosition += bytesRead;
            next();
          });
        } else {
          close(rfd, () => {});
          close(wfd, () => {});
        }
      });
    }
    next();
  });
});
