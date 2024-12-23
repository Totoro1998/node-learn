import { cp } from "node:fs";

import path from "node:path";

const __dirname = import.meta.dirname;

function callback(err) {
  if (err) throw err;
  console.log("source.txt was copied to destination.txt");
}
cp(path.resolve(__dirname, "source"), path.resolve(__dirname, "destination"), { recursive: true }, callback);
