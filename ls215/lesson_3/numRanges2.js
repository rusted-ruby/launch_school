/*
Only the significant portio nof the next number is written because we know nums are always
increasing

possible separators for ranges are - : and ..
Let's pretend that .. isn't one though... just because regex is hard

input is a string of nums (or ranges) separated by commas
output is an array of numbers

we'll need to separate the ranges into their component numbers
then we'll need to take the flattened range and decide if we need to add numbers to it

Or can we do both at once? no, we can't. We need to isolate the two pieces

how to flatten the ranges?
  create an empty array to hold the flat ranges
  splilt the string among commas
  check to see if there is a range char in the element
    if there isn't a range char, convert to num and push to flat array
    if there is a range char, split the element along the range chars
      iterate through each element of the range array. start at element 1, end at 2nd to last element
      take element 1 (current element) and element 2 (current element + 1)
      calculate the mod needed. This will be '1' + '0'.repeat(length element 2)
      set count = element 1
        while count <= element 2, push count % mod to the flat array. incrememnt count each iteration
      This should give us our flat array

How to get the final list given the flat array?
  iterate through the entire flat array. keep track of the previous element
  if current element is less than previous element... add something to it
    how do we know what we need to add? Its the first significant digit of the previous entry?
    here's what we do. start iteration at the second element. end at the final element
    keep track of the previous element and the current element. 
    if the current element is greater than the previous, do nothing
    if the current is less than the previous, take the following steps
      get the modulo using the same strategy as above: Number('1' + '0'.repeat(previous element.length - 1))
      compute Math.ceil(previous ele - current ele) * mod to get the sig val we need to add
      add that sig val to the curent val

Okay, I FINALLY did it. But it was super compicated and took me an hour. What the hell did LS 
do?

Things I missed: the .. range separator (obviously)
Also didn't have a test case with multiple range chars. My code would work with that, but still

Looks like the strategy for LS was something like this
  iterate through the input string
  if its not a digit, put it in the result string
  if it is a digit expand it if needed. So 1:5:2 becomes 1:5:12. and 545,64:11 becomes 545,564:611 (I think)
  and 1-3,1-3 becomes 1-3, 11-13
  then just iterate through the result array and expand things that have range chars that makes
  the iteration much easier

Damn, this one is hard. Even got stumped on the LS video. Didn't code a solution and 
just outlined the algorithm for it. 
*/

function getMod(length) {
  return Number('1' + '0'.repeat(length))
}

function flattenRanges(str) {
  let strArr = str.split(',');
  let regex = /[:-]/
  let flatArr = []
  debugger;
  strArr.forEach((element, index) => {
    //element doesn't have range chars
    if (!element.match(regex)) {
      flatArr.push(Number(element));
    } else{
      //element does have range chars
      let rangeArr = element.split(regex);
      for (let i = 0; i < (rangeArr.length - 1); i += 1) {
        let range1 = rangeArr[i];
        let range2 = rangeArr[i + 1];
        let mod = getMod(range2.length)
        range1 = Number(range1)
        range2 = Number(range2);
        if (i === 0) {
          count = range1;
        } else {
          count = range1 + 1;
        }
        while ((count % mod) !== (range2+ 1)) {
          if (i ===0) {
            flatArr.push(count)
          } else {
            flatArr.push(count % mod)
          }
          count += 1
        }
      }
    }
  })
  //console.log(flatArr)
  return flatArr
}

function processFlattenedArr(flatArr) {
  let finalArr = []
  finalArr.push(flatArr[0])
  
  for (let i = 1; i < flatArr.length; i += 1) {
    let previous = flatArr[i - 1];
    let current = flatArr[i];
    if (previous < current) {
      finalArr.push(current)
    } else {
      let mod = getMod(String(previous).length - 1)
      mod = mod === 1 ? 10 : mod
      let adder = Math.ceil((previous - current) / mod) * mod
      finalArr.push(adder + current)
      flatArr[i] = adder + current
    }
  }
  return finalArr
}

function rangeFormatter(string) {
  let flatArr = flattenRanges(string);
  let finalArr = processFlattenedArr(flatArr)
  console.log(finalArr)
}



rangeFormatter("1-3, 1-2") //[1, 2, 3, 1, 2] becomes [1, 2, 3, 11, 12]
rangeFormatter("1,3,7,2,4,1") // [1, 3, 7, 12, 14, 21]
rangeFormatter("1:5:2") //[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2] becomes[1,2,3,4,5,6...12]]
rangeFormatter("104-2") //[104, 105, 106... 112]
//[104, 105, 106, 107, 108, 109, 110, 111, 112]
rangeFormatter("104-02") //104, 105, ... 202
//[545, 64, 65, 66... 11] becomes [545, 564, 565... 611]
rangeFormatter("545,64:11") //545, 564, 565... 611