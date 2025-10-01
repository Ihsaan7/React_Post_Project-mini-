import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
import { PostCard } from "../components/PostCard";
import { getPosts } from "../fetch/post";

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
  return getPosts({ signal });
}

export const postListRoute = {
  loader,
  element: <PostList />,
};
