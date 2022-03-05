/*
write a function that uses recursion to calculate the nth fib number. 

so we make the function call itself. fib(n) = fib(n-1) + fib(n-2)
then we can make the function such that if n = 1 or n = 2, return 1
*/
function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1
  } else {
    return fibonacci(n-1) + fibonacci(n-2)
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(6));       // 8
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(50));      // SLOW