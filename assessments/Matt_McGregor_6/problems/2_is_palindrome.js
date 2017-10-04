/*******************************************************************************
Write a function isPalindrome(sentence) that returns true if the characters of the
sentence string form a palindrome, false otherwise. A palindrome is a word or
phrase that is that is the same forwards and backwards.

Examples:

isPalindrome('rats live on no evil star'); // => true
isPalindrome('stella won no wallets'); // => true
isPalindrome('racecar'); // => true
isPalindrome('hello world'); // => false
*******************************************************************************/

  function isPalindrome(sentence) {
     var letters = sentence.split(" ").join("");

    for(var i = 0; i < letters.length - 1 / 2; i++){
      var front = 0 + i;
      var end = (letters.length - 1) - i;
      if(letters[front] !== letters[end]){
        return false;
      }
    }
    return true;

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPalindrome;
