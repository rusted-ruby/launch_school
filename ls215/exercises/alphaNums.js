/*
take an array of integers between 0 and 19 and return an array of integers sorted based on the
English word for a given number.

Do not mutate the argument. 

input is an array of numbers. Output is a new array of numbers. 

Sort will likely be the best way to handle this...

iterate through the array using sort. the key will be the callback
sort also mutates the calling object. So we'll need to create a new array that's a soft copy
of the original before we use it.

So, what should the calling object do?
  given an array element, obtain the string representation of the element
  once both elements are converted to strings, just use < or > on them to decide which one 
  comes first and later than the other one.

  The kicker is going to be how to get the string representation of a number. I think the
  easiest way will be to just have an array that stores the string represenataion of a number 
  at a given index. so ['zero', 'one', etc] up to nineteen. That won't be too bad to code. 
*/
const NAME_ARR = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ,'ten', 
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen' ,'eighteen',
  'nineteen'
]
function alphabeticNumberSort(arr) {
  let sortArr = arr.slice()
  sortArr.sort((ele1, ele2) => {
    let str1 = NAME_ARR[ele1]
    let str2 = NAME_ARR[ele2]
    if (str1 < str2) {
      return -1
    } else if (str1 > str2) {
      return 1
    } else if (str1 === str2) {
      return 0
    }
  })
  console.log(sortArr)
  return sortArr
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
alphabeticNumberSort(arr);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
console.log(arr) //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]