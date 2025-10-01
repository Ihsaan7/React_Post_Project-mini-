import React, { useState } from "react";

const TodoCard = ({ id, title, completed, userId }) => {
  const [isCompleted, setIsCompleted] = useState(completed);

  const handleToggle = () => {
    setIsCompleted(!isCompleted);
    // Here you could add API call to update the todo status
  };

  return (
    <div
      className={`todo-card ${isCompleted ? "todo-completed" : "todo-pending"}`}
    >
      <div className="todo-card-content">
        <div className="todo-checkbox-container">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={handleToggle}
            className="todo-checkbox"
            id={`todo-${id}`}
          />
          <label htmlFor={`todo-${id}`} className="todo-checkbox-label">
            <span className="checkmark"></span>
          </label>
        </div>

        <div className="todo-text-content">
          <h3
            className={`todo-title ${
              isCompleted ? "todo-title-completed" : ""
            }`}
          >
            {title}
          </h3>
          <div className="todo-meta">
            <span className="todo-id">ID: {id}</span>
            <span className="todo-user">User: {userId}</span>
            <span
              className={`todo-status ${
                isCompleted ? "status-completed" : "status-pending"
              }`}
            >
              {isCompleted ? "✅ Completed" : "⏳ Pending"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
