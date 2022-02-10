//write a function to banberize a line of text
//so we'll need five string logs for sure. 

function logInBox(str) {
//build and log top string
let topStr = '+-';
for (let i = 0; i < str.length; i += 1) {
  topStr += '-'
}
topStr += '-+'
console.log(topStr)

//build and log middle string
let midStr = '| '
for (let i = 0; i < str.length; i += 1 ) {
  midStr += ' '
}
midStr += ' |'
console.log(midStr)

//build and log text string
let textStr = '| ';
for (let i = 0; i < str.length; i += 1 ) {
  textStr += str[i];
}
textStr += ' |'
console.log(textStr)
//log middle string again
console.log(midStr);
//log top string again
console.log(topStr)
}

logInBox('To boldly go where no one has gone before.');
logInBox('');

//what did LS do?
//rather than use three for loops, they built a function to build the top line and middle line
//then they just logged those two lines and logged the text line via string interpolation. 
