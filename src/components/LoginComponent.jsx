import { useState } from "react";
import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { loginUser } from "../API/api";
import useAuth from "../hooks/useAuth";

export default function LoginForm(token) {
  const { setToken, user } = useAuth();

  //trying to navigate to profile once sign in button is clicked
  const navigate = useNavigate();
  // const clickHandler = () => {
  //   navigate("/profile");
  // };

  const [username, checkUsername] = useState("");
  const [password, checkPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await loginUser(username, password);
      console.log("Return from login component: ", result);
      setToken(result.data.token);
      navigate("/profile");
      localStorage.setItem("token", result.data.token);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div>
      <h2>LOG IN</h2>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            required
            type="text"
            name="username"
            placeholder="username"
            onChange={(e) => checkUsername(e.target.value)}
          />
          <input
            required
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => checkPassword(e.target.value)}
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}
