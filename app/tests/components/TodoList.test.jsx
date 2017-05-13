var React = require('react');
var ReactDom = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoList = require('TodoList');
var Todo = require('Todo');



describe('TodoList', ()=>{
  it('should existis', () => {
    expect(TodoList).toExist();
  });


  it('should render one Todo component to each item', ()=> {
    var todos = [{
      id: 1,
      text: "do something"
    }, {
      id: 2,
      text: "do something else"
    }];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />)
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
  });

});
