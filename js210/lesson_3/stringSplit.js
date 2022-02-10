// function  takes two arguments: a string to split and the delimiter.
//log the split strings to the console.

//how to do this... I'll need to handle a delimiter missing... if its not passed in, 
//it'll be undefined, so can handle it that way.

//I can take loop through the strings while building a substring. If i find the delimiter,
//then I log the substring and reset it

//that doesn't handle the case the delimiter is an empty string though... how can you handle
//that one without coding an entirely separate loop for it? OK, LS just had another if / else
//branch for it

//note that there is a built in string method for js, split, that does this for you. 

function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log("ERROR: no delmiter")
    return
  }

  let substr = '';
  for(let i = 0; i < string.length; i++ ){
    if (string[i] === delimiter) {
      console.log(substr);
      substr = ''
    } else if (delimiter ==='') {
      console.log(string[i]);
    } else {
      substr += string[i]
    }
  }
  console.log(substr)
  console.log()
  console.log("new line")
  console.log()
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello