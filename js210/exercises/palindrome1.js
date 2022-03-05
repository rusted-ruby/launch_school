//function should return true if the string you pass in is a palindrome. case and chars matter
// easy

function isPalindrome(str) {
  let revStr = str.split('').reverse().join('')
  console.log(revStr === str);
  return revStr === str
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true