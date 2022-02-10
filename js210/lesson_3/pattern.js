//take a number as an argument and log a square of numbers and stars to the console.

function generatePattern(nStars){
  //have a var for num of nums and a var for num of stars
  //start num of stars at nStars - 1. start num of nums at nStars - num of stars
  //have a number variable to store the current number we're on.
  //have a string variable to store the current num. So at first its '1', then its '12', etc.
  //have a for loop that iterates nStars times.
    //log the number string variable and a '*' * num of stars to the console.
      //hmmm, that won't work b/c * isn't implemented for strings. could have a nested loop that adds that
    //decrement number of stars
    //add one to the number varaible
    //tack the new number variable to the number string variable
  let numOfStars = nStars - 1;
  //build initial star string
  let starStr = '*'
  for (i = 1; i < numOfStars; i++ ) {
    starStr += '*'
  }
  let nextNum = 1
  let strNum = String(nextNum)
  for  ( ; nextNum <= nStars;  ) {
    console.log(strNum + starStr);
    numOfStars -= 1;
    nextNum += 1;
    strNum += String(nextNum)
    starStr = starStr.slice(0,numOfStars);
  }
}

generatePattern(7);

generatePattern(9);

//how did LS do it?
//they had one loop with two nested loops: one to build the numeric string, and one
//to build the star string. 

function generatePatternAlt(nStars){
  for (let lineNum = 1; lineNum <= nStars; lineNum += 1) {
    let string = ''

    //build the numeric portion
    for (let digitNum = 1; digitNum <= lineNum; digitNum += 1 ) {
      string += String(digitNum)
    }

    //build the star portion
    for (let starNum = nStars; starNum > lineNum; starNum -= 1){
      string += '*'
    }

    console.log(string)
  }
}

generatePatternAlt(7)
generatePatternAlt(9)