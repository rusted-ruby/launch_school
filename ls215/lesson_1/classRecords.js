/*
write code for a class record summary for students bsaed on exam and exercise scores.
wxams are weighted 65% and exercises are weighted 35%. exams have a max score of 100 and
exercises have variable scores, and a variable number of exercises. But the score of all
exercises in a term always sums to 100. 

to get the student's grade, we average their exam scores. Then we sum their exercise scores,
weight the exam and exercise grades, then assign a letter grade to the result. 

function should take an object made up of student objects. result should be object with two
entries: an array of the student grades, and an array of the exam stats for each exam.

How to do this?
what do we need at the end?
  an array of student grades
    this part is easy: just pass the student object to another function that can calculate
    their final grade and push the result to a new array. We could also do a map here... 
  an array of objects on exam stats. 
    this part will be a little harder... I'd rather not iterate over the score object twice...
    we don't need to though! We can store exam stats within the map loop, as long as the map
    loop returns the student grade, we can use that to build the grade array. Here's what I'm
    thinking
      create an array full of exam stat objects
      for each student object, pass the exam array to a new function that:
      stores the running sum of exam scores
      check the min and max to see if they should be set to one of the new values

*/

function getLetterGrade(grade) {
  if (93 <= grade && grade <= 100) {
    return '(A)'
  } else if (85 <= grade && grade <= 92) {
    return '(B)'
  } else if (77 <= grade && grade <= 84) {
    return '(C)'
  } else if (69 <= grade && grade <= 76) {
    return '(D)'
  } else if (60 <= grade && grade <= 68) {
    return '(E)'
  } else if (0 <= grade && grade <= 59 ){
    return '(F)'
  } else {
    return 'error'
  }
}

function getGrade(student) {
  let examSum = student.scores.exams.reduce((acc, cur) => acc + cur)
  let examAverage = examSum / student.scores.exams.length;
  let exerciseSum = student.scores.exercises.reduce((acc, cur) => acc + cur)
  let finalGrade = Math.round((examAverage * 0.65) + (exerciseSum * 0.35));
  let finalLetter = getLetterGrade(finalGrade);
  return String(finalGrade) + ' ' + finalLetter
}

function processExams(student, examArr) {
  debugger;
  student.scores.exams.forEach((examScore, index) => {
    //if this entry in the exam array doesn't exist, create an empty object for it.
    //otherwise, set it equal to itself.
    examArr[index] = examArr[index] ? examArr[index] : {average: 0, minimum: 100, maximum: 0};
    examArr[index].average += examScore;
    //grossly long, but it works
    examArr[index].minimum = examArr[index].minimum < examScore ? examArr[index].minimum : examScore;
    examArr[index].maximum = examArr[index].maximum > examScore ? examArr[index].maximum : examScore;
  })
}

//there's only 4 exams, but more than 
function computeAverages(examArr, len) {
  examArr.forEach((exam) => {
    exam.average /= len
  })
}


function generateClassRecordSummary(scores) {
  let examArray = []
  let gradeArray = Object.values(scores).map((student, index) => {
    processExams(student, examArray);
    return getGrade(student)
  })
  computeAverages(examArray, Object.values(scores).length)
  return {
    studentGrades: gradeArray,
    exams: examArray
  }
}

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

console.log(generateClassRecordSummary(studentScores));

//378
// returns:
/*
{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}

now, what did LS do? I mostly like my solution, but there's a few things I don't like about it
  Can we assign the letter grade without a super long if / else branch?
  I iterate through the student exam scores array twice: once to calculate the student grade, and once to compute exam stats

  LS's strategy for student grades is essentially the same as mint
  their exam strategy is nice though. instead of having student and exam code together, they
  segregate the two. They create an array of exam score objects, then process that. They also
  have a transpose function that transforms the exam arrays such that each sub array holds the
  scores for each exam, NOT the scores for each student. That way, they can just call a reduce
  on each sub array to sum the scores + get mins and maxs. 
*/

