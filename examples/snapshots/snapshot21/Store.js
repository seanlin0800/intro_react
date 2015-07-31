var Store = (function() {

  var CHANGE_EVENT = 'change';
  var _names = {};

  function create(name) {
    // Using the current timestamp + random number in place of a real id.
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    _names[id] = {
      id: id,
      name: name
    };
  }

  var Store = Object.assign({}, EventEmitter.prototype, {
    getAll: function() {
      return _names;
    },

    emitChange: function() {
      this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    }
  });

  // Register callback to handle all updates
  Dispatcher.register(function(action) {
    switch(action.actionType) {
      case Constants.ADD_ITEM:
        create(action.data);
        Store.emitChange();
      default:
        // no-op
    }
  });

  return Store;
}());