function pop(arr) {
  let val = arr[arr.length - 1]
  arr.length = arr.length - 1
  return val
}

array = [1,2,3,4,5]
pop(array)
console.log(array)