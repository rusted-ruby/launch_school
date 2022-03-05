//function anagrams takes two arguments: a word and an array of words. the function returns
//an array made up of elements of the words array that are an anagram of the word element. In
//other words, they have all the same letters as the word element. 

//how to do this? easiest way would be to have a filter and pass it a callback that decides
//if the element is an anagram. But how can we do the anagram piece?
//given two words, how can we tell if they have the same chars? we could split them into
//arrays, sort them, then join them back into strings and see if those strings are equal
//to each other. 

function sortWord(word) {
  let arr = word.split('')
  return arr.sort().join('')
}

function isAnagram(word1, word2) {
  return sortWord(word1) === sortWord(word2)
}

function anagram(word, list) {
  return list.filter((element) => {
    return isAnagram(word, element)
  })
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]