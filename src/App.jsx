import { useState } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import useAuth from "./hooks/useAuth";
import Home from "./components/Home";
import PostsComponent from "./components/posts";
import "./App.css";
import { Profile } from "./components/Profile";
import AuthProvider from "./components/AuthProvider";
import CreatePost from "./components/CreatePost";

const ProtectedRoute = () => {
  const { token } = useAuth();
  if (token) {
    return <Outlet />;
  } else {
    return <Home />;
  }
};

function App() {
  const navigate = useNavigate();
  const { token, user, setToken } = useAuth();
  return (
    <div className="App">
      <h2>Strangers Things</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        {/* {token || <Link to="/">Sign in</Link>} */}
        {token && (
          // <></> is a React Fragment. This allows for rendering two elements without nesting them in another parent element
          <>
            <Link to="/profile">Profile</Link>
            <Link to="/createpost">Make A Post</Link>
            <button
              onClick={() => {
                // clear the token
                setToken(null);
                localStorage.removeItem("token");
                navigate("/");
                // setUser(undefined);
              }}
            >
              Log Out
            </button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsComponent />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
