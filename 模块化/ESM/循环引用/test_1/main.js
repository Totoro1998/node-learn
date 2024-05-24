import { foo } from "./lib.js";
console.log("main.js");
console.log(foo); // Cannot access 'foo' before initialization
export let bar = "bar";
