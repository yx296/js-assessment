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
    return {
      then: function(func) {
        $.get(url, function(data) {
          var peopleArr = data.people;
          var results = peopleArr.map(function(person) {
            return person.name;
          });
          results.sort();
          func(results);
        })
      }
    }
  }
};



