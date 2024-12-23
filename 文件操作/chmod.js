import { chmod } from "node:fs";
import path from "node:path";

const __dirname = import.meta.dirname;

chmod(path.resolve(__dirname, "test_chomd.txt"), 0o000, (err) => {
  if (err) throw err;
  console.log("The permissions for file 'test_chomd.txt' have been changed!");
});
