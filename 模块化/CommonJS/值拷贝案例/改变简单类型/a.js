let val = 1;

setTimeout(() => {
  val = 101;
}, 100);

module.exports = {
  val,
};
