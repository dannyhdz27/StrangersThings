import { useState } from "react";
import React from "react";

export default function LoginComponent() {
  const [username, checkUsername] = useState("");
  const [password, checkPassword] = useState("");
  const login = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
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
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await loginUser(username, password);
      console.log("Return from Component: ", result);
    } catch (err) {
      console.error(Err);
    }
  }
  return (
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
        <div>LoginComponent</div>;
      </form>
    </div>
  );
}
<button>Login</button>;
