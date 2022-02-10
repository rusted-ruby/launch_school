//write a function that returns an input number times two unless its a double number.
//a double number is an even length number whose left side digits are the same as the right
//side: so 334334 and 3333 are double numbers. if you pass a double number, return it as is.

//how to tell if something is a double number? need to split it into two pieces and see
//if the two pieces are equal... we can do that pretty easily if we conver the number
//to a string...

function isDoubleNumber(num) {
  let str = String(num)
  let midPoint = str.length / 2
  let leftSlice = str.slice(0, midPoint);
  let rightSlice = str.slice(midPoint)
  return (leftSlice === rightSlice)
}

function twice(num) {
  if (isDoubleNumber(num)) {
    console.log(num);
    return num
  } else {
    console.log(num * 2);
    return num * 2
  }
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

//what did LS do? Literally the same exact thing I did, lol. 