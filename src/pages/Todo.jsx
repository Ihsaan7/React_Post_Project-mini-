import React from "react";
import { useLoaderData } from "react-router-dom";

const Todo = () => {
  const todo = useLoaderData();

  return <div>Todo</div>;
};

function loader({ request: { signal } }) {
  return getTodo({ signal });
}

export const todoRoute = {
  loader,
  element: <Todo />,
};
