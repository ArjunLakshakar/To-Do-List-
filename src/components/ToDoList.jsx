import React from 'react';
import ToDoItem from './ToDoItem';


const ToDoList = ({ todos, onToggle, onDelete, onEdit }) => {
  return (
    <ul className="space-y-3">
      {todos.map((todo, index) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          displayId={index + 1}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
