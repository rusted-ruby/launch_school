/*
refactor the recursive fib function to use memoization.
this means that rather than recompute a value we need, we can save it and retrieve it
so when we compute the 3rd fib number, we can save it and retrieve it for later use. 

so getting fibonacci(n-1) should have the side effect of populating a data structure we 
can use to obtain fibonacci(n-2) rather than just calling it itself.

how can we do that though? when we call fib(n-1), that relies on using fib(n-2)...

well, imagine we don't have that ability anymore...
  have a data struct that's empty except for the first two fib numbers. an object where
  fib = {
    1: 1,
    2: 1,
    3: 2,
    4: 3,
    5: 5,
    6: 8
  }

data structure starts out with only 1 and 2 populated. whenever we call fib n
check to see if obj[n] is populated.
  if it is, return it
  if it isn't, call fib[n-1] to obtain it
  keep going until we have an obj[n].
    calculate obj[n] + obj{n-1}. save it to the n + 1 place in the fib object
    return the sum.

ended up quitting on this one. turns out, the solution DOES use fibonacci(n-2) I'd thought 
we couldn't use that.

the solution is still better than the last one though, since we call fibonacci(n-2) less times
than the normal recursive solution. 
*/
const fibObj = {};

function fibonacci(n) {
 if (n <= 2) {
   return 1
 } else {
   if (fibObj[n]) {
     return fibObj[n]
   } else {
     fibObj[n] = fibonacci(n-1) + fibonacci(n - 2)
     return fibObj[n]
   }
 }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(6));       // 8
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(50));      