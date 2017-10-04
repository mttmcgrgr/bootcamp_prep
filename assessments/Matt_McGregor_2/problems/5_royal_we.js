/*******************************************************************************
Write a function royalWe(sentence) that returns an string where every word
'I' is replaced with 'we', every word 'mine' is replaced with 'ours', every
word 'my' is replaced with 'our', and every word 'me' is replaced with "us"

Examples:

royalWe("I want to go to the store") => "we want to go to the store"
royalWe("This is my house and you will respect me") => "This is our house and you will respect us"
royalWe("This is mine") => "This is ours"
royalWe("Jump for my love") => "Jump for our love"
*******************************************************************************/

function royalWe(sentence) {
  // your code here...
  var royalWords = {
    "I":"we",
    "mine":"ours",
    "my":"our",
    "me":"us"
  } ;
  var words = sentence.split(" ");
  var royalSentence = [];

  for(var i = 0; i < words.length; i++){
    if(royalWords[words[i]] === undefined ){
      royalSentence.push([words[i]]);
    }else {
      royalSentence.push(royalWords[words[i]]);
    }
  }
  return royalSentence.join(" ");
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = royalWe;
