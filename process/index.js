import {
  argv,
  argv0,
  execPath,
  execArgv,
  version,
  ppid,
  pid,
  platform,
  cwd,
  hrtime,
  env,
} from "node:process";

// argv
// node index.js --mode development
// node index.js one name=fk
console.log("===process.argv===");
console.log(argv);
// argv0
console.log("===process.argv0===");
console.log(argv0);
// execPath
console.log("===process.execPath===");
console.log(execPath);
// exexArgv
// node --icu-data-dir=./foo --require ./bar.js script.js --version
console.log("===process.execArgv===");
console.log(execArgv);
// version
console.log("===process.version===");
console.log(version);
// ppid
console.log("===process.ppid===");
console.log(ppid);
// pid
console.log("===process.pid===");
console.log(pid);
// pid
console.log("===process.platform===");
console.log(platform);
// cwd()
console.log("===process.cwd()===");
console.log(cwd());
// hrtime.bigint()
console.log("===process.hrtime.bigint()===");
console.log(hrtime.bigint());

console.log("===process.env===");
console.log(env);
