//  4/5 specs passed
//
// Hey <name>, my comments are marked with `-MM` (Mat McGregor)
// It looks like you've got the right logic for most of these, but pay close attention
// to the problem descriptions and limitations! - MM

/*******************************************************************************
Write a function highestScore(students) that takes in an array of student objects
as a parameter. It should return a string that corresponds to the student with
the highest score. The string should contain that student's initials
concatenated with their id. Assume the array contains at least 1 student object and
the student with the highest score is unique (there are no ties).
Example:

var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];

highestScore(students); //=> 'TD2'
*******************************************************************************/

//this is a good example of a problem you can break down into smaller parts.
// one part is iterating through the scores and finding the highest, and another part is
// creating the return value string. Try starting by breaking these into different functions - MM
function highestScore(students) {
  var highest = 0
  for (var i = 0; i = students.lengthl; i++){

  }

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = highestScore;
