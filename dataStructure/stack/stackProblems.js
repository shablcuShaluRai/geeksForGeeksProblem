// convert decimal to binary

const Stack = require("./stack");
// conversion decimal to binary
function decimalToBinary(decNumber) {
  const remStack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = "";
  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }
  return binaryString;
}

console.log("decimal to binary conversion", decimalToBinary(13));

// conversion decimal to any base

function getConversion(decVal, base) {
  let num = decVal;
  let conversionStr = "";
  const remStack = new Stack();
  let rem;
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (!(base >= 2 && base <= 36)) return "";
  while (num > 0) {
    rem = Math.floor(num % base);
    remStack.push(rem);
    num = Math.floor(num / base);
  }
  while (!remStack.isEmpty()) {
    conversionStr += digits[remStack.pop()];
  }
  return conversionStr;
}

console.log("binary", getConversion(10, 2));
console.log("octal", getConversion(10, 8));
