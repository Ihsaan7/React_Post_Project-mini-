import React, { createContext, useContext, useState, useEffect } from "react";
import {
  Link,
  Outlet,
  ScrollRestoration,
  useNavigation,
} from "react-router-dom";

// Theme Context
const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

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

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <span className="theme-icon">{theme === "dark" ? "🌙" : "☀️"}</span>
      <span className="theme-text">{theme === "dark" ? "Dark" : "Light"}</span>
    </button>
  );
};

const RootLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  // Theme state management
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo */}
          <div className="nav-logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">ReactHub</span>
          </div>

          {/* Links */}
          <div className="nav-links">
            <Link to={"/posts"} className="nav-link">
              <span className="nav-icon">📝</span>
              <span>Posts</span>
            </Link>
            <Link to={"/users"} className="nav-link">
              <span className="nav-icon">👥</span>
              <span>Users</span>
            </Link>
            <Link to={"/todos"} className="nav-link">
              <span className="nav-icon">✅</span>
              <span>Todos</span>
            </Link>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      </nav>

      {isLoading && <Loader />}

      <main className="main-content">
        <ScrollRestoration />
        <Outlet />
      </main>
    </ThemeContext.Provider>
  );
};

export default RootLayout;
