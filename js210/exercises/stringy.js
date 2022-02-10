//take one argument and return a string of alternating 1s and 0s. So the trick here is coming
//up with a slick way to switch between ones and zeros. 
//[printed, placeholder] = [placeholder, printed]

function stringy(len) {
  let printer = '1';
  let placeholder = '0';
  let result = ''
  for (let i = 0; i < len; i += 1 ) {
    result += printer;
    [printer, placeholder] = [placeholder, printer]
  }
  console.log(result)
  return result
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"