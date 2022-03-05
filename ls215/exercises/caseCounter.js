/*
function takes a string and returns an object with three properties: count of lowercase
letters, count of uppercase letters, and count of letters that are neither. 

first, create the object. init all the keys to zero.
split the string into an array of chars and iterate with forEach.
  if char is not a letter, increment either
  if char 

what did LS do?
Rather than iterate through the chars, they used a series of match methods with the same regex
I got. Its pretty cool actually, i'll have it below my code. 
*/
"use strict"
function letterCaseCount(str) {
  let obj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };
  let alphabetRegex = /[a-zA-Z]/;
  let upperRegex = /[A-Z]/;
  let lowerRegex = /[a-z]/;
  str.split('').forEach((char) => {
    if (!alphabetRegex.test(char)) {
      obj.neither += 1;
    } else if (upperRegex.test(char)) {
      obj.uppercase += 1
    } else if (lowerRegex.test(char)) {
      obj.lowercase += 1
    }
  })
  console.log(obj)
  return obj
}

//test cases
letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

function letterCaseCount(string) {
  const lowerArr = string.match(/[a-z]/g) || [];
  const upperArr = string.match(/[A-Z]/g) || [];
  const neitherArr = string.match(/[^a-z]/gi) || [];
  return {
    lowercase: lowerArr.length,
    uppercase: upperArr.length,
    neither: neitherArr.length,
  }
  
}