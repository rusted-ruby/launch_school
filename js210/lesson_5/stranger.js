//write a function that greets a stranger.
//the first arg will be an array of variable length. It contains strings that form a name when
//combined with spaces. the second arg has two keys that represent an occupation.

function greetings(arr, obj) {

  //could also have just used name.join(' ') here... lol.
  let name = arr[0] + ' ';
  for (let i = 1; i < arr.length; i += 1) {
    name = name + arr[i] + ' ';
  }
  name = name.trim();
  str = `Hello, ${name}! Nice to have a ${obj.title} ${obj.occupation} around`;
  console.log(str);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
//Hello, John Q Doe! Nice to have a Master Plumber around.