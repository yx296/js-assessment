function reduceString(str, amount) {
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
}

console.log(reduceString('aaaabbbb', 2));
console.log(reduceString('xaaabbbb', 2));
console.log(reduceString('aaaabbbb', 1));
console.log(reduceString('aaxxxaabbbb', 2));


