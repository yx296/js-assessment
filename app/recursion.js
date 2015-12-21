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

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
