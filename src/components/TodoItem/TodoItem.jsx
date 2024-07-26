import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className="TodoItem">
      <span
        onClick={toggleTodo}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {todo.text}
      </span>
      <button onClick={deleteTodo} className="delete-button">Delete</button>
    </li>
  );
}

export default TodoItem;
