/*
calculate the nth fib number procedurally instead of using recursion.

How would this work? do a loop that iterates n times. start by adding the first two fib nums
together, then add the sum
let's say n is 5
start at i = 2. get the 3rd fib number
i = 3. get the 4th fib number
i = 4. get the 5th fib number
i = 5. break the loop

What did LS do? same as me, they just used destructuring for reassignment
so theirs was 
previousTwo = [1, 1]
previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]]
*/

function fibonacci(n) {
  let fibLeft = 1;
  let fibRight = 1;
  let fibSum = 0
  for (i = 2; i < n; i += 1) {
    fibSum = fibLeft + fibRight;
    fibLeft = fibRight;
    fibRight = fibSum;
  }
  console.log(fibSum)
  return fibSum
}

fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050