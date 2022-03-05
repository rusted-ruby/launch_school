function myOwnEvery(array, func) {
  //note, a for loop would be better here. forEach will ALWAYS iterate over every 
  for (let i = 0; i < array.length; i += 1 ) {
    if (!func(array[i], i, array)) {
      return false
    }
  }
  return true
}

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true
console.log(myOwnEvery(['a', 1, '1abc'], isAString)); //false