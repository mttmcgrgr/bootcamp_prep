//  6/7 specs passed (-1 for not following directions)
//
// Hey <name>, my comments are marked with `-MM` (Mat McGregor)
// Great job! You got most of it, but be careful to pay attention to the directions and limitations in each problem.
// Also be carfeul with proper styling and indentation. I left comments throughout.

/*******************************************************************************
Write a function myIndexOf(array, ele) that takes an array and an element.
Return the index of the element in the array, or -1 if it doesn't exist. Assume
the `ele` will be a primitive data type (no arrays or objects).
DO NOT USE THE BUILT-IN `indexOf` METHOD IN YOUR SOLUTION!

Examples:

myIndexOf([1,2,3,4,5], 5) => 4
myIndexOf(["a", "b", "c"], "a") => 0
myIndexOf(["a", "b", "c"], "d") => -1
*******************************************************************************/

  function myIndexOf(array, ele){ //this should line up with the closing bracket
  var index = ''; // why is this set to a string?

  for(var i = 0; i < array.length; i += 1){ //what is this for loop doing? Where is i being used?
    index = (array.indexOf(ele));  // not allowed to use indexOf here! You are writing your own. -MM

  }
  return index;
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = myIndexOf;
