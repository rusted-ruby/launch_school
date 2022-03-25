//create an object factory function for a school. The school object is used to update student
//objects from our last code exercise.

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
      let course = this.findCourseFromId(id)
      if (course.hasOwnProperty('note')) {
        course.note = course.note += `; ${note}`
      } else {
        course.note = note
      }
    },
    findCourseFromId(id){
      return courses.find((ele) => {
        return ele.code === id
      })
    },
    findCourseFromName(name){
      return courses.find((ele) => {
        return ele.name === name
      })
    },
    updateNote(id, note){
      let course = this.findCourseFromId(id);
      course.note = note;
    },
    viewNotes(){
      courses.forEach((ele) => {
        if (ele.hasOwnProperty('note')) {
          console.log(`${ele.name}: ${ele.note}`)
        }
      })
    },
    getCourses(){
      return courses
    }
  }
}

function createSchool(){
  const VALID_YEARS = ['1st', '2nd', '3rd', '4th', '5th'];
  let students = [];
  return {
    addStudent(name, year){
      if (VALID_YEARS.indexOf(year) === -1) {
        console.log("Invalid year");
      } else {
        student = createStudent(name, year)
        students.push(student)
        return student
      }
    },
    enrollStudent(student, courseName, courseCode){
      let course = {code: courseCode, name: courseName};
      student.addCourse(course);
    },
    addGrade(student, courseCode, grade){
      let course = student.findCourseFromId(courseCode);
      if (course){
        course.grade = grade;
      }
    },
    getReportCard(student){
      student.getCourses().forEach((course) => {
        let grade = "In progress"
        if (course.hasOwnProperty('grade')) {
          grade = course.grade;
        }
        console.log(`${course.name}: ${grade}`);
      })
    },
    courseReport(courseName){
      let sum = 0;
      let denom = 0;
      console.log(`=${courseName} Grades=`)
      students.forEach((student) => {
        let course = student.findCourseFromName(courseName);
        if (course && course.hasOwnProperty('grade')) {
          console.log(`${student.name}: ${course.grade}`)
          sum += course.grade;
          denom += 1;
        }
      })
      console.log('---');
      console.log(`Course Average: ${sum / denom}`)
    }
  }
}

let school = createSchool();
let foo = school.addStudent("Foo", "3rd");
let bar = school.addStudent("Bar", "1st");
let qux = school.addStudent("Qux", "2nd");
school.enrollStudent(foo, 'Math', 101);
school.enrollStudent(bar, "Math", 101);
school.enrollStudent(qux, "Math", 101);
school.enrollStudent(qux, "Advanced Math", 102);
school.enrollStudent(foo, "Advanced Math", 102);
school.enrollStudent(foo, "Physics", 202);
school.addGrade(foo, 101, 95);
school.addGrade(bar, 101, 91);
school.addGrade(qux, 101, 93);
school.addGrade(foo, 102, 90);
school.addGrade(qux, 102, 90);


school.getReportCard(foo);

school.courseReport("Math");
school.courseReport("Advanced Math");
school.courseReport("Physics")