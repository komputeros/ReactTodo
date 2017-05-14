var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', ()=>{
  it('should existis', () => {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch with entered text', ()=>{
    var searchText = 'Dog';
    var spy = expect.createSpy();
    var todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);

    todosearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todosearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, 'Dog');
  });

  it('should call onSearch with checked value', ()=>{
    var spy = expect.createSpy();
    var todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
    todosearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todosearch.refs.showCompleted);
    expect(spy).toHaveBeenCalledWith(true, '');
  });

});
