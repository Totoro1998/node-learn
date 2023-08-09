let { name, person, colorList } = require("./bar");
let bar = require("./bar");

setTimeout(() => {
  console.log("------name------");
  console.log(name); // bar
  console.log(bar.name); // ba3

  console.log("------person.name------");
  console.log(person.name); // fk2

  console.log("------colorList[0------");
  console.log(colorList[0]); // black
}, 2000);

// name = "bar1"; // 原始类型不会改变
// person.name = "fk1"; // 引用类型会改变
// colorList[0] = "white"; // 引用类型会改变
