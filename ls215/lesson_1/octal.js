//perfoem octal (base 8) to decimal (base 10) conversion. return a decimal number when we
//invoke the function on a string of an octal number.
//hmmm, what's a way we can do this?
  //split the string into an array of chars
  //iterate over the array of chars
  //convert each char to a number. convert it from octal to decimal representation
  //for each digit, its the digit times 8 to the power of that digits. so for the second example
  //do 1 * 8^1 + 0 * 8^0 to get 8.
  //how do we do this?
    //the power starts at array.length - 1 and is decremented with each iteration. 
    //this looks like a job for reduce... we'll just need to make sure that the power
    //is decremented with each iteration
    //Math.pow(7,3) is 7 ^ 3
  //

function octalToDecimal(numberString) {
  let charArr = numberString.split('');
  let power = charArr.length - 1;
  let octal = charArr.reduce((accumulator, element) => {
    let num = Number(element)
    let octalBase = num * Math.pow(8, power)
    power -= 1;
    return accumulator += octalBase
  }, 0)
  console.log(octal)
  return octal
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9