function average(arr) {
  let len = arr.length;
  let total = 0;
  arr.forEach(function(element) {
    total += element
  })
  let avg = total / len;
  return avg
}

console.log(average([1,1,1]))
console.log(average([1,40,3]))

let test = 1;

function blah() {
  let test = 4;
  console.log(test);
}

var a;
a = 'hello'
for (var index = 0; index < 5; index += 1) {
  a = index
}
