/*
assume the array always contains one number.
return the sum of sums of each subsequence of an array

will need two loops here.
one to iterate array.length times.
  within that loop, take a slice of the input array starting at index zero. first iteration
  should have a length of 1, second should have a length of 2, etc
  then have an inner loop that loops array.length times. takes each element of the slice and adds it to 
  the current sum

reduce is a good contender for the inner loop, since we're summing over all elements... but I 
think a for loop makes more sense for the outer loop because we're not really doing anything 
with any of the array's elements there... makes more sense to just use a for loop

assume I don't need to handle any of the odd things about an array, ie, sparse arrays, undefined
arrays, etc. 
*/

function sumOfSums(arr) {
  let sum = 0;
  let sliceLength = 1;
  for (let i = 0; i < arr.length; i += 1) {
    let sliceArr = arr.slice(0, sliceLength);
    sum = sliceArr.reduce((previousVal, currentVal) => {
      return previousVal += currentVal
    }, sum)
    sliceLength += 1
  }
  console.log(sum)
  return sum
}
//test cases
sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35