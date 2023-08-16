let name = "fk";
let age = 22;
let sayHello = () => {
  console.log("hello", name);
};

let person = {
  name,
  age,
  sayHello,
};
export default person;
export { name, age, sayHello };
