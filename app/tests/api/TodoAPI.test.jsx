var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI',()=> {

  beforeEach(()=> {
    localStorage.removeItem('todos');
  });

  it('should exist', ()=> {
    expect(TodoAPI).toExist();
  });

  describe('setTodos',()=> {
    it('should valid todos array',()=> {
      var todos = [{
        id: 23,
        text: 'Test all files',
        completed: false
      }];

      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse( localStorage.getItem('todos') );

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', ()=>{
      var badTodos = {a: 'a'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    })
  });

  describe('getTodos',()=> {
    it('should return empty for bad localStorage data', ()=> {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todo if valid array in localStorage', ()=> {
      var todos = [{
        id: 23,
        text: 'Test all files',
        completed: false
      }];

      localStorage.setItem('todos', JSON.stringify(todos));

      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });

    describe('filterTodos',()=> {
      var todos = [{
          id: 1,
          text: 'Some text here',
          completed: true
        },
        {
          id: 2,
          text: 'Other text here',
          completed: false
        },
        {
          id: 3,
          text: 'Some text here',
          completed: true
        }
      ];

      it('should return all items if showCompleted is true', ()=> {
        var filteredTodos = TodoAPI.filterTodos(todos, true, '');

        expect(filteredTodos.length).toBe(3);
      });
      it('should return only uncompleted items if showCompleted is false', ()=> {
        var filteredTodos = TodoAPI.filterTodos(todos, false, '');

        expect(filteredTodos.length).toBe(1);
      });
      it('should sort by completed status', ()=> {
        var filterTodos = TodoAPI.filterTodos(todos, true, '');
        expect(filterTodos[0].completed).toBe(false);
      });
      it('should filter todos by searchText', ()=> {
        var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');

        expect(filteredTodos.length).toBe(2);
      });
      it('should return all todos if searchText is empty', ()=> {
        var filteredTodos = TodoAPI.filterTodos(todos, true, '');

        expect(filteredTodos.length).toBe(3);
      });
    });
  });
})
