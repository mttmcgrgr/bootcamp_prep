/*******************************************************************************
Write a function stringRange(min, max, step) that takes in 3 numbers as parameters
The function should return a string containing all numbers between `min` and `max`
at `step` intervals concatenated together.

Examples:

stringRange(0, 12, 2) => '024681012'
stringRange(3, 20, 5) => '381318'
*******************************************************************************/

//You almost had it! All the logic was there, you just had an extra space in your
// initial newString delcaration. There is a big difference between an empty stringRange
// and a string with a space in it! - MM

function stringRange(min, max, step) {
  var newstring = " ";
  for (var i = min; i <= max; i += step) { //nice spacing and style overall! - MM
    newstring = newstring + i;
  }
  return newstring;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = stringRange
