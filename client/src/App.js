import "./app.css";
// import { useState, useEffect } from "react";
import Posts from "./components/Posts";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <h1>Todo app</h1>
      <Form />
      <Posts />
    </div>
  );
}

export default App;
