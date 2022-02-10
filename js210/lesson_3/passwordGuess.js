let rlSync = require('readline-sync');
let pw = "guest"

for( let i = 0; i < 3; i ++) {
  let pwGuess = rlSync.question("What is the password: ");
  if (pwGuess == pw) {
    console.log("You have successfully logged in");
    break
  } else if (i === 2) {
    console.log("You have been denied access");
  }

}