import React from 'react';
import { List } from 'native-base';
import Todo from './todo.component';

let TodoList = ({ todos, onTodoClick }) => {
  const todoNode = todos.map((todo) => {
    return (<Todo
      key={todo.id}
      {...todo}
      onClick={() => onTodoClick(todo.id)} />);
  });

  return (<List>{todoNode}</List>);
};

export default TodoList;