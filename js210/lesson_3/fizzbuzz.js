//iterate over 1 to 100. for multiples of 3, log fizz. for multiples of 5 log buzz. for multiples
//of both 3 and 5, log fizzbuzz. log all other numbers to the console. 

function fizzbuzz() {
  for(let i = 1; i <= 100; i++ ) {
    let divThree = (i % 3 === 0)
    let divFive = (i % 5 === 0)
    if (divThree && divFive) {
      console.log("FizzBuzz");
    } else if (divThree) {
      console.log("Fizz");
    } else if (divFive) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzbuzz();