import React, { useState } from 'react';

import ToDoList from './components/ToDoList';
import Header from './Components/Header';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    if (!task.trim()) return;

    if (editId !== null) {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === editId ? { ...todo, text: task } : todo
        )
      );
      setEditId(null);
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: task,
          completed: false,
        },
      ]);
    }

    setTask('');
  };

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    if (editId === id) {
      setTask('');
      setEditId(null);
    }
  };

  const handleEdit = (todo) => {
    setTask(todo.text);
    setEditId(todo.id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white flex flex-col items-center p-6">
      <Header />
      <div className="w-full max-w-2xl bg-gray-800 rounded-2xl shadow-2xl p-6 mt-8">
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-800 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition font-semibold shadow-lg"
          >
            {editId !== null ? 'Update' : 'Add'}
          </button>
        </div>
        <ToDoList
          todos={todos}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>
    </div>
  );
};

export default App;
