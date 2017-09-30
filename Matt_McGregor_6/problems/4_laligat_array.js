/*******************************************************************************
Write a function laligatArray(array) that takes in an array of numbers and returns
a new array where each number is replaced with its laligat sum.

A number's laligat sum is the the sum of all the prime numbers less than or equal
to that number.

For example, the laligat sum of 10 is: 2 + 3 + 5 + 7 = 17

Examples:
laligatArray([10, 11, 20, 15]); // => [ 17, 28, 77, 41 ]
laligatArray([1, 2, 3, 4, 5]); // => [ 0, 2, 5, 5, 10 ]
*******************************************************************************/

function laligatArray(array) {
  var result = [];

  array.forEach(function(val){
    result.push(laligatSum(val))
  })
  return result;
}

function laligatSum(num){
  var sum = 0;

  for(var i = 2; i <= num; i++){
    if(isPrime(i)){
      sum += i;
    }
  }
  return sum;
}

function isPrime(num){
  if(num < 2){
    return false;
  } else if(num === 2){
    return true;
  }

  for(var i = 2; i < num; i++ ){
    if(num % i === 0){
      return false;
    }
  }
  return true;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = laligatArray;
