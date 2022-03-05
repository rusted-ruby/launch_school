/*
take a string and return an object with three properties. 
  % of chars that are lowercase
  % of chars that are uppercase
  % of chars that are neither

input is a string
output is an object. 

can use regex with match. get an array of all the matches in a string, and return the length
then divide the value by the string length

This works, but I missed the "toFixed" aspect of this one. 

also, what did LS do? they did

lowercase: (((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(2),

So they didn't need the tenary operator for their solution: they just used the || operator
instead. 
*/

function getPercentage(str, reg) {
  return String(((str.match(reg).length / str.length) * 100).toFixed(2))
}

function letterPercentages(str) {
  let obj = {}
  let lowReg = /[a-z]/g
  obj.lowercase = str.match(lowReg) ? getPercentage(str, lowReg) : "0.00"
  let upReg = /[A-Z]/g
  obj.uppercase = str.match(upReg) ? getPercentage(str, upReg) : "0.00"
  let neitherReg = /[^a-zA-Z]/g
  obj.neither = str.match(neitherReg) ? getPercentage(str, neitherReg) : "0.00"
  console.log(obj)
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }