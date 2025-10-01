import React from "react";
import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">MyLogo</div>

        {/* Links */}
        <div className="flex space-x-6 text-gray-600 font-medium">
          <Link to={"/posts"} className="hover:text-blue-500">
            Posts
          </Link>
          <Link to={"/users"} className="hover:text-blue-500">
            Users
          </Link>
          <Link to={"/todos"} className="hover:text-blue-500">
            Todos
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default RootLayout;
