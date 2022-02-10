//write a function that returns a substring based on index and length
//basic one should be easy: just handle the edge cases later
//just afor loop. init i, go until i < length. kicker is that you'll need to index
//the string on [ start + i ]

//ahhh, js is weird in that you can't index on negative strings! you need to account for
//that... so a start of -3 will need to be turned to str.length -1 -3

function substr(string, start, length) {
  let newStr = '';
  if (start < 0) {
    start = string.length + start
  }
  for (let i = 0; i < length; i += 1) {
    newStr += string[i + start];
    if ((i + start) >= (string.length - 1)) {
      break
    }
  }
  console.log(newStr);
  return newStr
}

let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl" => needs to start at 8, which is length (11) - start
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""

//had moretrouble than I thought I would with this one... what did LS do? 
//ah, they had a better setup for the break condition of the for loop: they didn't have a
//complex if statement, they just checked to see if the current character was undefined, 
//which would mean that we've gone out of bounds of the string object. 

//note that there is a built in method called substr that can help with things like this. 