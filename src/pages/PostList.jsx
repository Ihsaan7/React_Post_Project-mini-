import React, { useEffect, useRef } from "react";
import { Form, Link, useLoaderData, useSubmit } from "react-router-dom";
import { PostCard } from "../components/PostCard";
import { getPosts } from "../../api/posts";

const PostList = () => {
  const queryRef = useRef();
  const submit = useSubmit();
  const {
    posts,
    searchParams: { query },
  } = useLoaderData();

  useEffect(() => {
    queryRef.current.value = query || "";
  }, [query]);

  const handleClear = () => {
    queryRef.current.value = "";
    submit(queryRef.current.form);
  };

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
      <div style={{ marginBottom: "var(--spacing-xl)" }}>
        <Form
          style={{
            display: "flex",
            gap: "var(--spacing-md)",
            alignItems: "end",
            padding: "var(--spacing-lg)",
            backgroundColor: "var(--bg-secondary)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--border-primary)",
          }}
        >
          <div style={{ flex: 1 }}>
            <label
              htmlFor="query"
              style={{
                display: "block",
                marginBottom: "var(--spacing-xs)",
                fontWeight: "500",
                color: "var(--text-primary)",
              }}
            >
              Search Posts
            </label>
            <input
              type="search"
              name="query"
              id="query"
              ref={queryRef}
              placeholder="Search by title or content..."
              style={{
                width: "100%",
                padding: "var(--spacing-sm) var(--spacing-md)",
                border: "1px solid var(--border-primary)",
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--bg-tertiary)",
                color: "var(--text-primary)",
                fontSize: "1rem",
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginBottom: 0 }}
          >
            🔍 Filter
          </button>
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="btn btn-secondary"
              style={{ marginBottom: 0 }}
            >
              ✕ Clear
            </button>
          )}
        </Form>
      </div>
      <div className="post-grid">
        {posts.map((post) => {
          return <PostCard key={post.id} {...post} />;
        })}
      </div>
    </div>
  );
};

async function loader({ request: { signal, url } }) {
  const searchParams = new URL(url).searchParams;
  const query = searchParams.get("query") || "";

  // Get all posts first
  const allPosts = await getPosts({ signal });

  // Filter posts client-side if there's a query
  const posts = query
    ? allPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.body.toLowerCase().includes(query.toLowerCase())
      )
    : allPosts;

  return { posts, searchParams: { query } };
}

export const postListRoute = {
  loader,
  element: <PostList />,
};
