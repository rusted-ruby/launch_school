function factorial(num) {
  if (num === 1) {
    return num
  } else {
    return num * factorial(num-1)
  }
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(8));