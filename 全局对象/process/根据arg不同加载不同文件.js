const args = process.argv.slice(2);
const environment = args[0] || "dev"; // 默认为开发环境

let config;

if (environment === "prod") {
  // node 根据arg不同加载不同文件.js prod
  config = require("../config/config.prod");
} else {
  // node 根据arg不同加载不同文件.js dev
  config = require("../config/config.dev");
}

console.log("Using configuration for:", environment);
console.log("Port:", config.port);
console.log("Database URL:", config.dbUrl);
