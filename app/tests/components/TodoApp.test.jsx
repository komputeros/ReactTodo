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
      expect(todoapp.state.todos[0].createdAt).toBeA('number');

  });
  it('should toggle completed value when handleToggle called', ()=>{
    var todoData = {
      id: 11,
      text: 'test text',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');

  });
  it('should toggle todo from completed to incomplete', ()=>{
    var todoData = {
      id: 11,
      text: 'test text',
      completed: true,
      createdAt: 0,
      completedAt: 123
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotExist();

  });
});
