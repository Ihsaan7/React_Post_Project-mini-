import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { getPost } from "../../api/posts";

const Post = () => {
  const post = useLoaderData();

  return (
    <div className="post-detail-container">
      <div className="post-detail-header">
        <Link to="/posts" className="back-link">
          ← Back to Posts
        </Link>
        <div className="post-meta">
          <span className="post-id">Post #{post.id}</span>
          <span className="post-author">by User {post.userId}</span>
        </div>
      </div>

      <article className="post-detail-content">
        <header className="post-header">
          <h1 className="post-detail-title">{post.title}</h1>
        </header>

        <div className="post-body-content">
          <div className="post-text">
            {post.body.split("\n").map((paragraph, index) => (
              <p key={index} className="post-paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <footer className="post-footer">
          <div className="post-actions">
            <Link to={`/users/${post.userId}`} className="author-link">
              View Author Profile
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
};

function loader({ request: { signal }, params }) {
  return getPost(params.postId, { signal });
}

export const postRoute = {
  loader,
  element: <Post />,
};
