//what does this log to the console and why?

const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length); //3 => length property doesn't consider non integer keys
console.log(Object.keys(array).length); //4 => this object will return all keys

array[-2] = 'Watermelon';
console.log(array.length); //still 3 for the same reason as above
console.log(Object.keys(array).length); //5