/******************************************************************************
Write a function firstAndLast(array) that takes in an array of numbers and
returns either:

- the sum of the first and last elements of the array if there is an even
 number of elements

- the difference between the first and last elements of the array if there is an
 odd number of elements.

You can assume the array contains at least one number.

Examples:

firstAndLast([1, 2, 3, 4]); // => 5
firstAndLast([1, 2, 3, 4, 5]); // => -4
firstAndLast([12, 5]); // => 17
firstAndLast([12]); // => 0
firstAndLast([7, 11, 3]); // => 4
*******************************************************************************/

// you had the right answer! but the function name neads to match exported name below.
// feel free to call a TA over if you have an error like this again! -MM

function startAndLast(array) { // <-- should be FirstAndLast
  var start = array[0];
  var last = array[array.length - 1]; // nice intermediate variable step

    if (array.length % 2 === 0) {
      return start + last;
    }else {
      return start - last;
  } // very clean and easy to read! - MM
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = firstAndLast;
