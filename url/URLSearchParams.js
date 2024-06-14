const { URLSearchParams } = require("node:url");
const params = new URLSearchParams();
params.append("name", "fk");
params.append("name", "kf");
console.log(params.toString());
// name=fk&name=kf
