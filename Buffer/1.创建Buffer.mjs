import { Buffer } from "node:buffer";

// 1. 创建一个长度为 10 的 Buffer，并填充 1
const buf1 = Buffer.alloc(10, 1);

console.log(buf1); // <Buffer 01 01 01 01 01 01 01 01 01 01>

// 2. 创建一个长度为 10 的 Buffer，不填充
const buf2 = Buffer.allocUnsafe(10);

console.log(buf2); // <Buffer 00 00 00 00 00 00 00 00 00 00>

// 3. 根据数组创建 Buffer
const buf3 = Buffer.from([1, 2, 3]);

console.log(buf3); // <Buffer 01 02 03>

// 4. 根据字符串创建 Buffer
const buf4 = Buffer.from("hello");

console.log(buf4); // <Buffer 68 65 6c 6c 6f>

const arr = new Uint16Array(2);
arr[0] = 1;
arr[1] = 2;

// 5. 根据 ArrayBuffer 创建 Buffer
const buf5 = Buffer.from(arr.buffer); //

console.log(buf5); // <Buffer 01 00 02 00>

// 6. 根据另一个 Buffer 创建 Buffer
const buf6 = Buffer.from(buf1);

console.log(buf6); // <Buffer 01 01 01 01 01 01 01 01 01 01>
