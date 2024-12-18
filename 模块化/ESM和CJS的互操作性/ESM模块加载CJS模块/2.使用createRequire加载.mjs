import { createRequire } from "module";

const require = createRequire(import.meta.url);

const { name, age } = require("./cjs_module.cjs");

console.log(name, age); // fk 22
