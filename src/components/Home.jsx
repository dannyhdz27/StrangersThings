import React from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginComponent";
import { Routes, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <LoginForm />
      <Link to="/register">Don't have an account? Sign Up</Link>
    </div>
  );
};

export default Home;
