let studentGrades = [
  { name: 'StudentA', grade: 90.1 },
  { name: 'StudentB', grade: 92 },
  { name: 'StudentC', grade: 91.8 },
  { name: 'StudentD', grade: 95.23 },
  { name: 'StudentE', grade: 91.81 },
];

function sorter(element1, element2) {
  if (element1.grade > element2.grade) {
    return -1
  } else if (element1.grade < element2.grade) {
    return 1
  } else if (element1.grade === element2.grade) {
    return 0
  }
}

studentGrades.sort(sorter);
console.log(studentGrades);