//given two arrays, multiply each entry in the array by each other. return the results in 
//numeric order.

//how to do this? two forEach loops, one on each aray? Then sort the results? yeah

function multiplyAllPairs(arr1, arr2) {
  result = [];
  arr1.forEach((ele1) => {
    arr2.forEach((ele2) => {
      result.push(ele1 * ele2);
    })
  })

  result.sort((score1, score2) => {
    if (score1 < score2) {
      return -1
    } else if (score1 > score2) {
      return 1
    } else {
      return 0
    }
  })
  return result
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

//what did LS do? same as me, but they did something interesting with sort
/*
result.sort((a,b) => a - b)

I wouldn't have thought to do that, but it works! All sort needs is a negative num, a pos
num or zero. If a - b is pos, then a comes before b. if a - b is neg, then a b comes before a.
*/