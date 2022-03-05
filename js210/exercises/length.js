//what's logged to the console on each line and why?

const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); //the array
console.log(languages.length); //3

languages.length = 4;
console.log(languages); //the array with one empty space
console.log(languages.length); //4

languages.length = 1;
console.log(languages); //['JavaScript']
console.log(languages.length); //1

languages.length = 3;
console.log(languages); //javascript with two empty spaces
console.log(languages.length); //3

languages.length = 1;
languages[2] = 'Python';

//got these wrong: we're not setting the index 1, we're setting the index 2.
//so languages is ["JavaScript", empty, "Python"], languages[1] is undefined and length is 3
console.log(languages); //['JavaScript', 'Python']
console.log(languages[1]); //'Python'
console.log(languages.length); //2