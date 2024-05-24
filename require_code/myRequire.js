const fs = require("fs");
const path = require("path");
const vm = require("vm");

function stripBOM(text) {
  // 检查文本是否以 BOM 开头
  if (text.charCodeAt(0) === 0xfeff) {
    // 如果是，返回去除 BOM 后的文本
    return text.slice(1);
  }
  // 如果不是 BOM 开头，则直接返回原始文本
  return text;
}

function Module(id) {
  this.id = id;
  this.exports = {}; // 核心的 ，每个模块的导出结果都在这里
}

Module._cache = {};

Module._extensions = {
  ".js": function (module, filename) {
    const content = fs.readFileSync(filename, "utf8");
    module._compile(content, filename);
  },
  ".json": function (module, filename) {
    const content = fs.readFileSync(filename, "utf8");
    module.exports = content;
  },
};

Module.prototype.require = function (id) {
  return Module._load(id);
};
Module._load = function (id) {
  const filename = Module._resolveFilename(id);
  const cachedModule = Module._cache[filename];
  if (cachedModule) return cachedModule.exports;
  const module = new Module(filename);
  Module._cache[filename] = module;
  module.load(filename);
  return module.exports;
};
Module.prototype.load = function (filename) {
  const extension = path.extname(filename);
  Module._extensions[extension](this, filename);
};
Module.prototype._compile = function (content, filename) {
  const wrapperFn = wrapSafe(content);
  const dirname = path.dirname(filename);
  const require = myRequire;
  const exports = this.exports;
  const thisValue = exports;
  const module = this;
  Reflect.apply(wrapperFn, thisValue, [exports, require, module, filename, dirname]);
};
Module._resolveFilename = function (id) {
  const filename = path.resolve(__dirname, id);
  if (fs.existsSync(filename)) return filename;
  let exts = Reflect.ownKeys(Module._extensions);
  for (let i = 0; i < exts.length; i++) {
    const filename = path.resolve(__dirname, id + exts[i]);
    if (fs.existsSync(filename)) return filename;
  }
  throw new Error("module not found");
};

function wrapSafe(content) {
  let wrapperFn = vm.compileFunction(content, ["exports", "require", "module", "__filename", "__dirname"]);
  return wrapperFn;
}

function myRequire(id) {
  const module = new Module(id);
  return module.require(id);
}

const valueJSON = myRequire("./test.json");
console.log(valueJSON);

const valueJS = myRequire("./test.js");
console.log(valueJS);
