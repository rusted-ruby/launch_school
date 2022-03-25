//write a constructor function that works the same no matter if its used with or without new

function User(first, last) {
  // if we're invoking the function with new, then this will be an instance created by the
  //User function
  if (this.constructor === User) {
    this.name = first + " " + last;
  //we're not invoking the function with new. So fix that and do it properly
  } else {
    return new User(first, last)
  }
}

let personName = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(personName);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe