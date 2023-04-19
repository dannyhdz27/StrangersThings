import { useState } from "react";
import "./App.css";
import fetchData from "./API/api";
import { Routes, Route } from "react-router-dom";
import PostsComponent from "./components/posts";

function App() {
  return (
    <div className="App">
      <h2>Strangers Things</h2>
      <Routes>
        <Route path="/posts" element={<PostsComponent />} />
      </Routes>
    </div>
  );
  // {
  //   fetchData();
  // }
}

export default App;
