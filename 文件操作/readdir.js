import { readdir } from "node:fs";
import path from "node:path";

const __dirname = import.meta.dirname;

readdir(path.resolve(__dirname), { withFileTypes: true, recursive: true }, (err, files) => {
  if (err) throw err;
  console.log(files);
});
