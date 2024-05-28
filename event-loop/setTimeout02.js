let start1 = 0;
let start2 = 0;
setTimeout(() => {
  start1 = Date.now();
  console.log("start1", start1);
  while (Date.now() - start1 < 200) {}
}, 0);

setTimeout(() => {
  start2 = Date.now();
  console.log("start2", start2);
}, 100);

// start1 1716897444445
// start2 1716897444645
