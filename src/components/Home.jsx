import React from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginComponent";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Profile } from "./Profile";

export const ProtectedRoute = () => {
  const { token } = useAuth();
  if (token) {
    return <Outlet />;
  } else {
    return <LoginForm />;
  }
};

const Home = () => {
  return (
    <div className="loginForm">
      <LoginForm />
      <Link to="/register">Don't have an account? Sign Up</Link>
    </div>
  );
};

export default Home;
