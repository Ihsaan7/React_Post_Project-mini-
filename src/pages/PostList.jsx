import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
import { PostCard } from "../components/PostCard";

const PostList = () => {
  const posts = useLoaderData();

  return (
    <div className="post-list-container">
      <h1 className="post-list-title">Posts</h1>
      <div className="post-grid">
        {posts.map((post) => {
          return <PostCard key={post.id} {...post} />;
        })}
      </div>
    </div>
  );
};

export function loader({ request: { signal } }) {
  return axios
    .get("http://localhost:3000/posts", { signal })
    .then((res) => res.data);
}

export const postListRoute = {
  loader,
  element: <PostList />,
};
