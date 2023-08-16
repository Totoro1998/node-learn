import { foo } from "./a.js";
console.log("b.js");
console.log(foo); // Cannot access 'foo' before initialization
export let bar = "bar";
