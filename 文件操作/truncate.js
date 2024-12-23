import { truncate } from "node:fs";

truncate("example.txt", (err) => {
  if (err) throw err;
  console.log("example.txt was truncated");
});
