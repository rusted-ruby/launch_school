/*
implement a mini stack + register programming language.
input is a string.
no output
side effects are that values are printed to the console based on the input command
assume that commands are valid and separated by spaces. 

first, init stack and register to [] and 0.
second, break string up into its component commands. split will work for this
now we have an array of commands all in string format. iterate through the array.

First, decide if the command is a string version of an integer or not. use Number.parseInt and
Number.isNaN for this

what did LS do? they had a switch statement instead of if else branches. 

*/
"use strict"

function isNumber(ele) {
  return !Number.isNaN(Number.parseInt(ele, 10))
}
function minilang(input) {
  let register = 0;
  let stack = [];
  input.split(' ').forEach((ele) => {
    if (isNumber(ele)) {
      register = Number.parseInt(ele, 10);
    } else if (ele === 'POP') {
      register = stack.pop();
    } else if (ele === 'PUSH') {
      stack.push(register);
    } else if (ele === 'ADD') {
      register += stack.pop();
    } else if (ele === 'SUB') {
      register -= stack.pop();
    } else if (ele === 'MULT') {
      register *= stack.pop()
    } else if (ele === 'DIV') {
      register = Math.floor(register /= stack.pop())
    } else if (ele === "REMAINDER") {
      register %= stack.pop()
    } else if (ele === 'PRINT') {
      console.log(`${register}`);
    }
  })
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)