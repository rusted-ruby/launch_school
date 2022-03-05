/*
function should take an array of strings and return the same string values with vowels
removed. 

There has to be a relatively easy way to do this with regex...

replace is what you want. you can use a regex with that to replace instances of a string with
something else (including nothing)

could also have used an array of vowel characters and checked to see if each char in the
element lived in that array. 
*/

function removeVowels(arr) {
  let newArr = arr.map((element) => {
    return element.replace(/[aeiouAEIOU]/g,'')
  })
  console.log(newArr)
  return newArr
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]