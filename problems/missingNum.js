// A list contains first n natural numbers with one missing number. Find the missing number in the list.
// e.g. for n = 10, numbers = [1,2,3,4,5,6,7,9,10], missing no: 8.

const arr = [1, 2, 3, 4, 5, 6, 7, 9, 10];
function getSum(n) {
  return (n * (n + 1)) / 2;
}

const arrayResult = arr.reduce((acc, cum) => acc + cum, 0);
const result = getSum(10);
let missingNum = result - arrayResult;
console.log(missingNum);
