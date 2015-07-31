var ActionCreator = (function() {

  return {
    addItem: function(item) {
      Dispatcher.dispatch({
        actionType: Constants.ADD_ITEM,
        data: item
      });      
    }
  };

}());