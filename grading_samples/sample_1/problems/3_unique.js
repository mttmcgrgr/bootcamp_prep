/******************************************************************************
Write a function unique(array) that returns an array where all the duplicates
of the input array have been removed; in other words, every element remaining
is unique.

Hint: use indexOf

Example:
unique([1, 1, 2, 3, 3]) => [1, 2, 3]
*******************************************************************************/

//you almost had it! all the logic is there, just a small mistake in the for loop -
// the middle statement should be "array.length". Adding a ""-1" will make you skip over the last element -MM

function unique(array) {
  var result = [];
  for ( var i = 0; i < array.length-1; i +=1) { // leave space around operators
    var inside = array[i];  //try for more descriptive variable name ex: currentNum, or element
    if ( result.indexOf(inside) === -1) {
    result.push(inside); // this line should be indented inside the if statement
    }
  }
  return result;  // good job on all other indentation! -MM
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = unique
