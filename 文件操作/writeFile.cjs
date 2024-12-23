const fs = require("fs");

const data = "Hello, Node.js!";

fs.writeFile("message.txt", data, (err) => {
  if (err) throw err;
  console.log("Data has been written to message.txt");
});

const dataBuffer = Buffer.from("Hello, Node.js!");

fs.writeFile("message.txt", dataBuffer, (err) => {
  if (err) throw err;
  console.log("Data has been written to message.txt");
});

const options = {
  encoding: "utf8",
  mode: 0o666, // 可读可写权限
  flag: "w", // 覆盖写入
};

fs.writeFile("message.txt", data, options, (err) => {
  if (err) throw err;
  console.log("Data has been written to message.txt");
});
