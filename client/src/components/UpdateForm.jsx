import React from "react";
import useForm from "../hooks/useForm";
import axios from "axios";

// incase of that render ug, consider passing in the values
// of posts into this component
const UpdateForm = ({ id }) => {
  const [post, setPost, handlePost] = useForm({
    title: "",
    description: "",
  });

  const updatePost = (id) => {
    axios.patch("/api/posts/" + id, post);
    setPost({
      title: "",
      description: "",
    });
  };

  return (
    <div>
      <h1>Update todo</h1>
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
      <button onClick={() => updatePost(id)}>Update</button>
    </div>
  );
};

export default UpdateForm;
