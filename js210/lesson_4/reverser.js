function reverser(arr) {
  result = []
  for (i = (arr.length - 1); i >= 0; i -= 1 ) {
    result.push(arr[i]);
  }
  console.log(result)
  return result
}

reverser([1,2,3,4]);
reverser([5,6,7,8]);