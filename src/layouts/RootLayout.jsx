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
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.5rem 0.75rem",
        backgroundColor: "var(--bg-tertiary)",
        border: "1px solid var(--border-primary)",
        borderRadius: "var(--radius-md)",
        color: "var(--text-primary)",
        cursor: "pointer",
        transition: "background-color 0.2s",
      }}
    >
      <span className="theme-icon" style={{ fontSize: "1rem" }}>
        {theme === "dark" ? "🌙" : "☀️"}
      </span>
      <span
        className="theme-text"
        style={{ fontSize: "0.9rem", fontWeight: "500" }}
      >
        {theme === "dark" ? "Dark" : "Light"}
      </span>
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
      <div className="app-container" data-theme={theme}>
        {isLoading && <Loader />}
        <header
          className="app-header"
          style={{
            backgroundColor: "var(--bg-secondary)",
            borderBottom: "1px solid var(--border-primary)",
            padding: "1rem 0",
            position: "sticky",
            top: 0,
            zIndex: 100,
          }}
        >
          <div
            className="header-content"
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link
              to="/"
              className="app-logo"
              style={{
                color: "var(--text-accent)",
                fontSize: "1.5rem",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Post Hub
            </Link>
            <nav className="app-nav">
              <ul
                className="nav-list"
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                }}
              >
                <li className="nav-item">
                  <Link
                    to="/posts"
                    className="nav-link"
                    style={{
                      color: "var(--text-primary)",
                      textDecoration: "none",
                      fontWeight: "500",
                      padding: "0.5rem 0",
                      borderBottom: "2px solid transparent",
                      transition: "border-color 0.2s, color 0.2s",
                    }}
                  >
                    Posts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/users"
                    className="nav-link"
                    style={{
                      color: "var(--text-primary)",
                      textDecoration: "none",
                      fontWeight: "500",
                      padding: "0.5rem 0",
                      borderBottom: "2px solid transparent",
                      transition: "border-color 0.2s, color 0.2s",
                    }}
                  >
                    Users
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/todos"
                    className="nav-link"
                    style={{
                      color: "var(--text-primary)",
                      textDecoration: "none",
                      fontWeight: "500",
                      padding: "0.5rem 0",
                      borderBottom: "2px solid transparent",
                      transition: "border-color 0.2s, color 0.2s",
                    }}
                  >
                    Todos
                  </Link>
                </li>
              </ul>
            </nav>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </header>

        <main className="main-content">
          <ScrollRestoration />
          <Outlet />
        </main>
      </div>
    </ThemeContext.Provider>
  );
};

export default RootLayout;
