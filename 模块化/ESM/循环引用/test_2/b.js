import { foo } from "./a.js";
console.log("b.js");
console.log(foo());
function bar() {
  return "bar";
}
export { bar };
