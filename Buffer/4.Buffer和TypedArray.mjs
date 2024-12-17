// Buffer 实例也是 JavaScript Uint8Array 和 TypedArray 实例。所有 TypedArray 方法都可用于 Buffer。

import { Buffer } from "node:buffer";

//! 将 Buffer 传递给 TypedArray 构造函数将复制 Buffer 内容，解释为整数数组，而不是目标类型的字节序列。
// const buf = Buffer.from([1, 2, 3, 4]);
// const uint32array = new Uint32Array(buf);

// console.log(uint32array); // Uint32Array(4) [ 1, 2, 3, 4 ]

//! 传递 ArrayBuffer 底层的 Buffer 将创建一个与 Buffer 共享其内存的 TypedArray。
// const buf = Buffer.from("hello");
// const uint16array = new Uint16Array(buf.buffer, buf.byteOffset, buf.length / Uint16Array.BYTES_PER_ELEMENT);

// console.log(uint16array); // Uint16Array(2) [ 25960, 27756 ]

//! 通过以相同的方式使用 TypedArray 对象的 .buffer 属性，可以创建与 TypedArray 实例共享相同分配内存的新 Buffer。Buffer.from() 在这种情况下表现得像 new Uint8Array()
const arr = new Uint16Array(2);

arr[0] = 5000;
arr[1] = 4000;

const buf1 = Buffer.from(arr);
const buf2 = Buffer.from(arr.buffer);

console.log(buf1); // <Buffer 88 a0>
console.log(buf2); // <Buffer 88 13 a0 0f>

arr[1] = 6000;

console.log(buf1); // <Buffer 88 a0>
console.log(buf2); // <Buffer 88 13 70 17>
