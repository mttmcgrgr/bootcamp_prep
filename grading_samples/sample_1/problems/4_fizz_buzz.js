/******************************************************************************
Write a function fizzBuzz(max) that returns an array of numbers under
the max. Each number should be either divisible by 3 or 5, BUT NOT BOTH.

Example:

fizzBuzz(20) => [3, 5, 6, 9, 10, 12, 18]
*******************************************************************************/

// almost had it again! make sure to follow the logic in the prompt exactly.
// it asks you to only return number "under the max" so middle for loop statement should be "i < max" - MM

function fizzBuzz(max) {
  var result = [];
  for (var i = 0; i<=max; i+=1) {// leave space around operators!
      if ((i % 5 === 0 && i % 3 !== 0) || (i% 5 !==0 && i % 3 === 0)){
      result.push(i);  //line should be indented
    } // this bracket should align with opening if statement -MM
  }
  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = fizzBuzz
