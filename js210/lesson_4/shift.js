//remove the first element from the array and return it
function shift(arr) {
  let val = arr[0]
  for (i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i + 1]
  }
  arr.length = arr.length - 1
  return val
}

let array = [1,2,3,4,5]
shift(array)
console.log(array)