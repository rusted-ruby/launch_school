//function for goldbach's conjecture: log every pair of primes that sums to the number supplied
//to the function. 

function isPrime(num) {
  if (num === 1 || num ===0 ) {
    return false
  }
  let result = true;
  for (let i = Math.round(num / 2); i > 1; i -= 1) {
    let check = (num % i === 0)
    if (check) {
      result = false;
      break
    }
  }
  return result
}

function goldbach(expectedSum) {
  if (expectedSum % 2 != 0 || expectedSum < 4) {
    return null
  }
  //first, get all prime numbers between 1 and expectedSum. store them in an array
  let primeArray = []
  for (let i = 1; i <= expectedSum; i++ ) {
    if (isPrime(i)) {
      primeArray.push(i);
    }
  }
  debugger;
  //iterate through the prime array... try each possible combination of two prime numbers that 
  //to add together. If one of them sums to the expected sum, save it. 
  let loggedNums = [];
  for (let i = 0; i < primeArray.length ; i++ ) {
    for (let j = 0; j < primeArray.length; j++) {
      if (primeArray[i] + primeArray[j] === expectedSum) {
        if (!loggedNums.includes(primeArray[i])) {
          console.log(primeArray[i],' ', primeArray[j]);
          loggedNums.push(primeArray[i])
          loggedNums.push(primeArray[j])
        }
      }
    }
  }
}
//goldbach(3);
//goldbach(4);
//goldbach(12);
//goldbach(100);
goldbach(4000)

//this one gave me some trouble: what did LS do?
//they only used one loop, and took advantage of the fact that the second number in a pair
//is equal to the expectedSum - the first number. Then they check both numbers to see if 
//they're prime, and quit when we're at the halfway point (aka, when num1 and num2 are equal)

function lsGoldbach(expectedSum) {
  if (expectedSum % 2 != 0 || expectedSum < 4) {
    return null
  }
  let num1 = 1;
  let num2
  do {
    num1 += 1;
    num2 = expectedSum - num1;
    if (isPrime(num1) && isPrime(num2)) {
      console.log(num1, num2)
    }

  } while (num1 !== num2);
}