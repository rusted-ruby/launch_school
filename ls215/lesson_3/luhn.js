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
  console.log(result)
  return result
}

//test cases
luhnCheck('1111') //false
luhnCheck('8763') //true
luhnCheck('2323 2005 7766 3554') //true
luhnCheck('87    asdfasf --- 63') //true

/*
this looks good! Let's take a look at the LS solution to see what I might have missed / if 
my code could be improved. 

Possible improvements off the top of my head
  we really don't need to reverse the array... could handle it a better way. 

Possible missed pieces
  is there something about the "provided check digit" that I need to worry about? 10 is pretty
  important in this solution... is that the way the luhn formula is hard coded, or do we need
  to account for that too? assume not. 

  Could also have just called reduce instead of map. Could have used the code that's in map
  right now to decide what the new value of the sum will be, then add that value to the running
  sum. 
*/