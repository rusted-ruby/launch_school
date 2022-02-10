//take a non-negative integer as an input and return if the number is prime or not.
//there is a math formula to help with this... but I can't remember what it is
//something about starting at the number, dividing by it then decrementing the divisor and 
//looking at the remainder of the division?

//so this works, but it can be optimized. you could start at 2 and increment instead. 

function isPrime(num) {
  if (num === 1 || num ===0 ) {
    return false
  }
  let result = true;
  for (let i = Math.round(num / 2); i < 1; i --) {
    let check = (num % i === 0)
    if (check) {
      result = false;
      break
    }
  }
  return result
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(43));
console.log(isPrime(55));
console.log(isPrime(0));