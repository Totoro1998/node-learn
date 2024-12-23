import { copyFile } from "node:fs";

function callback(err) {
  if (err) throw err;
  console.log("source.txt was copied to destination.txt");
}
copyFile("source.txt", "destination.txt", callback);
