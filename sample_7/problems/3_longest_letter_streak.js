/*******************************************************************************
Write a function longestLetterStreak(str, searchLetters) that takes in 2 arguments:
 - str: A string of uppercase characters.
 - searchLetters: An array of uppercase single-character strings (i.e ["A", "F", "K"])

The function should return the length of the longest streak of letters (consecutive
letters) in the `str` that are in the `searchLetters`.

Note that a streak does not have to consist of the same letter repeated, a streak
just needs to contains letters from the `searchLetters` array.

Examples:

longestLetterStreak("ACCA", ["C"]); // => 2
longestLetterStreak("YACCADCA", ["C", "A"]); // => 4
longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"]); // => 3
longestLetterStreak("YYYYY", ["Z", "K", "Y"]); // => 5
*******************************************************************************/

// be sure to carefully read the problem and examples. a streak doesn't have to be the same letter! - MM

function longestLetterStreak(str, searchLetters) {
  var obj = {};
  var highest = []; //remember what we're looking to return - the length (number) of the longest streak  - MM


  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (searchLetters.indexOf(char) > -1) {
      obj[char] += 1; // this is accumulating a count for each letter instead of tracking a streak - MM

    }
  }
  for (key in obj) {
    highest.push(obj[key]);
  }
  var high = 0;
  for (var i = 0; i < highest.length; i++) {
    var num = highest[i];
    if (num > high) {
      high = num;
    }
  }
  return high;

  //this would work to find the most common letter in searchLetters, but we need to find a streak of them - MM
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestLetterStreak;
