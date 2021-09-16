import axios from "axios";
import React, { useState, useEffect } from "react";
import UpdateForm from "./UpdateForm";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [showUpdate, toggleShowUpdate] = useState(false);
  useEffect(() => {
    fetch("/api/posts")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((posts) => {
        setPosts(posts);
      })
      .catch((err) => console.log(err));
  }, [posts]);

  const toggleUpdate = () => {
    toggleShowUpdate((currentState) => !currentState);
  };

  const deletePost = (id) => {
    axios.delete("/api/posts/" + id);
  };

  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <h1>{post.title}</h1>
            <span>{post.data}</span>
            <p>{post.description}</p>
            <div>
              {showUpdate && <UpdateForm id={post._id} />}
              <button onClick={toggleUpdate}>
                {showUpdate ? "Hide" : "Update"}
              </button>
              <button onClick={() => deletePost(post._id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Posts;
