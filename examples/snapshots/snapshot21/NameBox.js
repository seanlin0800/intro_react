(function() {

  function getStateFromStore() {
    return {
      names: Store.getAll()
    };
  }

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
    _renderNames: function() {
      var names = [];

      for (var key in this.props.names) {
        names.push(
          <li className="list-group-item" key={key}>
            <NameItem name={this.props.names[key].name} />
          </li>
        );
      }

      return names;
    },

    render: function() {
      return (
        <ul className="list-group">
          {this._renderNames()}
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
    getInitialState: function() {
      return getStateFromStore();
    },

    componentDidMount: function() {
      Store.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
      Store.removeChangeListener(this._onChange);
    },

    _onChange: function() {
      this.setState(getStateFromStore());
    },

    render: function() {
      return (
        <div className="row">
          <NameForm />
          <NameList names={this.state.names} />
        </div>
      );
    }
  });

  React.render(<NameBox />, document.getElementById('app'));

}());      
