let me = {
  firstName: 'john',
  lastName: 'doe',
};
let friend = {};
friend.firstName = 'jane'
friend.lastName = 'smith'
let people = {
  collection: [],
  rollCall() {
    this.collection.forEach(this.fullName)
  },
  fullName(obj) {
    console.log(obj.firstName + ' ' + obj.lastName);
  },
  getIndex(person) {
    let index = -1;
    this.collection.forEach((compare, i) => {
      if (compare.firstName === person.firstName && 
          compare.lastName == person.lastName) {
            index = i;
      }
    })
    return index
  },
  remove(person) {
    if (this.isInvalid(person)) {
      return;
    }
    let index = this.getIndex(person)
    if (index !== -1) {
      this.collection.splice(index, 1);
    }
  },
  isInvalid(person) {
    return typeof person.firstName !== 'string' || typeof person.lastName !== 'string'
  },
  get(person) {
    if (this.isInvalid(person)) {
      return;
    }
    return this.collection[this.getIndex(person)];
  },
  update(person) {
    if (this.isInvalid(person)) {
      return;
    }
    let personIndex = this.getIndex(person);
    if (personIndex === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  }
};
people.add = function(person) {
  if (this.isInvalid(person)) {
    return;
  }
  this.collection.push(person)
};
people.add(me);
people.add(friend);
console.log(people);

people.rollCall();

people.remove(friend);
people.rollCall();