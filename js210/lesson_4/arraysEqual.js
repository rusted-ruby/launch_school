// write a function that takes two arrays: it should return true if each of the values
//within the array are equal.

//should be pretty easy to do with a for loop, but then we'd need to handle if the two
//arrays aren't the same size... have an if statement that quits if the arrays aren't the
//same len. that would be more efficient, since we wouldn't need to loop through the entirety
//of the arrays to find out they're not equal

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(false)
    return false
  }

  let check = true;
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) {
      check = false;
      console.log(check);
      return check
    }
  }
  console.log(check);
  return check

}

arraysEqual([1], [1]);                               // true
arraysEqual([1], [2]);                               // false
arraysEqual([1, 2], [1, 2, 3]);                      // false
arraysEqual([1, 'hi', true], [1, 'hi', true]);       // true
arraysEqual([1, 'hi', true], [1, 'hi', false]);      // false
arraysEqual([1, 'hi', true], [1, 'hello', true]);    // false
arraysEqual([1, 'hi', true], [2, 'hi', true]);       // false