//func is the function we want to call
//delay is number of ms after which we call the fn
export default (func, delay) => {
  //create a private timeout variable within the function's binding
  let timeout;
  return (...args) => {
    //when we invoke this function, clear timeout if it already exists
    if (timeout) { clearTimeout(timeout) }

    //set a new timeout. This executes the callback after delay ms
    timeout = setTimeout(() => func.apply(null, args), delay)

    //what does func.apply do? sets the context of func with an
    //array of arguments. Here, the execution context is null, and 
    //args is an array of whatever arguments we pass to func
    //in the first place. 

    //again though... why are we using apply with the value changed
    //function if we've already used the bind method on it?
  }
}