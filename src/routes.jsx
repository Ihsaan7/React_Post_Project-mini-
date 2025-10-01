import { createBrowserRouter, Navigate } from "react-router-dom";
import { postListRoute } from "./pages/PostList";
import { userListRoute } from "./pages/UserList";
import TodoList from "./pages/TodoList";
import RootLayout from "./layouts/RootLayout";
import Post from "./pages/Post";
import User from "./pages/User";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Navigate to="/posts" /> },
      {
        path: "posts",
        children: [
          { index: true, ...postListRoute },
          { path: ":postId", element: <Post /> },
        ],
      },
      {
        path: "users",
        children: [
          { index: true, ...userListRoute },
          { path: ":userId", element: <User /> },
        ],
      },
      { path: "todos", element: <TodoList /> },
    ],
  },
]);
