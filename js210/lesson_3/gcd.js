//write a function that computes the gcd of two positive ints

function gcd(int1, int2) {
  let divisor = 1;
  let greatestDivisor = divisor
  do {
    if (int1 % divisor === 0 && int2 % divisor === 0 ){
      greatestDivisor = divisor;
    }
    divisor += 1;
  } while (divisor <= int1 && divisor <= int2)
  console.log(greatestDivisor);
  return greatestDivisor
}

gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1

//what did LS do? this is a cool algorithm
function gcdAlt(num1, num2) {
  var temp;
  while (num2!==0) {
    temp = num2;
    console.log("num1 ", num1);
    console.log('num2 ', num2);
    console.log("temp", temp);
    num2 = num1 % num2;
    num1 = temp
  }
  console.log(num1)
  console.log('');
  return num1;
}

gcdAlt(12, 4);   // 4
gcdAlt(15, 10);  // 5
gcdAlt(9, 2);    // 1