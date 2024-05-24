import { counter } from "./a.js";

console.log(counter);
setTimeout(() => {
  console.log(counter);
}, 200);

// 3
// 4
