// process.stdin.on("data", function (chunk) {
//   process.stdout.write(chunk.toString().toUpperCase());
// });
import { Transform } from "stream";

class MyTransform extends Transform {
  _transform(chunk, encoding, callback) {
    chunk = chunk.toString().toUpperCase();
    this.push(chunk);
    callback();
  }
}
process.stdin.pipe(new MyTransform()).pipe(process.stdout);
