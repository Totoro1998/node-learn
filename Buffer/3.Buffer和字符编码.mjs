import { Buffer } from "node:buffer";

const buf = Buffer.from("hello world", "utf8");

console.log(buf.toString("hex")); // 68656c6c6f20776f726c64

console.log(buf.toString("base64")); // aGVsbG8gd29ybGQ=

console.log(Buffer.from("fhqwhgads", "utf8")); // <Buffer 66 68 71 77 68 67 61 64 73>

console.log(Buffer.from("fhqwhgads", "utf16le")); // <Buffer 66 00 68 00 71 00 77 00 68 00 67 00 61 00 64 00 73 00>
