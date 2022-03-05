/*
How can we do this? init an index at 0. When the index is even, turn to upper. when its odd
turn to lower. that's all.

Yeah, this is exactly what LS did. Its called 'transformation'
*/

function staggeredCase(str) {
  let newStr = str.split('').map((element, i) => {
    if (i % 2 === 0 ) {
      return element.toUpperCase()
    } else {
      return element.toLowerCase()
    }
  }).join('')
  console.log(newStr)
  return newStr
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"
staggeredCase('ignore 7 the 4444 numbers');   // "IgNoRe 7 tHe 4444 NuMbErs"