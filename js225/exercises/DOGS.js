function Dog(name, weight) {
  this.name - name;
  this.weight = weight;
}

Dog.species = 'Canis Lupis';

let red = new Dog("Red", 19);
let ramsey = new Dog("Ramsey", 60);

console.log(red.constructor.species) //'Canis Lupis'
console.log(ramsey.constructor.species) //'Canis Lupis'
console.log(Dog.allDogs)