//  3/7 specs passed
//
// Hey <name>, my comments are marked with `-MM` (Mat McGregor)
// It looks like you've got the right logic for most of these, but the
// implementation is off in some cases. Your style and indentation is
// spot on just about everywhere! keep it up!

/*******************************************************************************
Write a function `arrayBuilder(count)` that takes in a count object and returns
an array filled with the appropriate numbers of elements. The order of
the elements in the array does not matter, but repeated elements should be
grouped.

Examples:

arrayBuilder({'cats': 2, 'dogs': 1}); //=> ['cats', 'cats', 'dogs']
arrayBuilder({}); //=> []
*******************************************************************************/

function arrayBuilder(count) {
  var array = [];

  for (var key in count) {
    var ele = count[i]; // what is ele here? where does this i come from?
    for (var i = 0; i < count[key]; i++) {
      // you were on the right track! you have the key and the value, just add the "key"
      // a "value" number of times into the array! - MM
    }

    if ()
  }
  return array;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = arrayBuilder;
