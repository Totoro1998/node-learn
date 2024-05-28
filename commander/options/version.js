const commander = require("commander");
const program = new commander.Command();

program.version("1.2.3");
program.parse();
console.log(program.opts());
// node version.js -V
