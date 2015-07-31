var ActionCreator = (function() {

  return {
    addItem: function(item) {
      console.log(item);
      Dispatcher.dispatch({
        actionType: Constants.ADD_ITEM,
        data: item
      });      
    }
  };

}());