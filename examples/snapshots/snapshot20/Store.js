var Store = (function() {

  var _names = {};

  function create(name) {
    // Using the current timestamp + random number in place of a real id.
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    _names[id] = {
      id: id,
      name: name
    };
  }

  var Store = {
    getAll: function() {
      return _names;
    }
  };

  // Register callback to handle all updates
  Dispatcher.register(function(action) {
    switch(action.actionType) {
      case Constants.ADD_ITEM:
        create(action.data);
      default:
        // no-op
    }
  });

  return Store;
}());