var NameBox = (function() {

  var NameItem = React.createClass({
    render: function() {
      return (
        <span>
          {this.props.name}
        </span>
      );
    }
  });

  var NameList = React.createClass({
    render: function() {
      var createItem = function(name, index) {
        return (
          <li className="list-group-item" key={index}>
            <NameItem name={name} />
          </li>
        );
      };
      return (
        <ul className="list-group">
          {this.props.names.map(createItem)}
        </ul>
      );
    }
  });

  var NameForm = React.createClass({
    _onSubmit: function(e) {
      e.preventDefault();
      var name = React.findDOMNode(this.refs.name).value.trim();
      if (!name) {
        return;
      }
      this.props.submitHandler(name);

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
    getInitialState: function() {
      var nameList = [
        'Alice',
        'Bob'
      ];
      return {names: nameList};
    },

    _addNewName: function(name) {
      // NOTE: NEVER mutate this.state directly
      var nameList = this.state.names.concat([name]);
      this.setState({names: nameList});
    },

    render: function() {
      return (
        <div className="row">
          <NameForm submitHandler={this._addNewName} />
          <NameList names={this.state.names} />
        </div>
      );
    }
  });

  return NameBox;

}());
