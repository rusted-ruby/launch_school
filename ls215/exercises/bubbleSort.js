/*
implement a bubble sort algorithm.
make multiple passes through an array and compare two consecutive elements. if the first
value is greater than the second, then the two elements are swapped

we continue to iterate through the array until we make it all the way through without making
a swap. then we return the sorted array, 

the function should mutate the array. assume the array always has 2 or more elements

input is an array. output is a sorted array. 
  iterate through our array. start at 0, end at array.length - 2
  get an element at i and an element at i + 1
  check to see if element i is less than element i + 1
    if it is, all good!
    if it isn't, swap element 1 and element 2. quit the loop and do it again. 

  wrap all of this within a while loop. if we make it through the for loop without swapping,
  then we leave the for loop with the condition that breaks the while loop
  otherwise, we keep the while loop going.

What did LS do?
  pretty similar to what I did, just with different syntax. 
*/

function bubbleSort(arr) {
  let sortingIsIncomplete = true;
  while (sortingIsIncomplete) {
    for (let i = 0; i <= arr.length - 2; i += 1) {
      sortingIsIncomplete = false;
      let ele1 = arr[i];
      let ele2 = arr[i + 1];
      if (ele1 > ele2) {
        [arr[i], arr[i + 1]] = [ele2, ele1];
        sortingIsIncomplete = true;
        break
      }
    };
  }
  console.log(arr)
}
const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
