import { stat } from "node:fs";
import path from "node:path";

const __dirname = import.meta.dirname;

stat(path.resolve(__dirname), (err, stats) => {
  if (err) throw err;
  console.log(stats.isFile());
  console.log(stats.isDirectory());
  console.log(stats.isSymbolicLink());
  console.log(stats.size);
});
