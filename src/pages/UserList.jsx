import React from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import UserCard from "../components/UserCard";
import { getUsers } from "../fetch/user";

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
  return getUsers({ signal });
}
export const userListRoute = {
  loader,
  element: <UserList />,
};
