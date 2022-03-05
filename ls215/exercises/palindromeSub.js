/*
write a function that returns all substrings of a string that are palindromes
each substr must have the same chars forwards as backwards. 
substrings should be sorted by orrder of appearance. duplicates should be included multiple times

you can use the substrings function from the previous exercise. 
Note that case matters here, as do non, letter characters.

it looks like the best way to do this will be something really similar to what we did in the 
past: pass it to the substring function to return an array of ALL substrings. Then filter on
the resultant substring array to only return the substrings that are palindromes. 

to do that, convert the substring to an array of chars, reverse it and join it into a new string
then compare the original substring to the old one. 
*/
"use strict"

function leadingSubstrings(str) {
  let strArr = str.split('');
  let sliceIndex = 1;
  let substrArr = strArr.map((element, i, array) => {
    let subStr = array.slice(0, sliceIndex).join('');
    sliceIndex += 1;
    return subStr
  })
  return substrArr
}

function substrings(str) {
  let resultArr = []
  for (let i = 0; i < str.length; i += 1) {
    let strSlice = str.slice(i);
    let subStrArr = leadingSubstrings(strSlice);
    resultArr = resultArr.concat(subStrArr);
  }
  return resultArr
}

function isPalindrome(str){
  if (str.length <= 1 ) {
    return false
  }
  let reverse = str.split('').reverse().join('');
  return str === reverse
}

function palindromes(str) {
  let substrArr = substrings(str);
  let palindromeArr = substrArr.filter((substr) => {
    return isPalindrome(substr)
  })
  console.log(palindromeArr)
  return palindromeArr
}

//test cases
palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
/*
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]
*/

palindromes('knitting cassettes');
// returns
/*
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
*/

