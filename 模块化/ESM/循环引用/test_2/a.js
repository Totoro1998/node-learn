import { bar } from "./b.js";
console.log("a.js");
console.log(bar());
function foo() {
  return "foo";
}
export { foo };
