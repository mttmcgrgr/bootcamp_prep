/*******************************************************************************
Write a function disemvowel(string) that takes in a string and returns the
string with all vowels removed.

Examples:

disemvowel('bootcamp'); // => 'btcmp'
disemvowel('PREP'); // => 'PRP'
disemvowel('hello world'); // => 'hll wrld'
*******************************************************************************/

function disemvowel(string) {
  var vowels = ["a","e","i","o","u"];
  var newStr = [];

  string.split("").forEach(function(char){
    if(vowels.indexOf(char.toLowerCase()) === -1){
      newStr.push(char)
    }
  })
  return newStr.join("");
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = disemvowel;
