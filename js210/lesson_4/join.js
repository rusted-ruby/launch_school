//write a function that coerces array values into strings, then joins them using the 
//second argument as a delimiter.

function join(arr, delim) {
  let newStr = '';
  for (let i = 0; i < arr.length; i += 1) {
    if (i !== arr.length - 1) {
      newStr = newStr + String(arr[i]) + delim;
    } else {
      newStr += String(arr[i]);
    }
  }
  console.log(newStr);
  return newStr
}
join(['bri', 'tru', 'wha'], 'ck ');       // 'brick truck wha'
join([1, 2, 3], ' and ');                 // '1 and 2 and 3'