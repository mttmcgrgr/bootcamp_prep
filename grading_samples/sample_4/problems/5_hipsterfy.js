/*******************************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string containing
several words as input. Remove the last vowel from each word. 'y' is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
*******************************************************************************/

function removeLastVowel(word) { // good idea using helper function
  var hipWord = '';
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = word.length - 1; i > word[0]; i--) { // what does word[0] equal here? right idea iterating from end
    var char = word[i];
    if ((vowels[char] !== -1) && (word[char] > word[i])) { // what does word[char] equal here?
      continue;
    } else {
      hipWord.push(char); //backwards word?
    } // think about the slice() method for removing a single character...how could you build a new
      // string once you have the index of the last vowel? -MM
  }
  return hipWord;
}

function hipsterfy(sentence) {
  var hipSentence = '';
  sentence.push(removeLastVowel(word)); // nice, readable main function

  return hipSentence;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfy;
