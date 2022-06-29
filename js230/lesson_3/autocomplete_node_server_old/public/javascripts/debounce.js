export default (func, delay) => {
  let timeout;
  //still not clear how this works... I get how it delays a request, but how does it
  //prevent one from being executed?
  //ah, its how we invoke it. we only invoke this function once: all other times, we invoke the 
  //function RETURNED by this one. So the function returned by this one has permanent access
  //to the timeout local variable via its closure. If we call the returned function again, 
  //it clears the existing timeout var from the closure and replaces it with a new one.
  return (...args) => {
    if (timeout) { clearTimeout(timeout) }
    timeout = setTimeout(() => func.apply(null, args), delay);
  };
};