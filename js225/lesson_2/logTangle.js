let animal = {
  name: 'Pumbaa',
  species: 'Phacochoerus africanus',
};

//object stores a pointer to another object
let menagerie = {
  warthog: animal,
};

//reassign animal to a new object
animal = {
  name: 'Timon',
  species: 'Suricata suricatta',
};

//add this new object to the first one. 
menagerie.meerkat = animal;
console.log(menagerie);

menagerie.warthog === animal; // false
menagerie.meerkat === animal; // true

//reassignment is not the same as mutation. When we reassign animal on line 12, the
//menagerie object still stores a pointer to the original animal object on the heap.