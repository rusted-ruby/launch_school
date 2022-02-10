let rlSync = require('readline-sync');
let lm = rlSync.question("Room length in meters: ");
let wm = rlSync.question("Room width in meters: ");
let am = lm * wm;
let af = am * 10.7639;
console.log(`the area of the room is ${am} square meters (${af} square feet).`)

//what did LS do?
//they assigned the feet to meters number to a constant rather than using a magic num. They also
//used parseInt to explicitly coerce the prompt from a string to a number, rather than do it
//implicitly like I did. They also used a method called toFixed to format the numbers as 
//strings, rather than use interpolation like I did. 