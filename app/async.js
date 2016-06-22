exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    var res = $.Deferred();
    setTimeout(function() {
      res.resolve(value);
    }, 10);
    return res.promise();
  },

  manipulateRemoteData: function(url) {
    var res = $.Deferred();
    $.ajax(url).then(function(resp) {
      var people = $.map(resp.people, function(person) {
        return person.name;
      });
      res.resolve(people.sort());
    });
    return res.promise();
  }

};
