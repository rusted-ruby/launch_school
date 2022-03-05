//function should return true if the string you pass in is a palindrome. for this one, only
//consider alphanumeric chars. also, case does not matter. 

// so just make the string lowercase... how to handle the alphanumeric part? Have a constant
//with the approved chars in it. create a sanitized string made up of only chars in the 
//constant, then palindrome that.

const alphaNums = 'qwertyuiopasdfghjklzxcvbnm1234567890'

function isRealPalindrome(str) {
  let dcStr = str.toLowerCase()
  let sanitizedArr = []

  //create an array of only alphanumeric chars
  for (let i = 0; i < dcStr.length; i += 1 ){
    char = dcStr[i];
    if (alphaNums.includes(char)) {
      sanitizedArr.push(char)
    }
  }

  //turn the alphanumeric array to a string and see if its a palindrome.
  let sanitizedStr = sanitizedArr.join('')
  //console.log(isPalindrome(sanitizedStr));
  return isPalindrome(sanitizedStr)
}

function isPalindrome(str) {
  let revStr = str.split('').reverse().join('')
  console.log(revStr === str);
  return revStr === str
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false