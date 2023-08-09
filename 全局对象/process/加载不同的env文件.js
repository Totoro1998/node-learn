const args = process.argv.slice(2);
const environment = args[0] || "dev";

const dotenv = require("dotenv");

if (environment === "prod") {
  //node 加载不同的env文件.js prod
  dotenv.config({ path: "../prod.env" });
} else {
  // node 加载不同的env文件.js dev
  dotenv.config({ path: "../dev.env" });
}

console.log("Using environment:", environment);
console.log("Port:", process.env.PORT);
console.log("Database URL:", process.env.DB_URL);
