const { URL } = require("node:url");
const test_url = new URL("http://172.16.170.193:3000/landing/brand/petco#age?age=25");
console.log(test_url);
