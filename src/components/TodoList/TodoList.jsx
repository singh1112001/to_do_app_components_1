import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
  return (
    <ul className="TodoList">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          toggleTodo={() => toggleTodo(index)}
          deleteTodo={() => deleteTodo(index)}
          editTodo={(newText) => editTodo(index, newText)}
        />
      ))}
    </ul>
  );
}

export default TodoList;

