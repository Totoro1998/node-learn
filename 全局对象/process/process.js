//! 环境变量
console.log(process.env); // USER_ID=239482 USER_KEY=foobar node process.js

//! 命令行参数
// console.log(process.argv); // node process.js --name=FK --age=22
// ["/Users/apple/.nvm/versions/node/v18.17.1/bin/node", "/Users/apple/learn/node-learn/全局对象/process/process.js", "--name=FK", "--age=22"];

// ! process.cwd()
console.info(process.cwd());
// /Users/apple/learn/node-learn/全局对象/process
