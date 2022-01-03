/*
Write a function fib(n) that takes in a number as an argument. 
The function should return the n-th number of the Fibonacci sequence.

The 0th number of the sequence is 0.
The 1sth number of the sequence is 1.

To generate the next number of the sequence, we sum the previous two.
*/

const fib = (n) => {
  const result = Array(n + 1).fill(0);
  result[1] = 1;
  for (let i = 0; i <= n; i++) {
    result[i + 1] += result[i];
    result[i + 2] += result[i];
  }

  return result[n];
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));