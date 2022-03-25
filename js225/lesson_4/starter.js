//set systemStatus to the value of status without changing startup.
//looks like this is impossible! Remember, variables in a closure are private!

function startup() {
  let status = 'ready';
  return function() {
    console.log('The system is ready.');
  };
}

let ready = startup();
//let systemStatus = // ?