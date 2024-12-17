import { Buffer } from "node:buffer";

// !buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])
const buf = Buffer.allocUnsafe(26);

const target = Buffer.allocUnsafe(5);

for (let i = 0; i < 26; i++) {
  // 将 a-z 填充到 buf 中
  buf[i] = i + 97;
}

buf.copy(target, 0, 4, target.length + 4);

console.log(target.toString()); // efghi

// !Buffer.concat(list[, totalLength])
const buf1 = Buffer.from("hello ");
const buf2 = Buffer.from("world");
const buf3 = Buffer.from("!");
const totalLength = buf1.length + buf2.length + buf3.length;

const buf4 = Buffer.concat([buf1, buf2, buf3], totalLength);

console.log(buf4.toString());
