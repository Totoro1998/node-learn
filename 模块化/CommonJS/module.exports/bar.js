let name = "bar";

let person = {
  name: "fk",
  age: 22,
};

let colorList = ["res", "yellow"];

// module.exports.name = name;
// module.exports.person = person;
// module.exports.colorList = colorList;

// setTimeout(() => {
//   module.exports.name = "bar2";
//   exports.name = "bar1";
// }, 1000);

module.exports = {
  name,
  person,
  colorList,
};
setTimeout(() => {
  exports.name = "bar1";
  module.exports.name = "bar2";
}, 1000);
