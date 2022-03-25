/*
When can we garbage collect the following values?
["Steve", "Edie"] => after the program finishes, since the value is included in the
helloSteveAndEdie function's closure. 
*/

function makeHello(names) {
  return function() {
    console.log("Hello, " + names[0] + " and " + names[1] + "!");
  };
}

let helloSteveAndEdie = makeHello(["Steve", "Edie"]);