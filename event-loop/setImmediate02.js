/* TODO:  setTimeout & setImmediate */
setImmediate(() => {
  console.log("setImmediate");
});

setTimeout(() => {
  console.log("setTimeout");
}, 0);
/* 用 100000 循环阻塞代码，促使 setTimeout 过期 */
for (let i = 0; i < 100000; i++) {}

// setTimeout
// setImmediate
