import { createWriteStream } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// 获取当前模块的文件路径
const __filename = fileURLToPath(import.meta.url);
// 获取当前模块的目录路径
const __dirname = dirname(__filename);

const ws = createWriteStream(resolve(__dirname, "text-copy.txt"), {
  highWaterMark: 4,
});

ws.write("he"); // 2 字节
// ws.write("ll"); // 2 字节
ws.write("o"); // 1 字节
// ws.write("world"); // 继续写入更多字节

ws.on("drain", () => {
  console.log("drain");
});

// ws.end();

// ws.on("open", (fd) => {
//   console.log("open", fd);
// });
// ws.on("ready", () => {
//   console.log("ready");
// });

// ws.on("close", () => {
//   console.log("close");
// });

// ws.on("error", (err) => {
//   console.log("error", err);
// });

// ws.on("finish", () => {
//   console.log("finish");
// });

// ws.on("pipe", (src) => {
//   console.log("pipe", src);
// });

// ws.on("unpipe", (src) => {
//   console.log("unpipe", src);
// });
