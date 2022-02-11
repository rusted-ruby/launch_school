function combiner(arr) {
  let str = ''
  for (let i = 0; i < arr.length; i += 1) {
    str += String(arr[i]);
  }
  console.log(str);
  return str
}

combiner([1, 'a', 4])
combiner([1,5,2])
combiner( ['what',' ', 'the', ' ', 'h', 3, 'l', 1 ])