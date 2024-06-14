import React from 'react';
import './todo-results.scss';

export const TodoResults = ({ todos }) => {
  const calculateChecked = () => {
    return todos.filter((todo) => todo.checked).length;
  };

  return (
    <div className="todo-results">
      Task Completed: {calculateChecked()}
    </div>
  );
};
