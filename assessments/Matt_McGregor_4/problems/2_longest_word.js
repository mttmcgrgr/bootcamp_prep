/*******************************************************************************
Write a function longestWord(sentence) that retuns the longest word of a sentence.
If there are ties, the function should return the later word.

Examples:

longestWord('app academy is cool'); // => 'academy'
longestWord('hate having hungry hippos'); // => 'hippos'
longestWord('bootcamp'); // => 'bootcamp'
longestWord(''); // => ''
*******************************************************************************/

function longestWord(sentence) {
  var words = sentence.split(" ");

  var longest = words[0];

  words.forEach(function(word){
    if(longest.length <= word.length){
      longest = word;
    }
  })
  return longest;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestWord;
