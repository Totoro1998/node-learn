const { Buffer } = require("node:buffer");

const string = "😊";

const buffer = Buffer.from(string, "utf16le");
console.log(buffer);
console.log(string.codePointAt(0));
console.log((128522).toString(16));
