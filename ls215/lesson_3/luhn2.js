/*
Luhn is a simple checksum formula for validating ID numbers. 
given a number in string format, check to see if its valid per the luhn formula.
ignore all non-numeric chars in the input string

input is a string. output is a boolean

two problems to solve
  ignoreing all non-numeric chars in string (easy with regex)
  determining if the num is a luhn number. to colpute the luhn number, do two things
    first, start at the rightmost digit. double every second digit. if the result is over 10, subtract 9
    once this is done, add each digit together.
  if the sum ends in 0, then the input is a luhn number. 

for the second piece, it looks like an array will be the best bet. then you could do this
  split string into an array of chars
  reverse array to start at the last digit
  map the array to double every other index (and subtract 9 if needed). store numbers, not strings
  call reduce on the mapped array to compute the sum.
  change sum to a char and check its last index to see if its zero. return a bool


NEW REQUIREMENT
write a function that can add a check digit to make a number a valid luhn number if it 
is not one. so "2323 2005 7766 3554" is returned when you put in "2323 2005 7766 355"

assume that if you have a luhn number passed in, you can just return that number.

that actually seems easy. Just use the luhnCheck function on the input. if its true, return it
if not, enter a loop where we append a digit to it, then feed it through.
*/

function luhnCheck(str) {
  //clean input
  let cleaned = str.replace(/[^0-9]/g, '');
  
  //convert input to an array according to luhn specs
  let arr = cleaned.split('').reverse().map((element, index) => {
    if (index % 2 === 1) {
      let result = Number(element) * 2;
      if (result >= 10 ){
        return result - 9
      } else {
        return result
      }
    } else {
      return Number(element)
    }
  });

  //compute our sum
  let numSum = arr.reduce((last, current) => {
    return last + current
  })

  //validate the sum to see if the input is a luhn number. 
  let result = numSum % 10 === 0
  //console.log(result)
  return result
}

function luhnFinder(str) {
  if (luhnCheck(str)) {
    console.log(str)
    return str
  } else {
    for (let i = 0; i < 10; i += 1) {
      let checkStr = str + String(i);
      if (luhnCheck(checkStr)) {
        console.log(checkStr);
        return checkStr
      }
    }
  }
}

//test cases
luhnFinder('1111') //???
luhnFinder('8763') //'8763'
luhnFinder('876') //'8763'
luhnFinder('2323 2005 7766 3554') //2323 2005 7766 3554
luhnFinder('87    asdfasf --- 63') //'87    asdfasf --- 63'
luhnFinder('2323 2005 7766 355') //2323 2005 7766 3554

/*
this looks good! Let's take a look at the LS solution to see what I might have missed / if 
my code could be improved. 

Possible improvements off the top of my head
  we really don't need to reverse the array... could handle it a better way. 

Possible missed pieces
  Maybe you need to try more than the first 9 digits in order to get a luhn number?
  Should also start iteration from 0 instead of 1. that could change the luhn number becase 
  of the indicies that are doubled

  There is a more efficient algorithm rather than looping through 0 to 10. In short, adding
  0 changes the indicies of what's doubled, and you can look at the sum and see what you 
  need to add to make that divisible by ten. Probably could have figured that out by deriving 
  some new test cases yourself first. 
*/