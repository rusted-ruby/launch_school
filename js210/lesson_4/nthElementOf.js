//write a function that returns the element of an array given an index

function nthElementOf(arr, n) {
  console.log(arr[n])
  return arr[n]
}

let digits = [4, 8, 15, 16, 23, 42];
nthElementOf(digits, 3);   // returns 16
nthElementOf(digits, 8);   // what does this return?
nthElementOf(digits, -1);  // what does this return?