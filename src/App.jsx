import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import useAuth from "./hooks/useAuth";
import Home from "./components/Home";
import PostsComponent from "./components/posts";
import "./App.css";

function App() {
  const { token, user } = useAuth();
  return (
    <div className="App">
      <h2>Strangers Things</h2>
      <nav>
        <Link to="/">Home</Link>

        <Link to="/posts">Posts</Link>
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
