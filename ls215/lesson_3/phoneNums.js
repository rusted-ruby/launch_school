/*
program should clean up user entered phone numbers. 
numbers can have digits and special chars (dash, dot and paren) that should be ignored

there are rules to numbers
  if there's less than 10 digits, the number is bad
  if there's 10 digits, assume its good.
  if there's 11 digits and the first digit is 1, trim the 1 and use the last 10
    if the first digit of an 11 digit number isn't one, its bad
  over 11 digits means its a bad number

if there's a bad number, return a string of ten zeros. 

so: input is a user entered string that can contain digits and any number of special chars
output is a ten digit string made up of numbers... assume its a string rather than nums

There are two problems to solve here
  remove any non-digit chars from the input string
    could do this with a regex and String.match. Then join the array
  determine if what is left is a good number or not. 
    this could be done with an if statement
    if length == 10, return good
    if length < 10 || 11 < length, return bad
    if length == 11, use the 11 logic to decide what to return.
      if first element is 1, return the last 10 digits
      if not, return bad 

other edge cases: 
  what if the number contains other values that are NOT the special chars 
  we've outlined above. For example, should' 123-456-ase7891' return a valid number?
  Assume we don't need to handle that. 

What did LS do / What did I miss?
  Could also make the if statements a little more efficient, but that's it. 

*/

function cleanNum(input) {
  let badNum = '0000000000';

  //clean the input so it only has digits
  let regex = /[0-9]/g
  let inputDigits = input.match(regex).join('')
  let len = inputDigits.length

  //determine if the number is good or not
  if (len === 10 ) {
    console.log(inputDigits);
    return inputDigits
  } else if (len < 10 || 11 < len) {
    console.log(badNum);
    return badNum
  } else if (len === 11) {
    if (inputDigits[0] === '1') {
      console.log(inputDigits.slice(1))
      return inputDigits.slice(1)
    } else {
      console.log(badNum);
      return badNum
    }
  }
}


//test cases
cleanNum('1234567891') //1234567891
cleanNum('123-456-7891') //1234567891
cleanNum('(123)-456-7891') //1234567891
cleanNum('123.456.7891') //1234567891
cleanNum('(123).456.7891') //1234567891
cleanNum('1-123-456-7891') //1234567891 => wrong
cleanNum('2-123-456-7891') //0000000000
cleanNum('123-134-123') //0000000000
cleanNum('12-123-456-7891') //0000000000
cleanNum('12-345-678123') //2345678123 => wrong
cleanNum('12-345-67813-23') //0000000000
