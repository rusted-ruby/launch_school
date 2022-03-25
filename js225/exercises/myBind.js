//create a myBind function that takes two args
//a function, and a context to bind it to, and returns a new function with the first
//parameter as its context. 

//this returns a function that, when invoked, invokes the function argument with the ctx
//argument as its context. It also leverages the spread operator to collect any number of 
//args the returned function might have.
function myBind(func, ctx) {
  return function(...args) {
    return func.apply(ctx, args);
  }
}

//now, re-write myBind so that it leverages PFA. Remember, you can use Bind to hard code 
//arguments passed into functions as well. 
function myBindPfa(func, ctx, ...partialArgs) {
  return function(...args) {
    fullArgs = partialArgs.concat(args)
     return func.apply(ctx, fullArgs);
  }
}

const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    //let self = this;
    let func = myBind(function(number) {
      return `${this.name} ${number}`;
    }, this)
    return [1, 2, 3].map(func);
  },
};

console.log(franchise.allMovies())