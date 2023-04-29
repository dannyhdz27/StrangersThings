import React from "react";

import LoginForm from "./LoginComponent";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Home = () => {
  return (
    <div className="loginForm">
      <LoginForm />
      <Link to="/register">Don't have an account? Sign Up</Link>
    </div>
  );
};

export default Home;
