import { Buffer } from "node:buffer";

const buf = Buffer.from("hello");

console.log(buf.buffer); // 指向创建此 Buffer 对象所基于的基础 ArrayBuffer 对象。

console.log(buf.length); // 5 (返回 buf 中的字节数)

console.log(buf.byteLength); // 5 (返回 buf 中的字节数)

console.log(buf.byteOffset); // 0 (返回 buf 的 byteOffset)

console.log(buf.BYTES_PER_ELEMENT); // 1 (因为是Uint8Array.BYTES_PER_ELEMENT)

buf[0] = 100;

console.log(buf.toString()); // dello
