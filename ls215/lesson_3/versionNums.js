/*
function should take two version numbers and compare them 
v1 > v2, we return 1
v1 < v2 we return -1
v1 === v2 we return 0
if either version has chars besides digits and dots, return null.

assume the inputs are strings: we can't pass in numerics with multiple decimal places

Problems to solve:
  how to handle invalid inputs
  how to decide which version is larger

handling invalid inputs is easy: we can use a regex to find any chars that are invalid.

handling larger versions is a little harder...
since the inputs are strings, easiest way seems to be to break the strings up into individual
version digits... that's easy to do with String.split('.')
the problem will be 1.2 === 1.2.0.0, but that problem is solved if each of the arrays
has an equal length.

here's one way to do it.
  split each string into an array of numeric strings
  find the shorter array. append '0' strings to the end of it until its length is the same as the longer one
  iterate through the arrays. check each element until one element is not equal. then decide what to retun
    a for loop here is better, since we might quit early. 

How to handle all edge cases for invalid inputs?
  have one regex for invalid chars and one for invalid format
*/

//mutates the array passed in by pushing '0' to it until it reaches the length passed in
function extendArray(arr, desiredLength) {
  for (let i = arr.length; i < desiredLength; i += 1) {
    arr.push('0');
  }
}

//returns boolean true if either input is invalid
function inputsAreNotValid(v1,v2) {
  //one of the inputs contains invalid chars
  let validCharRegex = /[^0-9.]/;
  if (!!v1.match(validCharRegex) || !!v2.match(validCharRegex)) {
    return true
  }

  //one of the inputs has an invalid format. 
  //inputs with an invalid format will have '' in their array if we split them
  let arr1 = v1.split('.');
  let arr2 = v2.split('.');
  if (arr1.indexOf('') !== -1 || arr2.indexOf('') !== -1) {
    return true
  }
  return false
}

function compareVersions(v1, v2) {
  //validate inputs
  if (inputsAreNotValid(v1,v2)) {
    console.log(null)
    return null
  }

  //split input strings into arrays
  let arr1 = v1.split('.');
  let arr2 = v2.split('.');
  
  //extend the shorter array
  if (arr1.length < arr2.length) {
    extendArray(arr1, arr2.length)
  } else if (arr2.length < arr1.length) {
    extendArray(arr2, arr1.length)
  }

  //iterate through the arrays. compare elements to see if there are any that are not equal
  //don't forget to convert to numbers.
  let result = 0;
  for (let i = 0; i < arr1.length; i += 1) {
    let ele1 = Number(arr1[i]);
    let ele2 = Number(arr2[i]);
    if (ele1 < ele2) {
      result = -1;
      break
    } else if (ele1 > ele2) {
      result = 1;
      break
    }
  }
  console.log(result);
  return result
}



//test cases

compareVersions('0.1', '1') //-1
compareVersions('1', '1.0') //0
compareVersions('1.1', '1.2') //-1
compareVersions('1.2', '1.2.0.0') //0
compareVersions('1.2.0.0', '1.18.2') // -1
compareVersions('1.18.2', '13.37') //-1
compareVersions('13.37', '1.18123.3') //1
compareVersions('sft.12', '1.1') //null
compareVersions('.12.0', '1.3.4') //null => missed this first time around
compareVersions('1.2.4', '1.2.4.') //null => missed this first time around
compareVersions('1.2..3', '1.2.0.3') //null => missed this first time around

/*
nice! now what did LS do?

Let's look at the parts of this that I missed out on
=> edge cases I don't account for invalid version nums like '.12.0', '1.2.' or '1.2..3'
=> our code does all the same things, but theirs is slicker. for example, they use map
    to change all the string number values to actual numbers. They also assign elements
    in the loop like ele1 = arr[i] || 0, which is cool. this makes it so that if an array
    runs out of length and starts returning undefined, its automatically switched to a zero.

they also use regex for both kinds of invalid chars
/^[0-9]+(\.[0-9]+)*$/
this means
  string should start with at least 1 0-9 char
  then there can be any numbre of . then 0-9 chars after that until the line end
*/