import React from "react";
import { Link } from "react-router-dom";

export function PostCard({ id, title, body }) {
  return (
    <div className="post-card" style={{
      border: "1px solid var(--border-primary)",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      backgroundColor: "var(--bg-secondary)",
      boxShadow: "var(--shadow-sm)",
      transition: "transform 0.2s, box-shadow 0.2s",
      margin: "0.75rem 0",
    }}>
      <div className="post-card-content" style={{
        padding: "1rem",
      }}>
        <h4 className="post-card-title" style={{
          color: "var(--text-primary)",
          marginBottom: "0.5rem",
          fontSize: "1.1rem",
          fontWeight: "600",
        }}>{title}</h4>
        <p className="post-card-body" style={{
          color: "var(--text-secondary)",
          fontSize: "0.9rem",
          lineHeight: "1.4",
        }}>{body}</p>
      </div>
      <div className="post-card-footer" style={{
        padding: "0.75rem 1rem",
        borderTop: "1px solid var(--border-primary)",
        backgroundColor: "var(--bg-tertiary)",
        display: "flex",
        justifyContent: "flex-end",
      }}>
        <Link to={`/posts/${id}`} className="post-card-link" style={{
          backgroundColor: "var(--bg-accent)",
          color: "white",
          padding: "0.4rem 0.75rem",
          borderRadius: "var(--radius-sm)",
          textDecoration: "none",
          fontSize: "0.85rem",
          fontWeight: "500",
          transition: "background-color 0.2s",
        }}>
          View Post
        </Link>
      </div>
    </div>
  );
}
