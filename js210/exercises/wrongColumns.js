//function should select and extract specific columns to a new array, but its not working
//the way we'd like it to. Why?

//well first, we're not setting up the for loop right... or I guess it works, but its 
//gross. 

//what the hell is this function doing? 
//first one: numbers is const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//cols is [0]
//result[[1, 4]]

//its because we have two global variables for length. So the first one is inittalized to
//3, but the second one is initialized to zero. If we re-tool the for loop so it isn't 
//disgusting, then it should work

//note there's more going on here than meets the eye: we iniatated the length variable with
//the var keyword. That means that the variable had function scope. So I was right that
//the function failed because we reassigned the length variable. I was just wrong about 
//the specific mechanism of how it happened: it wasn't becuase the variable had global scope,
//but because it had function scope. 

function getSelectedColumns(numbers, cols) {
  var result = [];

  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = 0; j < cols.length; j += 1) {
      if (!result[j]) {
        result[j] = [];
      }
      //numbers[0] = [1,2,3]
      //numbers[0][0] = 1
      result[j][i] = numbers[i][cols[j]];
    }
  }
  console.log(result);
  return result;
}

// given the following arrays of number arrays
const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// `array1` in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

getSelectedColumns(array1, [0]);     // [[1]];            expected: [[1, 4, 7]]
getSelectedColumns(array1, [0, 2]);  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
getSelectedColumns(array2, [1, 2]);  // [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]