const start = Date.now();

setImmediate(() => {
  console.log("setImmediate");
});

// 加入timers队列，但需要继续走完剩余主代码
setTimeout(() => {
  console.log("setTimeout");
}, 0);

while (Date.now() - start < 100) {}

// setTimeout
// setImmediate

// 同步代码走完后，开启下一轮事件循环，先走timers队列
