//create an object factory function for students. The student object should have all the 
//properties and methods outlined below

function createStudent(name, year){
  let courses = [];
  return {
    name,
    year,
    info(){
      console.log(`${name} is a ${year} year student.`)
    },
    addCourse(course){
      courses.push(course)
    },
    listCourses(){
      console.log(courses)
    },
    addNote(id, note){
      let course = this.findCourse(id)
      if (course.hasOwnProperty('note')) {
        course.note = course.note += `; ${note}`
      } else {
        course.note = note
      }
    },
    findCourse(id){
      return courses.find((ele) => {
        return ele.code === id
      })
    },
    updateNote(id, note){
      let course = this.findCourse(id);
      course.note = note;
    },
    viewNotes(){
      courses.forEach((ele) => {
        if (ele.hasOwnProperty('note')) {
          console.log(`${ele.name}: ${ele.note}`)
        }
      })
    }
  }
}

let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"