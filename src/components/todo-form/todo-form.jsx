import React, { useState } from 'react';
import './todo-form.scss';

export const TodoForm = ({ todos, setTodos }) => {
  const [task, setTask] = useState('');

  const handleAddTodo = () => {
    if (task.trim()) {
      const newTodo = {
        id: Date.now(),
        label: task,
        checked: false,
      };
      setTodos([...todos, newTodo]);
      setTask('');
    }
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
