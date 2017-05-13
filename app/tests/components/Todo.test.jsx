var React = require('react');
var ReactDom = require('react-dom');
var TestUrils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var Todo = require('Todo');



describe('Todo', ()=>{
  it('should existis', () => {
    expect(Todo).toExist();
  });

});
