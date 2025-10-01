import React from "react";
import {
  Link,
  Outlet,
  ScrollRestoration,
  useNavigation,
} from "react-router-dom";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <div className="loader-spinner"></div>
        <p className="loader-text">Loading...</p>
      </div>
    </div>
  );
};

const RootLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo */}
          <div className="nav-logo">
            <span className="logo-text">📱 ReactApp</span>
          </div>

          {/* Links */}
          <div className="nav-links">
            <Link to={"/posts"} className="nav-link">
              📝 Posts
            </Link>
            <Link to={"/users"} className="nav-link">
              👥 Users
            </Link>
            <Link to={"/todos"} className="nav-link">
              ✅ Todos
            </Link>
          </div>
        </div>
      </nav>

      {isLoading && <Loader />}

      <main className="main-content">
        <ScrollRestoration />
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
