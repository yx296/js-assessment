exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return {
      then: function(func) {
        return func(value);
      }
    }
  },

  manipulateRemoteData : function(url) {

  }
};
