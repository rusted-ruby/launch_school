//function should take one argument and log all multiples of the argument between 0 and 100
//that are also odd. log the values in decending order. 

function logMultiples(num) {
  for (let i = 100; i >= 0; i--) {
    if (i % num === 0 && i % 2 != 0 ){
      console.log(i)
    }
  }
  console.log('')
}

logMultiples(17)
logMultiples(21)
logMultiples(3)