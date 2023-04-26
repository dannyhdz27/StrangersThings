import { useState } from "react";
import LoginComponent from "./LoginComponent";
import useAuth from "../hooks/useAuth";
const COHORT_NAME = "2301-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

async function registerUser(username, password) {
  const response = await fetch(`${BASE_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      user: {
        username: "superman27",
        password: "krypt0n0rbust",
      } /* whatever things you need to send to the API */,
    }),
  });
  const result = await response.json();
  console.log("result of registering", result);
  return result;
}

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setToken, user } = useAuth();
  console.log("User from RegisterForm: ", user);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await registerUser(username, password);
      console.log("Result in Component: ", result);
      setToken(result.token);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <h2>REGISTER</h2>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <input
          type="text"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        /> */}
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
