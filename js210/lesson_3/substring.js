//write two string based functions
//index of searches for the first instance of a substring in param1 that matches param2. 
//it returns the index of the first char of that substring

//last index of searches for the last instance of the substring and returns its index.

//both fns return -1 if the substring is not found

//start one loop that iterates from string1 index 0 to string1.length() - string2.length
//in each string index, take the first strings first index and create a substring of 
//length string2.length. If it matches string 2, then return that index. In the index of,
//break the loop after we find one match. In last index of, let the loop go through completion

function indexOf(firstString, secondString) {
  debugger;
  let result = -1;
  for (i = 0; i <= (firstString.length - secondString.length); i ++) {
    let substr = ''
    for (j = 0; j < secondString.length; j ++) {
      substr += firstString[i + j]
    }
    if (substr == secondString) {
      result = i;
      break
    }
  }
  console.log(result);
  return result
}

function lastIndexOf(firstString, secondString) {
  let result = -1;
  for (i = 0; i <= (firstString.length - secondString.length); i ++) {
    let substr = ''
    for (j = 0; j < secondString.length; j ++) {
      substr += firstString[i + j]
    }
    if (substr == secondString) {
      result = i;
    }
  }
  console.log(result);
  return result
}

console.log('index of');
indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1

console.log('');
console.log('last index of');
lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1

//these work nicely. But what did LS do? 
//they did basically the same thing. Except they checked that each individual element in the 
//substring matched the original string. Then if the number of matches was the same as the 
//second string length, they return the first index.

//you can also use two built in js functions for this: indexOf and lastIndexOf.