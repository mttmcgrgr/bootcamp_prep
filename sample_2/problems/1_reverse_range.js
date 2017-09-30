// 7/10 specs passed
//
// Hey <name>, my comments are marked with `-MM` (Mat McGregor)
// Great job! You've got the bulk of it. I made a few syntax and style comments.
// Make sure to always leave proper spacing around operators in for loops.

/*******************************************************************************
Write a function reverseRange(start, end) that returns an array that contains all
numbers between 'start' and 'end' (exclusive) in reverse-sequential order. Use a
loop to do this.

Examples:

reverseRange(2,7) => [6, 5, 4, 3]
reverseRange(4,2) => []
*******************************************************************************/

function reverseRange(start, end) {
  var result = [];
  for (var i = end -1; i> start; i -= 1) { //leave space around operators
    result.push(i);
  }
  return result; // nice indentation and style overall! - MM
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseRange;
