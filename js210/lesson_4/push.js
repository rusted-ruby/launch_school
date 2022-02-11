function push(arr, val) {
  arr[arr.length] = val;
  return arr.length
}

array = [1,2,3,4]
push(array, 5);
console.log(array)