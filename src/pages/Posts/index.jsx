import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Posts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    async function fetchPosts() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        setError(null);
        setPosts(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
        setError(error.message);
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="container-md my-4">
      <h1>Post List</h1>
      {loading ? (
        <>
          <div className="spinner-border spinner-border-sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>{" "}
          <span>Fetching Posts</span>
        </>
      ) : (
        <>
          {error ? (
            <p>{error}</p>
          ) : (
            <>
              {posts.length > 1 ? (
                <div className="row">
                  {posts.map((post) => (
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3 my-2">
                      <div className="card h-100">
                        <div className="card-body">
                          <h5 className="card-title">
                            {post.title.slice(1, 20)}
                          </h5>
                          <hr />
                          <p>{post.body}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Tidak Ada Post</p>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
