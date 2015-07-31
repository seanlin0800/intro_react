(function() {

  var NameForm = React.createClass({
    _onSubmit: function(e) {
      e.preventDefault();
      var name = React.findDOMNode(this.refs.name).value.trim();
      if (!name) {
        return;
      }

      ActionCreator.addItem(name);

      React.findDOMNode(this.refs.name).value = '';
      return;
    },

    render: function() {
      return (
        <form onSubmit={this._onSubmit}>
          <input type="text" ref="name" />
          <button type="submit" className="btn btn-default">Add</button>
        </form>
      );
    }
  });

  var NameBox = React.createClass({
    render: function() {
      return (
        <div className="row">
          <NameForm />
        </div>
      );
    }
  });

  React.render(<NameBox />, document.getElementById('app'));

}());      
