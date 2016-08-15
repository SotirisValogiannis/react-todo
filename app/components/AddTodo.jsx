var React = require('react');

var AddTodo = React.createClass({
  PropTypes: {
    onNewTodo: React.PropTypes.func.required
  },
  handleSubmit: function(e){
    e.preventDefault();

    var todoText = this.refs.todoText.value;

    if( todoText.length > 0) {

      this.refs.todoText.value = '';

      // pass the value on onNewTodo() and make it visible on TodoApp.jsx
      this.props.onAddTodo( todoText );
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref="todoText" type="text" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;
