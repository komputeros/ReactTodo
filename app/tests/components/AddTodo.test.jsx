var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call onSubmit if text entered', () => {
    var spy = expect.createSpy();

    var addtodo = TestUtils.renderIntoDocument(<AddTodo onSubmit={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addtodo));
    addtodo.refs.todo.value = 'Test Todo';

    TestUtils.Simulate.submit(addtodo.refs.addform); // .submit($el.find('form')[0])

    expect(spy).toHaveBeenCalledWith("Test Todo");

  });

  it('should not call onSubmit if empty', () => {
    var spy = expect.createSpy();

    var addtodo = TestUtils.renderIntoDocument(<AddTodo onSubmit={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addtodo));
    addtodo.refs.todo.value = '';
    TestUtils.Simulate.submit(addtodo.refs.addform);

    expect(spy).toNotHaveBeenCalled();

  });

});
