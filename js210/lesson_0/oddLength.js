function oddLengths(arr) {
  return arr.reduce(function(acc, ele) {
    if ((ele.length % 2) == 1) {
      acc.push(ele.length)
      return acc
    } else {
      return acc
    }
  },[])
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]