exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var results = [];

    for (var i = 0; i < str.length; i++) {
      var letter = str[i];
      var previousTwoWereDuplicates = true;

      for (var j = i- amount; j < i; j++) {
        if (str[j] !== letter) {
          previousTwoWereDuplicates = false;
        }
      }  

      if (previousTwoWereDuplicates) {
        continue;
      } else {
        results.push(letter);
      }

    }
    return results.join("");
  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {

  }
};
