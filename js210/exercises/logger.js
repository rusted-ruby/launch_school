//why does this log 'debugging'?
/*
When we call debugIt, we declare a new function scoped variable called status in the 
function and assign it to 'debugging'. We also define a function called logger. This function
creates a closure, so it has access to any of the variables that are in scope when its defined. 
Therefore, it has access to the status local variable via its binding, so it
logs 'debugging' to the console when we invoke it within debugIt.
This is an example of javascript's lexical scoping rules. 
*/
const test = 'will this print too?'
function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
    console.log(test);
  }

  logger();
}

debugIt();