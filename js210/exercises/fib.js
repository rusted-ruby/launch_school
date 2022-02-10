//calculate and return the index of the first fib number that has the number of digits specified
//by the argument. We'll need to use BigInt numbers, denoted by an 'n' after the numbers in
//order to do this effectively.

//the fib sequence is the textbook example of something you can get via recursion... so we'll
//need to do two things here. 
  //create a while loop that iterates until we've found a fib number whose length is the input.
  //create a function to compute fib numbers until we've found one we need. 

function getNthFibNumber(n) {
  if (n === 2 || n === 1) {
    return 1
  } else {
    return (getNthFibNumber(n - 1) + getNthFibNumber(n - 2))
  }
}

function findFibonacciIndexByLength(digits) {
  let n = 1;
  while (true) {
    let nthFib = getNthFibNumber(n);
    if (BigInt(String(nthFib).length) === digits) {
      console.log(`the ${n}th fib number, ${nthFib} is the first with ${digits} digits`)
      return n
    }
    n += 1
  }
}


//findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
//findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
//findFibonacciIndexByLength(10n) === 45n;
//findFibonacciIndexByLength(16n) === 74n;
//findFibonacciIndexByLength(100n) === 476n;
//findFibonacciIndexByLength(1000n) === 4782n;
//findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.

//this works, but it takes FOREVER to run. The 4th example takes over two minutes to run. Let's
//see if Ls's solution is more efficient.

function findFibonacciIndexByLength2(len) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fib;
  do {
    fib = first + second;
    count += 1n;
    first = second;
    second = fib;
  } while (String(fib).length < len);
  console.log(`the ${count}th fib number, ${fib} is the first with ${len} digits`)
  return count
}

findFibonacciIndexByLength2(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength2(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength2(10n) === 45n;
findFibonacciIndexByLength2(16n) === 74n;
findFibonacciIndexByLength2(100n) === 476n;
findFibonacciIndexByLength2(1000n) === 4782n;
findFibonacciIndexByLength2(10000n) === 47847n;

//yeah, theirs is SIGNIFICANTLY faster than mine. 