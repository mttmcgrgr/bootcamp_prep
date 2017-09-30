//  4/5 specs passed
//
// Hey <name>, my comments are marked with `-MM` (Mat McGregor)
// You're doing great! Looks like you've got the larger concepts working
// (decomposition, method logic, styling), just made a few comments regarding styling
// and execution. Keep it up!

/*******************************************************************************
Write a function `myMap(arr, cb)` that accepts an array and a callback. It should
pass each element, its corresponding index, and the array itself to the callback.
Do not use the built in `Array.prototype.map` method. It should return an array
where each element is the return value of the callback given the element in the
corresponding position. See the examples.

Examples:

myMap([9, 25, 100, 36, 81], Math.sqrt); // => [ 3, 5, 10, 6, 9 ]

function multiply(num1, num2) {
  return num1 * num2;
}

myMap([2, 4, 6, 6], multiply); // => [ 0, 4, 12, 18 ]
*******************************************************************************/

function multiply(num1, num2) {
  return num1 * num2;
} // was this used for your testing? If so, I like the idea, but unnecessary for the solution.
// myMap should be able to take in any callback that accepts the three arguments and returns a value - MM

function myMap(arr, cb) {
  var newArr = [];

  for (var i = 0; i < arr.length; i += 1) {
    var num = arr[i];
    newArr.push(cb(num, i, arr));
  }
  return newArr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = myMap;
