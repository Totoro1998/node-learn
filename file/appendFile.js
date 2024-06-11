import { appendFile } from "node:fs";

appendFile("message.txt", "data to append", (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});

// 创建一个 ArrayBuffer 并填充数据
const buffer = new ArrayBuffer(8);
const view = new Uint8Array(buffer);
for (let i = 0; i < view.length; i++) {
  view[i] = i * 10; // 示例数据
}

// 将 ArrayBuffer 转换为 Buffer
const buf = Buffer.from(buffer);

// 定义文件路径
const path = "example.txt";

// 使用 fs.appendFile 将 Buffer 数据追加到文件中
appendFile(path, buf, "utf-8", (err) => {
  if (err) {
    console.error("Failed to append data to file:", err);
  } else {
    console.log("Data successfully appended to file.");
  }
});
