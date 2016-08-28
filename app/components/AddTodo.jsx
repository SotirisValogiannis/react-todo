var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  PropTypes: {
    onNewTodo: React.PropTypes.func.required
  },
  handleSubmit: function(e){
    e.preventDefault();
    var dispatch = this.props.dispatch;
    var todoText = this.refs.todoText.value;

    if( todoText.length > 0) {

      this.refs.todoText.value = '';
      dispatch(actions.addTodo( todoText ));
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function() {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input ref="todoText" type="text" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
});

export default connect()(AddTodo);
