//write a function that creates a new string that's a reverse of the input
//turn the string to an array, then reverse it and join it

function reverse(str) {
  let result = str.split('').reverse().join('');
  console.log(result)
  return result
}
reverse('hello');                  // returns "olleh"
reverse('The quick brown fox');    // returns "xof nworb kciuq ehT"