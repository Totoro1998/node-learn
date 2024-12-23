import { createReadStream } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// 获取当前模块的文件路径
const __filename = fileURLToPath(import.meta.url);
// 获取当前模块的目录路径
const __dirname = dirname(__filename);

const rs = createReadStream(resolve(__dirname, "text.txt"), {
  highWaterMark: 10,
});

rs.on("open", (fd) => {
  console.log("open", fd);
});
rs.on("ready", (data) => {
  console.log("ready");
});

rs.on("data", (chunk) => {
  // console.log("data", chunk);
  rs.pause(); //
});

rs.on("end", () => {
  console.log("end");
});

rs.on("close", () => {
  console.log("close");
});

rs.on("error", (err) => {
  console.log("error", err);
});
rs.on("pause", () => {
  console.log("pause");
  // rs.resume();
});
rs.on("resume", () => {
  console.log("resume");
});
// rs.on("readable", () => {
//   console.log("readable");
// });
