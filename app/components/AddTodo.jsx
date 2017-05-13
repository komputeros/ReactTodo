var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    var todo = String(this.refs.todo.value);

    if(todo.length > 1) {
      this.refs.todo.value = "";
      this.props.onSubmit(todo);
    } else {
      this.refs.todo.focus();
    }

  },

  render: function() {
    return (
        <div>
            <form ref="addform" onSubmit={this.onSubmit}>
              <input type="text" ref="todo" placeholder="Enter Todo" />
              <button className="button expanded">Add</button>
            </form>
        </div>


    );
  }
});

module.exports = AddTodo;
