//this one will be tricky... if initial is present, start at element 0. else, set initial to
//element 0 and start at element 1. 

//two problems to solve: how to determine if initial is passed in or not (as opposed to passing
//in undefined purposely)... maybe just set the default value to array[0]?
//how to actually implement this
//so it looks like this gets us most of the way there... we can slice the array before we
//call forEach on it to shorten it too... so that if initial isn't passed in, we shorten the 
//array by one so that we cycle through the accumulator one less time. 

function myReduce(array, func, initial) {
  let accumulator;
  let index;
  if (initial === undefined) {
    accumulator = array[0];
    index = 1;
  } else {
    accumulator = initial;
    index = 0;
  }
  array.slice(index).forEach((element, index, arr) => {
    accumulator = func(accumulator, element, index, arr)
  })
  return accumulator
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], sum));           // 39
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49