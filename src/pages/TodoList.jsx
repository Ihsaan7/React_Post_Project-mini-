import React from "react";
import { useLoaderData } from "react-router-dom";
import { getTodos } from "../../api/todos";
import TodoCard from "../components/TodoCard";

const TodoList = () => {
  const todos = useLoaderData();

  return (
    <div className="todo-list-container">
      <h1 className="todo-list-title">Todos</h1>
      <div className="todo-grid">
        {todos.map((todo) => {
          return <TodoCard key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};

function loader({ request: { signal } }) {
  return getTodos({ signal });
}

export const todoListRoute = {
  loader,
  element: <TodoList />,
};
