import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PostCard } from "../components/PostCard";
import { getPosts } from "../../api/posts";

const PostList = () => {
  const posts = useLoaderData();

  return (
    <div className="post-list-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "var(--spacing-xl)",
        }}
      >
        <h1 className="post-list-title" style={{ margin: 0 }}>
          Posts
        </h1>
        <Link to="/posts/new" className="btn btn-primary">
          <span>📝</span>
          <span>Create New Post</span>
        </Link>
      </div>
      <div className="post-grid">
        {posts.map((post) => {
          return <PostCard key={post.id} {...post} />;
        })}
      </div>
    </div>
  );
};

export function loader({ request: { signal } }) {
  return getPosts({ signal });
}

export const postListRoute = {
  loader,
  element: <PostList />,
};
