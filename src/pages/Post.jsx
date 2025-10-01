import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { getPost } from "../../api/posts";
import { getUser } from "../../api/users";
import { getComments } from "../../api/comments";

const Post = () => {
  const { post, user, comments } = useLoaderData();

  return (
    <div className="post-detail-container">
      <div className="post-detail-header">
        <Link to="/posts" className="back-link">
          ← Back to Posts
        </Link>
        <div className="post-meta">
          <span className="post-id">Post #{post.id}</span>
          <span className="post-date">📅 Published</span>
        </div>
      </div>

      {/* Post Content */}
      <article className="post-detail-content">
        <header className="post-header">
          <h1 className="post-detail-title">{post.title}</h1>
        </header>

        {/* Author Information */}
        <div className="post-author-section">
          <div className="author-card">
            <div className="author-avatar">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="author-info">
              <h3 className="author-name">{user.name}</h3>
              <p className="author-username">@{user.username}</p>
              <p className="author-email">📧 {user.email}</p>
            </div>
            <Link to={`/users/${user.id}`} className="author-profile-link">
              View Profile
            </Link>
          </div>
        </div>

        {/* Post Body */}
        <div className="post-body-content">
          <div className="post-text">
            {post.body.split("\n").map((paragraph, index) => (
              <p key={index} className="post-paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      {/* Comments Section */}
      <section className="comments-section">
        <div className="comments-header">
          <h2 className="comments-title">💬 Comments ({comments.length})</h2>
          <p className="comments-subtitle">
            What others are saying about this post
          </p>
        </div>

        <div className="comments-list">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className="comment-card">
                <div className="comment-header">
                  <div className="comment-author">
                    <div className="comment-avatar">
                      {comment.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <div className="comment-author-info">
                      <h4 className="comment-author-name">{comment.name}</h4>
                      <p className="comment-author-email">{comment.email}</p>
                    </div>
                  </div>
                  <span className="comment-id">#{comment.id}</span>
                </div>
                <div className="comment-body">
                  {comment.body.split("\n").map((paragraph, index) => (
                    <p key={index} className="comment-paragraph">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="no-comments">
              <p className="no-comments-text">
                🤔 No comments yet. Be the first to share your thoughts!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

async function loader({ request: { signal }, params }) {
  const post = await getPost(params.postId, { signal });
  const user = await getUser(post.userId, { signal });
  const allComments = await getComments({ signal });

  // Filter comments for this specific post
  const comments = allComments.filter(
    (comment) => comment.postId === parseInt(params.postId)
  );

  return { post, user, comments };
}

export const postRoute = {
  loader,
  element: <Post />,
};
