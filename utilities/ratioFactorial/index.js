const ratioOfTwoNumbers = require("../ratio/index");
const factorial = require("../factorial/index");
const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = ratioOfTwoNumbers(num1, num2);
  const factorialOfNumber = factorial(num3);
  return {
    ratio: ratio,
    factorial: factorialOfNumber,
  };
};
module.exports = ratioAndFactorial;
