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

function hipsterfy(sentence) {
  var newSentence = [];

  sentence.split(" ").forEach(function(word){
    newSentence.push(removeLastVowel(word))
  })

  return newSentence.join(" ");
}

function removeLastVowel(word){
  var vowels = ["a","e","i","o","u"];

  for(var i = word.length - 1; i >= 0; i--){
    var currentEl = word[i]
    if(vowels.includes(currentEl)){
      return word.slice(0, i).concat(word.slice(i + 1))
    }
  }

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfy;
