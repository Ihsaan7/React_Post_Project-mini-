import { createBrowserRouter, Navigate, useRouteError } from "react-router-dom";
import { postListRoute } from "./pages/PostList";
import { userListRoute } from "./pages/UserList";
import { todoListRoute } from "./pages/TodoList";
import RootLayout from "./layouts/RootLayout";
import { postRoute } from "./pages/Post";
import { userRoute } from "./pages/User";
import { newPostRoute } from "./pages/NewPost";
import { editPostRoute } from "./pages/EditPost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="/posts" /> },
          {
            path: "posts",
            children: [
              { index: true, ...postListRoute },
              {
                path: ":postId",
                children: [
                  { index: true, ...postRoute },
                  { path: "edit", ...editPostRoute },
                ],
              },
              { path: "new", ...newPostRoute },
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
    ],
  },
]);

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          🚨 Error - Something went wrong!
        </h1>
        <p className="text-gray-700 mb-2">
          We're sorry, but an unexpected error occurred.
        </p>

        {import.meta.env.MODE !== "production" && (
          <div className="mt-4 text-left">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Debug Info:
            </h2>
            <pre className="bg-gray-100 p-4 rounded text-sm text-red-500 overflow-x-auto">
              {error.message}
            </pre>
            <pre className="bg-gray-100 p-4 rounded text-xs text-gray-600 overflow-x-auto mt-2">
              {error.stack}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
