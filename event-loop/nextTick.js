process.nextTick(() => {
  console.log("nextTick");
});

setTimeout(() => {
  console.log("setTimeout1");
}, 0);

setTimeout(() => {
  console.log("setTimeout2");
}, 0);
