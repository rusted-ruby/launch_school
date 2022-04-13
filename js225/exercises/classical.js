//this one will be fairly involved. Implement a classical OOP heirarchy in js using a pseudo 
//classical approach.

//question: this works, but do I need to explicitly define all the new data types on the 
//objects that inherit from other objects? Like, how would I make it so that the only state
//for graduate student is the graduate Degree
/*
ah, you don't need to do this! The best way to do it is to invoke Person, but do it with call
to set the execution context of person to be the new object that you're creating


*/

function Person(firstName, lastName, age, gender){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}
Person.prototype.fullName = function(){
  console.log(this.firstName + ' ' + this.lastName);
}
Person.prototype.communicate = function(){
  console.log("Communicating")
}
Person.prototype.eat = function(){
  console.log("Eating")
}
Person.prototype.sleep = function(){
  console.log("Sleeping");
}

function Doctor(firstName, lastName, age, gender, specialization) {
  Person.call(this, firstName, lastName, age, gender)
  this.specialization = specialization
}
Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.diagnose = function(){
  console.log("Diagnosing");
}
Doctor.prototype.constructor = Doctor;

function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender)
  this.degree = degree;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.study = function(){
  console.log("Studying");
}
Student.prototype.constructor = Student;

function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree){
  Student.call(this, firstName, lastName, age, gender, degree)
  this.graduateDegree = graduateDegree;
}
GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.research = function(){
  console.log("Researching");
}
GraduateStudent.prototype.constructor =GraduateStudent;

//here's where we actually build the things out. 
const person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
person.fullName();            // logs 'foo bar'

const doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
doctor.fullName();            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'
console.log(doctor.constructor)

const graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
graduateStudent.fullName();   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'
console.log(graduateStudent.constructor)