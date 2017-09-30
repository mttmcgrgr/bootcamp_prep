/*******************************************************************************
Write a function magicNumbers(max) that returns an array of numbers up to
the max. Each number should be either divisible by 4 or 6, BUT NOT BOTH.

Example:

magicNumbers(20) => [4, 6, 8, 16, 18]
*******************************************************************************/

 // leave proper spacing around operators! - MM

function magicNumbers(max) {
  var result = [];
  for ( var i = 0; i< max; i+=2){
    if (( i % 4 === 0 && i % 6 !==0 ) || (i % 4 !== 0 && i % 6 === 0)) {
      result.push(i);
    }

  }
  return result;

  // nice job on this one - try to avoid long lines of logic like the if statement here
  // you can break them up into separate cases, makes it easier to read
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = magicNumbers;
