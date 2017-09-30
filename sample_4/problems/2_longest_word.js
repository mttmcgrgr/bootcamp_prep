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
  var longWord = '';
  for (var i = 0; i < sentence.length; i++) {
    var word = sentence[i]; // this will equal a single character in the sentence. split the sentence into words first
    if (word.length > longWord.length ) {
      longWord += word;  // if you want to rename a variable, use "=". "+=" adds word to longword
    }
  }
  return longWord;
}

console.log(longestWord('app academy is cool')); // => 'academy'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestWord;
