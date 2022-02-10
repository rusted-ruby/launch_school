//function should determine the utf 16 string value of a string you pass in as an argument.
//the utf 16 string is the sum of the utf16 values of each char in the string
//String.prototype.charCodeAt() is the best way to get the utf 16 char value

function utf16Value(str) {
  let sum = 0;
 for (let i = 0; i < str.length; i += 1 ){
   let char = str[i];
   sum += char.charCodeAt();
 }
 console.log(sum)
 return sum
}

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811