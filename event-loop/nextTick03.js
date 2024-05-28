setTimeout(() => {
  console.log("setTimeout1:");
  process.nextTick(() => {
    console.log("nextTick");
  });
}, 0);
setTimeout(() => {
  console.log("setTimeout2:");
}, 0);

// setTimeout1:
// nextTick
// setTimeout2:
