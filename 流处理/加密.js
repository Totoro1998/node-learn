import crypto from "crypto"; // 做加密处理的
import fs from "fs";
import path from "path";

// md5 摘要算法，  根据内容生成摘要，不能反解
// 1.不能根据摘要后的结果反推原始内容
// 2.相同的内容，摘要结果相同
// 3.如果内容有一点变化，出来的结果会差别很大 雪崩效应
// 4.最终摘要的结果长度是一致

// 加盐算法 （有秘钥的md5）  hmac(sha1  sha256  盐值)
// const r = crypto.createHash('md5').update('abc1').digest('base64')
const md5Stream = crypto.createHash("md5", {});

fs.createReadStream(path.resolve(import.meta.dirname, "key.txt"))
  .pipe(md5Stream)
  .pipe(process.stdout);
