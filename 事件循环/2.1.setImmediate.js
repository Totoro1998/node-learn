setTimeout(() => {
  console.log("setTimeout");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});

// 上述代码是无法预测先输出那个的
// 因为即使 setTimeout(xxx, 0)，在计算机运算慢的情况下也不能立刻加入 timers 队列

// setImmediate
// setTimeout
