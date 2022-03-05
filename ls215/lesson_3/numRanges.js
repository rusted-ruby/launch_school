/*
give a list of numbers in a short hand range
We know that only the ones place of the next number is written down, since the numbers are
always going to be increasing. 

You can also pass ranges of nums instead of individual nums.Different people use different 
separators for their ranges. The possible separators are
-, :, ..

input is a string of numbers / ranges output is an array of integers... or a string... 
  assume its an array.

Two problems to solve here
  converting the input string into an appropriate array by flattening the ranges
  taking that array and translating it into an array with expanded values

the othe hard part is that this isn't just for the ones place... its the last significant portion, 
as you can see by the other two examples. So we need to account for the number of digits in the 
right hand side of the given range... 

Also need to be able to handle multiple ranges... ie, 1:5:2.

this one will be tough...

Two problems to solve here
  converting the input string into an appropriate array by flattening the ranges
    first, split the string along commas. assume that ranges will always be separated by these
    and that we don't need to handle special chars
    second, iterate through the resultant array. if the element doesn't contain range chars,
    push it to the flat array. If it does, process the range and push the ranges to the flat arr
  taking that array and translating it into an array with expanded values
    iterate through the flattened array. track the previous element
    if the curent element is less than the previous one, add an equalizer to it
    What is the equalizer? Figure this part out later

  How to process the ranges
    split the string along the range chars: - : and ..
    have two loops
    first loop, iterate along the split range elements
    second loop, start at element 1 and end at element 2
      if element 1 is less than element 2, just add 1 and push new val to an array
      if element 1 is greater than element 2, keep adding 1 to element 1 until
        cross a tens threshold. then start at 1 and keep going up.
        modulo would probably be helpful here. ie, 10 % 10 is zero. 
        how to find the right modulus for the job though? one more places than the number of 
        digits in element 2. so for 2 its 10, for 20 its 100, etc. 

Yeah this one is really tough. 30 minutes and I don't even have any code down yet. handling
the '..' in regex is really bringing me down. Let's assume I don't need to worry about
that, just for the sake of actually solving this. I don't know regex enough to hanfle that,
and I already know its something I need to work on.

Okay, I completly crashed and burned on this one. one hour and I haven't even solved the 
first problem. Mission failed, we'll get em next time. 
*/

function getMod(str) {
  return '1' + '0'.repeat(str.length)
}

function processRangeArr(arr) {
  let flatArr = []
  let regex = /[:-]/g
  arr.forEach((element, index) => {
    if (!element.match(regex)) {
      //no range chars in element. just push the element to flat array. 
      flatArr.push(element)
    } else {
      let rangeArr = element.split(regex);
      for (let i = 0; i < (rangeArr.length -1); i += 1) {
        let ele1 = Number(rangeArr[i])
        let ele2 = Number(rangeArr[i + 1])
        for (let j = ele1; j <= ele2; j += 1 ) {
          if (ele1 < ele2) {
            flatArr.push(j);
          } else {
            let mod = getMod(ele2)
            flatArr.push(String(j % Number(mod)))
          }
        }
      }
    }
  })
  return flatArr
  
}

function rangeFormatter(string) {
  let arr = string.split(',');
  debugger;
  let flatArr = processRangeArr(arr);
  console.log(flatArr);
}

//test cases
//rangeFormatter("1,3,7,2,4,1") // [1, 3, 7, 12, 14, 21]
rangeFormatter("1-3, 1-2") //[1, 2, 3, 11, 12]
rangeFormatter("1:5:2") //[1,2,3,4,5,6...12]]
rangeFormatter("104-2") //[104, 105, 106... 112]
rangeFormatter("104-02") //104, 105, ... 202
rangeFormatter("545,64:11") //545, 564, 565... 611
//rangeFormatter("545,64..11") //545, 564, 565... 611
