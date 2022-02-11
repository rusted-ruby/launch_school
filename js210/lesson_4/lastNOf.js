//now return the last n digits of an array. Could also have used slice here as well:
//arr.slice(arr.length - count)

function lastNOf(arr, count) {
  let newArr = [];
  for (let i = arr.length - count; i < arr.length; i += 1) {
    newArr.push(arr[i])
  }
  console.log(newArr);
  return newArr
}

let digits = [4, 8, 15, 16, 23, 42];
lastNOf(digits, 3);    // returns [16, 23, 42]
lastNOf(digits, 7);

//how can you fix lastNOf so that it just returns the array as is if the count is greater than
//the array length?
function lastNOf2(arr, count) {
  if (count > arr.length) {
    console.log(arr)
    return arr
  } else {
    let newArr = arr.slice(arr.length - count);
    console.log(newArr);
    return newArr
  }
}

lastNOf2(digits, 3);    // returns [16, 23, 42]
lastNOf2(digits, 7);

//what did LS do? they used the slice method regardless, but set the argument to zero if
//arr.length - count is a negative number.