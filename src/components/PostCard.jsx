import React from "react";
import { Link } from "react-router-dom";

export function PostCard({ id, title, body }) {
  return (
    <div className="post-card">
      <div className="post-card-content">
        <h4 className="post-card-title">{title}</h4>
        <p className="post-card-body">{body}</p>
      </div>
      <div className="post-card-footer">
        <Link to={`/posts/${id}`} className="post-card-link">
          View Post
        </Link>
      </div>
    </div>
  );
}
