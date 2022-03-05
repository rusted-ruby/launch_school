/*
a collection of spelling block has two letters per block. Each block has two letters. 

Write a function that takes a word string as an argument and returns true if the word
can be spelled using the set of blocks. Letters are case insensitive. 

The criteria is such that you can only use ONE letter from a given pair

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

So if you had a word that had a B and an O, it would return false. but "BED" should return true
because each of its letters come from a different block

questions:
do I need to handle non-word inputs? things like numbers and symbols? assume no

how do I handle duplicate letters? Should "bell" return true or false? Assume that bell should
return true

input: a word string
output: boolean

How to do this?
  first question is how to track the letter pairs... an array seems to be the obvious choice...
  you can store the letter pairs as nested arrays. then iterate through the input word, find 
  each letter in the nested array... that would work, but it would be pretty hamfisted to have
  to iterate through the sub arrays with each letter of the input word

  A slick alternative would be an object. Each key is a letter, and each value is the letter's
  pair. When we iterate through the input word, we index into the object for each letter to
  find its pair. Then we delete the letter and its pair from the object!

  So here's what we do
    convert the input word to lowercase and split it into an array
    use a for loop to iterate through the array (in case we need to break early)
    for each char, index into the object to see what its pair is
      if the object does not contain the char and our approved letter arr does not contain it, return false from the function
      else, add the char to our approved letter array and keep moving
    
    return true if we make it all the way through the array

  didn't think this one through enough... relying on deleting the object key isn't a great
  solution because that means we'll be mutating an object that's supposed to be constant.
  so we need to either copy the object or find another way of tracking this
    new way of tracking is probably easiser: have an array of the object's keys and mutate
    that instead of the object itself. Use the object to find out what the second key to 
    delete is. 

  yeah, I messed up big time on this one. 45 minutes in and my tests are still failing. problems
  were not thinking through the implications of an object data structure... honestly, I could
  have just initialized it every time we called the function and it would've been fine. 

  What did LS do?

  Things I missed
  there were a few methods that I knew existed, but I needed to use node to find out how they worked
    Array.splice
    Object.keys

  Code differences
  Looks like the video used the strategy of an array of arrays. Needed to iterate through them
  each time to find which one to delete.
*/
const BLOCK = {
  b: 'o', o: 'b', x: 'k', k: 'x', d: 'q', q: 'd', c: 'p', p: 'c', n: 'a', a: 'n', 
  g: 't', t: 'g', r: 'e', e: 'r', f: 's', s: 'f', j: 'w', w: 'j', h: 'u', u: 'h',
  v: 'i', i: 'v', l: 'y', y: 'l', z: 'm', m: 'z'
};

//mutate the block keys array such that the char and its pair are removed. 
function processBlockKeys(blockKeys, char) {
  let charPair = BLOCK[char]
  blockKeys.splice(blockKeys.indexOf(char), 1)
  blockKeys.splice(blockKeys.indexOf(charPair), 1)
}

function isBlockWord(str) {
  let blockKeys = Object.keys(BLOCK);
  let arr = str.toLowerCase().split('')
  let approvedArr = []
  debugger;
  for (let i = 0; i < arr.length; i += 1) {
    let char = arr[i]
    let foundInBlock = blockKeys.indexOf(char) !== -1;
    let foundInApproved = approvedArr.indexOf(char) !== -1;
    if (!foundInBlock && !foundInApproved) {
      //char is NOT okay. quit loop early
      console.log(false);
      return false
    } else {
      //char is okay. modify the blockKeys if we need to. push the char to the approved  array.
      if (foundInBlock) {
        processBlockKeys(blockKeys, char)
      }
      approvedArr.push(char)
    }
  }
  console.log(true)
  return true
}


isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('batch');      // true
isBlockWord('butch');      // false
isBlockWord('jest');       // true
isBlockWord('belle'); //true
isBlockWord('BeD'); //true
isBlockWord('caRe'); //false