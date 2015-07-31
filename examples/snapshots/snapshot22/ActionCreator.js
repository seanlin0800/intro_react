var ActionCreator = (function() {

  return {
    addItem: function(item) {
      Dispatcher.dispatch({
        actionType: Constants.ADD_ITEM,
        data: item
      });      
    },

    removeItem: function(id) {
      Dispatcher.dispatch({
        actionType: Constants.REMOVE_ITEM,
        data: id
      });      
    }
  };

}());