// Find the nth fibonacci number using recursion. Use memoization.

// function fibonacci(n) {
//   const memo = [1, 1];
//   const memoFibonacci = (n) => {
//     console.log("memo", memo);
//     if (memo[n] !== undefined) {
//       return memo[n];
//     }
//     memo[n] = memoFibonacci(n - 1) + memoFibonacci(n - 2);
//     return memo[n];
//   };
//   return memoFibonacci(n);
// }

// console.log("fibonacci", fibonacci(10));

function fibonacci(n) {
  const memo = { 0: 1, 1: 1 };
  const memoFibonacci = (n) => {
    console.log("memo", memo);
    if (memo[n] !== undefined) {
      return memo[n];
    }
    memo[n] = memoFibonacci(n - 1) + memoFibonacci(n - 2);
    return memo[n];
  };
  return memoFibonacci(n);
}

console.log("fibonacci", fibonacci(10));
