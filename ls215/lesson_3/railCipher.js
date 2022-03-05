/*
This is the hardest problem!
this is a form of cipher that comes from the ancient greeks
the message is written diagnonally on imaginary rails

so WECRLTEERDSOEEFEAOCAIVDEN

Becomes

W . . . E . . . C . . . R . . . L . . . T . . . E => 7 chars
. E . R . D . S . O . E . E . F . E . A . O . C . => 12 chars
. . A . . . I . . . V . . . D . . . E . . . N . . => 6 chars

which reads as WE ARE DISCOVERED FLEE AT ONCE.

write an encode and decode function for the rail cipher.

encode accepts a string and turns it to a cipher code. decode accepts a cipher string
and turns it to its original value

assume that you only need to worry about letters, and lowercase ones at that. 

This doesn't seem that hard. At least, encoding doesn't
  format the input string such that its only uppercase letter chars
  split the string to an array of chars
  iterate through chars. have three arrays, one for each row.
  first char is in row 1 then every 4th. so i 0 and is divisble by 4
  second char is in row 2, then every other. so odd indicies
  third char is in row 3, then every 4th. so i is divisible by 2, but not 4
  join the three arrs into one string and return it. 

Now, for decoding... start with an encoded string and unencode it.
  kind of similar to the last one, just in reverse...
    create three arrays: 
    first has 0 index and all indicies divisible by 4
    second has second index and all odd indicies
    third has indicies divisible by 2 and not 4
    ^^^
    this part doesn't work, but the bottom part will if I can find a way to build those three arrs

    how many times is the input divisible by 4? that's one "entry". that can tell us how to
    split the cipher string. 25 chars above, so that's 6 'entries' plus one leftover.
      one leftover is an extra entry in arr1
      two leftover is an extra entry in arr2
      three leftover is an extra entry in arr3
    that's how we can decide where to split the arrs. whatever the quotient of dividing
    by 4 is, that's how many entries will be in arrs 1 and 3, and arr2 will be double that
    then process the remainders by adding pieces when needed. 

    We can use that strategy to get the indicies. then once we have those, use slice to
    get the arrays we need. a
    arr1 = str.slice(0, i1)
    arr2 - str.slice(i1, i1 + i2)
    etc
  Then once we have those arrays, have a while loop that runs until all three array entries are undefined
    have three index vars: one for each array
    increment each indec var at the end of the loop. arr2s needs to be incrememnted by 2
    build a new string such that arr[i] + arr2[j] + arr3[k] + arr2[j + 1]
      don't actually get the array indicies: write a function that changes them to an
      empty string if they're undefined so we don't need to worry about cleanup later.
    when all four entries are empty strings, break the while loop.
    return the result
*/

const ENTRY_SIZE = 4;

function divisibleBy4(num){
  return num % 4 === 0
}

function isOdd(num) {
  return num % 2 !== 0
}

function divisibleBy2AndNot4(num) {
  return (!isOdd(num) && !divisibleBy4(num))
}

function entriesNotEmpty(e1, e2, e3, e4) {
  return (e1 !== '' && e2 !== '' && e3 !== '' && e4 !== '')
}

//returns an entry in an array, or an empty string if its undefined
function getEntry(arr,i) {
  let val = arr[i]
  if (val === undefined) {
    val = ''
  }
  return val
}

//modify the indicies if we need to. 
function getIndicies(quotient, remainder) {
  let i1 = quotient;
  let i2 = 2 * quotient;
  let i3 = i1;
  if (remainder >= 1) {
    i1 += 1
  } 
  if (remainder >= 2) {
    i2 += 1
  } 
  if (remainder >= 3) {
    i3 += 1
  }
  return [i1, i2, i3]
}

function encodeRail(str) {
  let arr = str.toUpperCase().match(/[A-Z]/g);
  let arr1 = []
  let arr2 = []
  let arr3 = []
  arr.forEach((char, i) => {
    if (divisibleBy4(i)) {
      arr1.push(char);
    } else if (isOdd(i)) {
      arr2.push(char);
    } else if (divisibleBy2AndNot4(i)) {
      arr3.push(char)
    }
  })
  let encodedStr = arr1.join('') + arr2.join('') + arr3.join('');
  console.log(encodedStr)
  return encodedStr
}

function decodeRail(str) {
  str = str.toUpperCase().match(/[A-Z]/g).join('');
  let numFullEntries = Math.floor(str.length / ENTRY_SIZE);
  let remainder = str.length - (numFullEntries * ENTRY_SIZE);
  let [i1, i2, i3] = getIndicies(numFullEntries, remainder);
  let arr1 = str.slice(0, i1).split('');
  let arr2 = str.slice(i1, i1 + i2).split('');
  let arr3 = str.slice(i1 + i2, i1 + i2 + i3).split('');
  let i = 0;
  let j = 0;
  let k = 0;
  decodedStr = '';
  do {
    e1 = getEntry(arr1, i)
    e2 = getEntry(arr2, j)
    e3 = getEntry(arr3, k)
    e4 = getEntry(arr2, j + 1)
    decodedStr += e1 + e2 + e3 + e4
    i +=1 
    k += 1
    j += 2 //need to increment arr2's index twice
  } while (entriesNotEmpty(e1, e2, e3, e4)) 

  console.log(decodedStr)
  return decodedStr
}

encodeRail('WE ARE DISCOVERED FLEE AT ONCE') //WECRLTEERDSOEEFEAOCAIVDEN
decodeRail('WECRLTEERDSOEEFEAOCAIVDEN') //WEAREDISCOVEREDFLEEATONCE

encodeRail('Keep it Secret. Keep it SAFE') //KICKIFEPTERTEPTAEESEES
decodeRail('KICKIFEPTERTEPTAEESEES') //KEEPITSECRETKEEPITSAFE