let rlSync = require('readline-sync');
let age = Number(rlSync.question('what is your age? '));
let retireAge = Number(rlSync.question('when do you want to retire? '));

let today = new Date();
let year = today.getFullYear();
let yearsOfWork = retireAge - age;
let retireYear = year + yearsOfWork;

console.log(`Its ${year}. You will retire in ${retireYear}`);
console.log(`Only ${yearsOfWork} years of work to go!`);