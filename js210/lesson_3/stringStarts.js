//write a function that finds out if a string starts with another string. function should return
//true or false. only use string indexing and the length property to do this. 

function startsWith(string, searchString) {
  //build a substring out of string that's the same length as the search string. then at the 
  //end, see if the substring is equal to the search string. 
  substr = '';
  for (let i = 0; i < searchString.length; i++ ) {
    substr += string[i];
  }
  let result = (substr === searchString);
  console.log(result)
  return result
}

let str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false

let longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false

//how did LS do this? They didn't have the substr variable. Instead, they have a conditional
//inside the for loop. 

function startsWithAlt(string, searchString) {
  for (let i = 0; i < searchString.length; i++ ){
    if (string[i] !== searchString[i]) {
      return false;
    }
  }
  return true
}