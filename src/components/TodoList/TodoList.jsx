import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="TodoList">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          toggleTodo={() => toggleTodo(index)}
          deleteTodo={() => deleteTodo(index)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
