import zlib from "node:zlib"; // 做压缩处理
import fs from "node:fs";
import { resolve } from "node:path";

const gzip = zlib.createGzip(); // 转化流

fs.createReadStream(resolve(import.meta.dirname, "a.txt"))
  .pipe(gzip)
  .pipe(fs.createWriteStream(resolve(import.meta.dirname, "a.gz")));
