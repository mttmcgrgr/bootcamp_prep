/******************************************************************************
Write a function reverseSentence(sentence) that returns a string where all the
words in the input sentence are reversed. Don't use Array#reverse.

Examples:

reverseSentence("Go to the store") => "store the to Go"
reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*******************************************************************************/

function reverseSentence(sentence) {
  var breakup = sentence.split(" ");
  var newsentence = []; // good start with variable declaration, leave space between variables and logic -MM
  while (breakup.length > 0) {
    newsentence.push(breakup.pop());
  }
  return newsentence.join(" ");
}

//Wasn't exactly sure how to limit movement towards infinity so I googled
//and looked at the use of pop from early notes.

//Your method totally works, nice job. If you'd like to limit an interation using a for loop instead
//you could use the length of the breakup array (ex: for(var i = 0; i < breakup.length; i++) - MM


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseSentence
