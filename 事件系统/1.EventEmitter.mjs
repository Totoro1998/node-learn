import { EventEmitter } from "node:events";

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

function handleRunEvent() {
  console.log("handleRunEvent occurred!");
}

function handleInitEvent() {
  console.log("handleInitEvent occurred!");
}

myEmitter.on("run", handleRunEvent);
myEmitter.once("init", handleInitEvent);
// myEmitter.off("run", handleRunEvent);

myEmitter.emit("run");
myEmitter.emit("run");

myEmitter.emit("init");
myEmitter.emit("init");
