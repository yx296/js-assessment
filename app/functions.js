exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(str2) {
      return str + ', ' + str2;
    }
  },

  makeClosures : function(arr, fn) {
    var funcs = arr.map(function(randomNumber) {
      return function() {
        return fn(randomNumber);
      }
    })    
    return funcs;
  },

  partial : function(fn, str1, str2) {
    var prev_Args = Array.prototype.slice.call(arguments, 1);
    return function() {
      var new_Args = Array.prototype.slice.call(arguments);
      var combinedArgs = prev_Args.concat(new_Args);
      return fn.apply(null, combinedArgs);
    }
  },

  useArguments : function() {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function(a, b) {
      return a + b;
    }, 0);
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {
    var prev_Args = Array.prototype.slice.call(arguments, 1);
    return function() {
      var new_Args = Array.prototype.slice.call(arguments);
      var combinedArgs = prev_Args.concat(new_Args);
      return fn.apply(null, combinedArgs);
    }
  },

  curryIt : function(fn) {

  }
};


























