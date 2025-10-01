import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">MyLogo</div>

        {/* Links */}
        <div className="flex space-x-6 text-gray-600 font-medium">
          <a href="#" className="hover:text-blue-500">
            Posts
          </a>
          <a href="#" className="hover:text-blue-500">
            Users
          </a>
          <a href="#" className="hover:text-blue-500">
            Todos
          </a>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default RootLayout;
