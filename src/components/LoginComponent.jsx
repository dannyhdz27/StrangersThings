import { useState } from "react";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";

export default function LoginForm() {
  const [username, checkUsername] = useState("");
  const [password, checkPassword] = useState("");

  async function loginUser(username, password) {
    const response = await fetch("${BASE_URL}/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: "superman27",
          password: "krypt0n0rbust",
        },
      }),
    });
    const result = await response.json();
    return result;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await loginUser(username, password);
      console.log("Return from Component: ", result);
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
            type="text"
            name="username"
            placeholder="username"
            onChange={(e) => checkUsername(e.target.value)}
          />
          <input
            type="text"
            name="password"
            placeholder="password"
            onChange={(e) => checkPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
