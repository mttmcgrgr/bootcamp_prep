/******************************************************************************
Write a function passingStudents(students) that accepts an array of student objects.
It should iterate through the list of students and return an array of the names
of all the students who have an average grade of at least 70.

Example:

var students = [
  {
    "name": "Kush",
    "id": 12345,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
  },
  {
    "name": "Ned",
    "id": 55555,
    "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
  },
  {
    "name": "Haseeb",
    "id": 94110,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
  }
];

passingStudents(students); // => [ 'Kush', 'Ned' ]
*******************************************************************************/

function passingStudents(students) {
var average = 0;
var bestStudent = []; // the problem is asking for ALL passing student names, not just best - MM

  for (var i = 0; i < students.length; i += 1) {
    var student = students[i]; // nice intermediate variables, very clear - MM
    var studentName = student.name;
    var studentGrades = student.grades;
    var sum = 0;

    for (var key in studentGrades) { //studentGrades is an array of objects, can't use key yet! - MM
      var studentScore = studentGrades[key].score;
      sum += studentScore;

      }
      average = sum / 3;
      if (average >= 75) { // passing score is 70 not 75 - be careful with instructions - MM
      bestStudent.push(studentName);
      }
    }
  return bestStudent;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = passingStudents;
