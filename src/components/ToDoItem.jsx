import React from 'react';

const ToDoItem = ({ todo, displayId, onToggle, onDelete, onEdit }) => {
  return (
    <li className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 transition  rounded-xl px-4 py-3 shadow-lg">
      <div className="flex items-center gap-3 overflow-hidden">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 accent-green-600 rounded  "
        />
        <span
          className={`text-xl flex-1 truncate ${todo.completed ? 'text-gray-200' : 'text-gray-400'}`}
        >
          <span className="font-semibold text-blue-500 mr-2 ">{displayId}.</span>
          {todo.text}
        </span>

      </div>
      <div className="flex gap-3 text-lg font-medium">
        <button
          onClick={() => onEdit(todo)}
          className="text-green-600 hover:text-blue-800 transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="text-red-600 hover:text-red-800 transition"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
