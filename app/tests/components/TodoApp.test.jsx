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

});
