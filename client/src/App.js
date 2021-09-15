import "./app.css";
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);
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
  });

  return (
    <div className="App">
      <h1>Todo app</h1>
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
