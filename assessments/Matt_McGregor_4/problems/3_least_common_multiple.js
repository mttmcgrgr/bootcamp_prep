/*******************************************************************************
Write a function `leastCommonMultiple(num1, num2)` that returns the
lowest number which is a multiple of both inputs.

Examples:

leastCommonMultiple(2, 3) => 6
leastCommonMultiple(6, 10) => 30
leastCommonMultiple(24, 26) => 312
*******************************************************************************/

function leastCommonMultiple(num1, num2) {
  if(num1 < num2){
    var smaller = num1;
    var larger = num2;
  } else {
    var smaller = num2;
    var larger = num1;
  }

  for(var i = larger; i <= smaller * larger; i++){
    if(i % smaller === 0 && i % larger === 0){
      return i;
    }
  }

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = leastCommonMultiple;
