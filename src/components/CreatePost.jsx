import React from "react";
import { makePost } from "../API/api";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { token } = useAuth();
  async function submitPost(e) {
    e.preventDefault();
    try {
      const result = await makePost(token, title, description);
      console.log("Return from makePost component: ", result);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h2>MAKE POST</h2>
      <div className="createPostForm">
        <form onSubmit={submitPost}>
          <input
            required
            type="text"
            name="title"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            rows="10"
            cols="50"
            required
            type="text"
            name="description"
            placeholder="description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <button>Create Post</button>
        </form>
      </div>
    </div>
  );
}
