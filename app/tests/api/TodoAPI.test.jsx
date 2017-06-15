
var expect = require('expect');
var TodoAPI = require('TodoAPI');

describe('TodoAPI', ()=>{

  beforeEach(()=>{
    localStorage.removeItem('todos');
  });


  it('should exists', ()=>{
    expect(TodoAPI).toExist();
  });

  describe('Set todos', ()=> {
    it('should set valid todos array', ()=>{
        var todos = [{
          id: 23,
          text: "test",
          completed: false
        }];

        TodoAPI.setTodos(todos);

        var actualTodos = JSON.parse(localStorage.getItem('todos'));

        expect(actualTodos).toEqual(todos);
    });


    it('should not set  invalid array', ()=>{
      var badTodos = {a: 'b'};
      TodoAPI.setTodos(badTodos);
      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', ()=> {
    it('should return empty array for bad localStorage data', ()=>{
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todos i valid array', ()=>{
      var todos = [{
        id: 23,
        text: "test",
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });

  describe('filterTodos', ()=>{
    var todos = [{
        id: 1,
        text: 'test some',
        completed: true
    },
    {
        id: 2,
        text: 'test deiff',
        completed: false
    },
    {
        id: 3,
        text: 'test comm',
        completed: true
    }];



    it('should return all items i showCompleted is true', ()=>{
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return all items i showCompleted is false', ()=>{
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it('should sort by completed status', ()=>{
          var filteredTodos = TodoAPI.filterTodos(todos, true, '');
          expect(filteredTodos[0].completed).toBe(false);
    });
    it('should filter by todos by search text', ()=>{
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
      expect(filteredTodos.length).toBe(1);
    });
    it('should return all todos when searchtext is empty', ()=>{
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
  });

});
