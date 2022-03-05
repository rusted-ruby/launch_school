//function should take a string argument and return a list of substrings of that string
//each substring should begin with the first letter of the word. 
//how to do this? turn the word into an array of chars. map it. in the callback, take a 
//slice of the array and join the slice together. then change the slice indicies. Make it so
//the first one is a single char, then it goes up to two, then it ends in the last one.
//slice index always starts at array index zero, but the length changes. starts at 1, and 
//increments with each iteration of map

function leadingSubstrings(str) {
  let strArr = str.split('');
  let sliceIndex = 1;
  let substrArr = strArr.map((element, i, array) => {
    let subStr = array.slice(0, sliceIndex).join('');
    sliceIndex += 1;
    return subStr
  })
  console.log(substrArr)
  return substrArr
}


leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

//what did LS do? They just did a normal for loop, since you don't need to convert the string
//into an array to use the list processing functions that way. 