const calculator = {
  add: function (a, b) {
    const num1 = Number(a);
    const num2 = Number(b)
    return num1 + num2;
  },

  subtract: function (a, b) {
    return a - b;
  },

  divide: function (a, b) {
    return a / b;
  },

  multiply: function (a, b) {
    return a * b;
  }
}
export default calculator;
