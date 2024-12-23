import { mkdir } from "node:fs";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";

// 获取当前模块的文件路径
const __filename = fileURLToPath(import.meta.url);
// 获取当前模块的目录路径
const __dirname = dirname(__filename);

// 定义要创建的目录路径
const dirPath = join(__dirname, "newDir/child-1/child-1-1");

// 创建目录
mkdir(dirPath, { recursive: true }, (err) => {
  if (err) {
    return console.error("Failed to create directory:", err);
  }
  console.log("Directory created successfully.");
});
