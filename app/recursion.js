exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var result = [];

    if (dirName) {
      var subDir = findDir(data, dirName);
      recurseThroughFiles(subDir)
    } else {
      recurseThroughFiles(data, dirName);
    }

    function findDir(data, dirName) {
      if (data.dir === dirName) {
        return data;
      } 
      for (var i = 0; i < data.files.length; i++) {
        var fileOrDirectory = data.files[i];
        if (typeof fileOrDirectory === 'object' && fileOrDirectory !== null) {
          return findDir(fileOrDirectory, dirName);
        }
      }
    }

    
    function recurseThroughFiles(data, dirName) {
      for (var i = 0; i < data.files.length; i++) {
        var fileOrDirectory = data.files[i];
        if (typeof fileOrDirectory === 'string') {
          result.push(fileOrDirectory);
        } else {
          recurseThroughFiles(fileOrDirectory);
        }
      }
    }

    

    return result;
  },

  permute: function(arr, accum) {
    var results = [];
    var accum = accum || [];

    if (arr.length === 0) {
      return [accum];
    }

    for (var i = 0; i < arr.length; i++) {
      var num = arr[i];
      var remainingNums = arr.slice(0, i).concat(arr.slice(i+1));
      results = results.concat(recursionAnswers.permute(remainingNums, accum.concat(num)))
    }

    return results;
  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
