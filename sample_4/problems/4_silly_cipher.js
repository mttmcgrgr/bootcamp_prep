/*******************************************************************************
Write a function sillyCipher(sentence, cipher) that takes in an string (sentence)
and an object (cipher). Return a string where every character is replaced with its
cooresponding value in the cipher. If the character doesn't exist in the
cipher, use a dot (.)

Examples:

sillyCipher("apple" , { a : "c", p : "x", l : "r", e : "o"}) //=> 'cxxro'
sillyCipher("apple", { a : "c", p : "x"}) //=> 'cxx..'
sillyCipher("bootcamp prep?", { o : "e", p : "q" , "?" : "!"}) //=> '.ee....q.q..q!'
sillyCipher("twmce", { m : "n", t : "d", w : "a"}) //=> 'dan..''
*******************************************************************************/


// this is great work! concise, well structured, easy to read, perfect style. keep it up! -MM
function sillyCipher(sentence, cipher) {
  var str = '';

  for (var i = 0; i < sentence.length; i++) {
    var char = sentence[i];
    if (cipher[char] === undefined) {
      str += '.';
    } else {
      str += cipher[char];
    }
  }
  return str;
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = sillyCipher;
