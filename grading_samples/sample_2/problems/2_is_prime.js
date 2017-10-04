/*******************************************************************************
Write a function `isPrime(number)` that returns a boolean indicating if `number`
is prime or not.

Examples:

isPrime(-7): // => false
isPrime(2); // => true
isPrime(11); // => true
isPrime(15); // => false
*******************************************************************************/
function isprime(number) {
  if (number< 2) {
    return false;
  }
  for ( var i = 2; i < number; i +=1) { //space around operators, nice job realziing you can start at 2! -MM
    if ( number % 2 === 0 || number % 3 === 0) {
      return false;
    //All we need to check for in each iteration is if "number" is equally divisible by "i" - MM
    }
  }
  return true;  //rest of the logic and style looks good! -MM
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPrime;
