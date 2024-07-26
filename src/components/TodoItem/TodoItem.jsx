import React, { useState } from 'react';
import './TodoItem.css';

function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(editValue);
    setIsEditing(false);
  };

  return (
    <li className="TodoItem">
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
      ) : (
        <span
          onClick={toggleTodo}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        >
          {todo.text}
        </span>
      )}
      <button onClick={deleteTodo}>Delete</button>
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
    </li>
  );
}

export default TodoItem;
