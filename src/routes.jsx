import { createBrowserRouter, Navigate } from "react-router-dom";
import { postListRoute } from "./pages/PostList";
import { userListRoute } from "./pages/UserList";
import { todoListRoute } from "./pages/TodoList";
import RootLayout from "./layouts/RootLayout";
import { postRoute } from "./pages/Post";
import { userRoute } from "./pages/User";

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
          { path: ":postId", ...postRoute },
        ],
      },
      {
        path: "users",
        children: [
          { index: true, ...userListRoute },
          { path: ":userId", ...userRoute },
        ],
      },
      {
        path: "todos",
        children: [{ index: true, ...todoListRoute }],
      },
    ],
  },
]);
