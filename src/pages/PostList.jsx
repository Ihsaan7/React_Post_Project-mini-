import React, { useEffect, useRef, useState } from "react";
import { Form, Link, useLoaderData, useSubmit, useSearchParams } from "react-router-dom";
import { PostCard } from "../components/PostCard";
import { getPosts } from "../../api/posts";

const PostList = () => {
  const queryRef = useRef();
  const submit = useSubmit();
  const [searchParams, setSearchParams] = useSearchParams();
  const [showNotification, setShowNotification] = useState(null);
  const {
    posts,
    searchParams: { query },
  } = useLoaderData();

  useEffect(() => {
    queryRef.current.value = query || "";
  }, [query]);

  // Check for success notifications
  useEffect(() => {
    const created = searchParams.get('created');
    const updated = searchParams.get('updated');
    const title = searchParams.get('title');
    const id = searchParams.get('id');

    if (created === 'true') {
      setShowNotification({
        type: 'success',
        message: `✅ Post "${title}" created successfully! (Note: This is a demo - posts aren't actually saved)`,
      });
      // Clean up URL params
      const newParams = new URLSearchParams(searchParams);
      newParams.delete('created');
      newParams.delete('title');
      setSearchParams(newParams, { replace: true });
    } else if (updated === 'true') {
      setShowNotification({
        type: 'success', 
        message: `✅ Post #${id} "${title}" updated successfully! (Note: This is a demo - changes aren't actually saved)`,
      });
      // Clean up URL params
      const newParams = new URLSearchParams(searchParams);
      newParams.delete('updated');
      newParams.delete('title');
      newParams.delete('id');
      setSearchParams(newParams, { replace: true });
    }

    // Auto-hide notification after 5 seconds
    if (created === 'true' || updated === 'true') {
      const timer = setTimeout(() => {
        setShowNotification(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [searchParams, setSearchParams]);

  const handleClear = () => {
    queryRef.current.value = "";
    submit(queryRef.current.form);
  };

  return (
    <div className="post-list-container">
      {/* Success Notification */}
      {showNotification && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: 1000,
            backgroundColor: showNotification.type === 'success' ? "#10b981" : "#ef4444",
            color: "white",
            padding: "var(--spacing-md) var(--spacing-lg)",
            borderRadius: "var(--radius-lg)",
            boxShadow: "var(--shadow-lg)",
            maxWidth: "400px",
            fontSize: "0.95rem",
            fontWeight: "500",
            animation: "slideIn 0.3s ease-out",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span>{showNotification.message}</span>
            <button
              onClick={() => setShowNotification(null)}
              style={{
                background: "none",
                border: "none",
                color: "white",
                fontSize: "1.2rem",
                cursor: "pointer",
                marginLeft: "var(--spacing-md)",
                padding: "0",
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
      
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
        <Link
          to="/posts/new"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--spacing-sm)",
            padding: "var(--spacing-md) var(--spacing-lg)",
            backgroundColor: "var(--bg-accent)",
            color: "white",
            textDecoration: "none",
            borderRadius: "var(--radius-lg)",
            border: "2px solid var(--bg-accent)",
            fontWeight: "600",
            fontSize: "1rem",
            transition: "all 0.2s ease",
            boxShadow: "var(--shadow-md)",
            position: "relative",
            overflow: "hidden",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "var(--bg-accent-hover)";
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "var(--shadow-lg)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "var(--bg-accent)";
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "var(--shadow-md)";
          }}
        >
          <span style={{ fontSize: "1.2rem" }}>✨</span>
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
  try {
    console.log("PostList loader starting...");
    const searchParams = new URL(url).searchParams;
    const query = searchParams.get("query") || "";

    console.log("Fetching posts...");
    // Get all posts first
    const allPosts = await getPosts({ signal });
    console.log("Posts fetched:", allPosts?.length || 0);

    // Filter posts client-side if there's a query
    const posts = query
      ? allPosts.filter(
          (post) =>
            post.title.toLowerCase().includes(query.toLowerCase()) ||
            post.body.toLowerCase().includes(query.toLowerCase())
        )
      : allPosts;

    return { posts, searchParams: { query } };
  } catch (error) {
    console.error("PostList loader error:", error);
    throw error;
  }
}

export const postListRoute = {
  loader,
  element: <PostList />,
};
