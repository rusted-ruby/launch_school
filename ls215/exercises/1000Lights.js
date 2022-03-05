/*
input is a number (assume no sanitization: I'll always get a pos integer)
output is an array of nums that represent lights that are on after n iterations

light array: an array of size n that contains 0s and 1s. 0 means lights off, 1 means lights on

define divisor to start at 1
iterate through the light array n times.
  if array index + 1  % divisor = 0, toggle the switch
  increment divisor

end result is an array of the lights that are on: 1 is on light, 0 is off
next, iterate through the light array
  if light array entry is 1, push index + 1 to result array

return result array

what did LS do?
similar to my solution, except they stored on and off status as a boolean. that way, they 
could use ! to flip the status really easily. 
*/

// mutate the light array at position 'index'. 
function toggleLight(lightArray, index) {
  if (lightArray[index] === 1) {
    lightArray[index] = 0
  } else if (lightArray[index] === 0) {
    lightArray[index] = 1
  }
}

function lightsOn(n) {
  let lightArray = '0'.repeat(n).split('').map((ele) => Number(ele));
  let divisor = 1;
  for (let i = 0; i < n; i += 1) {
    lightArray.forEach((element, index) => {
      if ((index + 1) % divisor === 0 ) {
        toggleLight(lightArray, index)
      }
    })
    divisor += 1;
    //console.log(lightArray)
  }

  //iterate through light array to get the final result array
  let result = []
  lightArray.forEach((element, index) => {
    if (element === 1) {
      result.push(index + 1);
    }
  });
  console.log(result)
  return result
}

//test cases
lightsOn(5) //[1,4]
lightsOn(100) // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]