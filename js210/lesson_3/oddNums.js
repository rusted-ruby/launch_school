//create a function that takes a positive int as an argument and logs all odd numbers 
//from 1 to the passed in number. 

function logOddNumbers(num) {
  for(let i = 1; i <= num; i = i + 2 ) {
    console.log(i)
  }
}

logOddNumbers(1)
logOddNumbers(4)
logOddNumbers(19)