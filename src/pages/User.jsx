import React from "react";
import { getUser } from "../../api/users";
import { useLoaderData, Link } from "react-router-dom";
import { getTodos } from "../../api/todos";

const User = () => {
  const { user, todos } = useLoaderData();

  return (
    <div className="user-detail-container">
      <div className="user-detail-header">
        <Link to="/users" className="back-link">
          ← Back to Users
        </Link>
      </div>

      <div className="user-profile">
        <div className="user-profile-header">
          <div className="user-detail-avatar">
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div className="user-title-info">
            <h1 className="user-detail-name">{user.name}</h1>
            <p className="user-detail-username">@{user.username}</p>
            <span className="user-detail-id">User ID: {user.id}</span>
          </div>
        </div>

        <div className="user-profile-content">
          <div className="user-info-section">
            <h2 className="section-title">Contact Information</h2>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-icon">📧</span>
                <div className="info-content">
                  <span className="info-label">Email</span>
                  <span className="info-value">{user.email}</span>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📞</span>
                <div className="info-content">
                  <span className="info-label">Phone</span>
                  <span className="info-value">{user.phone}</span>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">🌐</span>
                <div className="info-content">
                  <span className="info-label">Website</span>
                  <a
                    href={`https://${user.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info-link"
                  >
                    {user.website}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="user-info-section">
            <h2 className="section-title">Address</h2>
            <div className="address-card">
              <div className="address-content">
                <p className="address-line">
                  {user.address.street}, {user.address.suite}
                </p>
                <p className="address-line">
                  {user.address.city}, {user.address.zipcode}
                </p>
                <div className="coordinates">
                  <span className="coord-label">Coordinates:</span>
                  <span className="coord-value">
                    {user.address.geo.lat}, {user.address.geo.lng}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="user-info-section">
            <h2 className="section-title">Company</h2>
            <div className="company-card">
              <h3 className="company-name">{user.company.name}</h3>
              <p className="company-catchphrase">
                "{user.company.catchPhrase}"
              </p>
              <p className="company-bs">{user.company.bs}</p>
            </div>
          </div>
        </div>
      </div>

      {/* User Todos Section */}
      <section className="user-todos-section">
        <div className="todos-header">
          <h2 className="todos-title">
            ✅ {user.name}'s Todos ({todos.length})
          </h2>
          <p className="todos-subtitle">
            Tasks and activities managed by this user
          </p>
        </div>

        <div className="todos-stats">
          <div className="stat-card completed">
            <span className="stat-number">
              {todos.filter((todo) => todo.completed).length}
            </span>
            <span className="stat-label">Completed</span>
          </div>
          <div className="stat-card pending">
            <span className="stat-number">
              {todos.filter((todo) => !todo.completed).length}
            </span>
            <span className="stat-label">Pending</span>
          </div>
          <div className="stat-card total">
            <span className="stat-number">{todos.length}</span>
            <span className="stat-label">Total Tasks</span>
          </div>
        </div>

        <div className="todos-list">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <div
                key={todo.id}
                className={`user-todo-card ${
                  todo.completed ? "todo-completed" : "todo-pending"
                }`}
              >
                <div className="todo-status-indicator">
                  <span
                    className={`status-icon ${
                      todo.completed ? "completed" : "pending"
                    }`}
                  >
                    {todo.completed ? "✅" : "⏳"}
                  </span>
                </div>
                <div className="todo-content">
                  <h4
                    className={`todo-title ${
                      todo.completed ? "completed" : ""
                    }`}
                  >
                    {todo.title}
                  </h4>
                  <div className="todo-meta">
                    <span className="todo-id">Task #{todo.id}</span>
                    <span
                      className={`todo-status-text ${
                        todo.completed ? "completed" : "pending"
                      }`}
                    >
                      {todo.completed ? "Completed" : "In Progress"}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-todos">
              <p className="no-todos-text">
                🤔 This user hasn't created any todos yet.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

async function loader({ request: { signal }, params }) {
  const user = await getUser(params.userId, { signal });
  const allTodos = await getTodos({ signal });

  // Filter todos for this specific user
  const todos = allTodos.filter(
    (todo) => todo.userId === parseInt(params.userId)
  );

  return { user, todos };
}

export const userRoute = {
  loader,
  element: <User />,
};
