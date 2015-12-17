exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      var elem = arr[i];
      if (item === elem) {
        return i;
      }
    }
    return -1;
  },

  sum : function(arr) {
    return arr.reduce(function(a, b) {
      return a + b;
    }, 0)
  },

  remove : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      var elem = arr[i];
      if (item === elem) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      var elem = arr[i];
      if (item === elem) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for (var i = 0 ; i < arr.length; i++) {
      var elem = arr[i];
      if (elem === item) {
        count++;
      }
    }
    return count;
  },

  duplicates : function(arr) {
    var hash = {}
    var duplicates = [];
    for (var i = 0; i < arr.length; i++) {
      var elem = arr[i];
      hash[elem] ? hash[elem]++ : hash[elem] = 1;
    }

    for (elem in hash) {
      if (hash[elem] >= 2) {
        duplicates.push(elem * 1);
      }
    }

    return duplicates;
  },

  square : function(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i] * arr[i];
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var results = [];
    for (var i = 0; i < arr.length; i++) {
      var elem = arr[i];
      if (elem === target) {
        results.push(i.toString());
      }
    }
    return results;
  }
};
