/*
how to do this? 
split the string by spaces. return a new array via map. make the return value be each word
+ space + String(word.length)
*/

function wordLengths(str) {
  if (!str)  {
    console.log([])
    return []
  }
  let newArr = str.split(' ').map((word) => {
    return word + ' ' + String(word.length)
  })
  console.log(newArr)
  return newArr
}

wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []