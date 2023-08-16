import { counter } from "./a.js";

// console.log(counter); // TypeError: Assignment to constant variable

counter = 6;
setTimeout(() => {
  console.log(counter);
}, 200);

// 3
// 4
