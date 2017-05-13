var React = require('react');
var ReactDom = require('react-dom');
var TestUrils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');



describe('TodoApp', ()=>{
  it('should existis', () => {
    expect(TodoApp).toExist();
  });

});
