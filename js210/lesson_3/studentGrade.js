//assume three pos ints as input. calculate the average of the grades and assign a
//letter grade based on the average score.
//prompt the user to input three integers.

let rlSync = require('readline-sync');
let grade1 = rlSync.question("Enter score 1: ");
let grade2 = rlSync.question("Enter score 2: ");
let grade3 = rlSync.question("Enter score 3: ");
let avg = (Number(grade1) + Number(grade2) + Number(grade3)) / 3;

console.log("average", avg);

let letter
if (avg >= 90) {
  letter = 'A'
} else if (avg < 90 && avg >= 70) {
  letter = 'B'
} else if (avg < 70 && avg >= 50) {
  letter = 'C'
} else {
  letter = 'F'
}

console.log('based on the average of your 3 scores, your letter grade is "' + letter + '".');