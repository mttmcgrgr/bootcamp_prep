//  3/4 specs passed
//
// Hey <name>, my comments are marked with `-MM` (Mat McGregor)
// You're doing great! Looks like you've got the larger concepts working
// (decomposition, method logic, styling), but make sure to carefully read the problems and
// understand their examples before digging in. See comments on problem 3. - MM

/*******************************************************************************
Write a function numberPrimes(n) that takes in a number, `n`. The function should
return the number of prime numbers less than or equal to `n`. For example,
there are 4 prime numbers less that or equal to 10: 2, 3, 5, 7.

Examples:

numberPrimes(10); // => 4
numberPrimes(12); // => 5
numberPrimes(20); // => 8
numberPrimes(100); // => 25
*******************************************************************************/
function isPrime(n) {
  if (i < 2) {
    return false;
  }
  var i = 2;
  while (i < n) {
    if (n % i === 0) {
      return false;
    }
    i++;
  }
  return true;
}

function numberPrimes(n) {
  var count = 0;
  for (var i = 2; i < n; i++) {
    var num = i;
    if (isPrime(i)) {
      count++;
    }
  }
  return count;  // great job! very clear and easy to read - MM
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = numberPrimes;
