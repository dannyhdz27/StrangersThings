import { useState } from "react";
import "./App.css";
import fetchData from "./API/api";
import { Routes, Route, Link } from "react-router-dom";
import PostsComponent from "./components/posts";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <h2>Strangers Things</h2>
      <nav>
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/posts">Posts</Link>
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsComponent />} />
      </Routes>
    </div>
  );
  // {
  //   fetchData();
  // }
}

export default App;
