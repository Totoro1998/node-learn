queueMicrotask(() => {
  console.log("queueMicrotask");
});

process.nextTick(() => {
  console.log("process.nextTick");
});

Promise.resolve().then(() => console.log("Promise"));

/**
process.nextTick
queueMicrotask
Promise
 */
