import React from "react";
import useForm from "../hooks/useForm";
import axios from "axios";

const Form = () => {
  const [post, setPost, handlePost] = useForm({
    title: "",
    description: "",
  });

  const addPost = (e) => {
    e.preventDefault();
    const newPost = {
      title: post.title,
      description: post.description,
    };

    axios.post("/api/posts", newPost);
    setPost({
      title: "",
      description: "",
    });
  };

  return (
    <div>
      <h1>Create todo</h1>
      <input
        type="text"
        name="title"
        placeholder="title"
        value={post.title}
        onChange={handlePost}
      />
      <input
        type="text"
        name="description"
        placeholder="description"
        value={post.description}
        onChange={handlePost}
      />
      <button onClick={addPost}>Post</button>
    </div>
  );
};

export default Form;
