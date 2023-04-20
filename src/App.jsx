import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import useAuth from "./hooks/useAuth";
import Home from "./components/Home";
import PostsComponent from "./components/posts";

function App() {
  const { token, user } = useAuth();
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
      <RegisterForm />
    </div>
  );
  // {
  //   fetchData();
  // }
}

export default App;
