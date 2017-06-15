var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');



describe('TodoApp', ()=>{
  it('should existis', () => {
    expect(TodoApp).toExist();
  });

  it('should add to do to todolist and handle', ()=>{
      var todoText = 'Test text';
      var todoapp = TestUtils.renderIntoDocument(<TodoApp/>);

      todoapp.setState({todos: []});
      todoapp.handleAddTodo(todoText);

      expect(todoapp.state.todos[0].text).toBe(todoText);

  });
  it('should toggle completed value when handleToggle called', ()=>{
    var todoData = {
      id: 11,
      text: 'test text',
      completed: false
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);

  });
});
