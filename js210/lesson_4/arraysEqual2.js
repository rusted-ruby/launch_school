// write a function that takes two arrays: it should return true if each of the values
//within the array are equal.

//now, for an extra challenge: make it so that the function returns true if the elements
//are all present, but out of order. should be able to do this easily by changing the
//if statement
//hmmm... using includes won't work because it throws off this statement
//areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]);   each element of the second array is in the 
//first, but each element of the first array isn't in the second... if I used dual includes
//statements, that would account for this case! Since both arrs are of equal length.

//but then that ruins this case! areArraysEqual([1, 1, 2], [1, 2, 2]); => each element is 
//in each array, but some more than others... so includes isn't going to handle all the cases.

//how about this! Sort each argument, then use a for loop to make sure each element of the 
//sorted elements are identical. that'll do. 

//should be pretty easy to do with a for loop, but then we'd need to handle if the two
//arrays aren't the same size... have an if statement that quits if the arrays aren't the
//same len. that would be more efficient, since we wouldn't need to loop through the entirety
//of the arrays to find out they're not equal

function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(false)
    return false
  }
  let sorted1 = arr1.sort();
  let sorted2 = arr2.sort();

  for (let i = 0; i < sorted1.length; i += 1) {
    if ( sorted1[i] !== sorted2[i] ) {
      console.log(false);
      return false
    }
  }
  console.log(true);
  return true

}

areArraysEqual([1, 2, 3], [1, 2, 3]);                  // true
areArraysEqual([1, 2, 3], [3, 2, 1]);                  // true
areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']);      // true
areArraysEqual(['1', 2, 3], [1, 2, 3]);                // false
areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]);            // true
areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]);            // false
areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]);            // false
areArraysEqual([1, 1, 2], [1, 2, 2]);                  // false!
areArraysEqual([1, 1, 1], [1, 1]);                     // false
areArraysEqual([1, 1], [1, 1]);                        // true

//what did LS do? they created a copy of array2, then use indexOf to see if each element of 
//arr1 lives in the arr2 copy. If it does, then we splice the copy of arr2 to remove that
//one index from it. 