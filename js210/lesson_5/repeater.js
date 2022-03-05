//function should take a string as an argument and return an object that holds the numbers
//of repeated chars. it should also ignore case.

//how to do this?
//we can iterate through the string using a for loop and [] indexing. then call downcase on all
//chars. 
//there's a few ways we could do this
  //have two objects: one that stores all counts, one that stores repeat counts. Have a series
  //of if / else statements to control counts are incremented.
  //if all counts doesn't exist, all counts needs to be initiated to 1. if it does exist, then it needs to be incremented. 
  //if all counts is equal to 1, then repeated counts needs to be initiated to 2
  //if all counts is greater than 1, then repeated counts needs to be incremented.


  //have one obejct that stores all counts. then take all the keys of that object, iterate
  //through it and delete all the keys that have a count less than 1. Could code that fairly
  //easily with reduce... no, since reduce is something that only works for arrays. 

  //first option is probablt better.

function repeatedCharacters(str) {
  let repeaters = {};
  let all = {};
  for (let i = 0; i < str.length; i += 1) {
    char = str[i].toLowerCase();
    //take care of all values
    if (!(char in all)) {
      all[char] = 1
    } else {
      all[char] += 1
    }

    //take care of repeated values
    if (all[char] === 2) {
      repeaters[char] = 2;
    } else if (all[char] > 2) {
      repeaters[char] += 1
    }
  }
  console.log(repeaters);
}

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }

//what did LS do? they took the approach of having two loops: one that counted all char values,
//and another that deleted the values that were equal to one at the end.

//they also called toLowerCase on the entire string object rather than on each individual char
//probably better because you're calling the function less. 