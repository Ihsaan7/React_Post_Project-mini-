import React from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import UserCard from "../components/UserCard";

const UserList = () => {
  const users = useLoaderData();

  return (
    <div className="user-list-container">
      <h1 className="user-list-title">Users</h1>
      <div className="user-grid">
        {users.map((user) => {
          return <UserCard key={user.id} {...user} />;
        })}
      </div>
    </div>
  );
};

function loader({ request: { signal } }) {
  return axios
    .get("http://localhost:3000/users", { signal })
    .then((res) => res.data);
}

export const userListRoute = {
  loader,
  element: <UserList />,
};
