let name = "bar";

let person = {
  name: "fk",
  age: 22,
};

let colorList = ["res", "yellow"];

exports.name = name;
exports.person = person;
exports.colorList = colorList;

setTimeout(() => {
  name = "bar2";
  exports.name = "bar3";
  person.name = "fk2";
  colorList[0] = "black";
}, 1000);

// setTimeout(() => {
//   console.log("------exports------");
//   console.log(exports);
//   console.log("------name------");
//   console.log(name); // bar
//   console.log("------person------");
//   console.log(person); // { name: 'fk1', age: 22 }
//   console.log("------colorList------");
//   console.log(colorList);
// }, 500);
