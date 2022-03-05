/*
return a list of all substrings within a string. order the returned list by where the substring
starts, and return the substrings at each position from shortest to longest

use the leadSubstr function from the previous exercise.

This will be pretty easy using the last function!. 

we just need to keep passing slices of our string into our old function. the old function
will return arrays holding all the substrings for each of our string slices. Then we 
combine the arrays together. 

we want a loop that runs string.length times.
  each loop, take a slice of the string and pass it to our previous function
  our old function will return an array. concateate it to our running solution array.

what did LS do?
  looks like they used the substring function... how is that different from slice?
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
  console.log("final result");
  console.log(resultArr);
  return resultArr
}

substrings('abcde');

// returns
/*
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
  */

substrings('zba')
// ['z', 'zb', 'zba', 'b', 'ba', 'a']