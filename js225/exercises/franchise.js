/*
we want this to return an array that looks like this
[
  'How to Train Your Dragon 1',
  'How to Train Your Dragon 2',
  'How to Train Your Dragon 3'
]

Why isn't this working right now? What's it returning? How can we fix it?
its going to return undefined 1, undefined 2, etc. this is because we lose the execution
context within the function we pass into map. That's a net new function, so we don't have the 
execution context of "franchise"

We can fix this a few ways
> new lexically scoped var to preserve the context
> explicitly setting the context with call / apply / bind
> using an arrow function as the callback.
> explicitly setting the context with the thisArg argument to map
*/

const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    //let self = this;
    return [1, 2, 3].map(function(number) {
      return `${this.name} ${number}`;
    }.bind(this));
  },
};

console.log(franchise.allMovies())