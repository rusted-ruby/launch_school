function unshift(arr, val) {
  let newArr = [val];
  //need to start at the end of the array and fill things in backwards
  for (let i = arr.length; i >= 0; i -= 1 ) {
    arr[i] = arr[i - 1]
  }
  arr[0] = val
  return arr.length
}

array = [1,2,3,4];
unshift(array, 0);
console.log(array);