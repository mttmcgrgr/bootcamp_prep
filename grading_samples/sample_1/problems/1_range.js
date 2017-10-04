// 3/7 specs passed
//
// Hey <name>, my comments are marked with `-MM` (Mat McGregor)
// You've got the idea and the logic for most of these!
// Just need some practice with implementation and syntax.
// I made few comments regarding spacing and indentation throughout.
// It may seem like a small issue, but proper style will help a lot
// as we get into more complicated functions



/*******************************************************************************
Write a function range(start, end) that returns an array that contains all
numbers between 'start' and 'end' in sequential order.

Examples:

range(1,4) => [1,2,3,4]
range(4,2) => []
*******************************************************************************/

function range (start, end) {
  var result = []; // good start to the indentation, but the for loop and result should also line up here
   for ( var i = start; i<= end; i +=1){ // leave space around operators
    var iteration = i;  // nice job with the intermediate variable naming, makes code easily readable -MM
    result.push(iteration);
   }
   return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = range
