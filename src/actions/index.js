
let nexTodoId = 0;

const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nexTodoId++,
    text
  }
};

const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
};

const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
};


export { addTodo, toggleTodo, setVisibilityFilter };