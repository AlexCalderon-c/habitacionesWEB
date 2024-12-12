import React, { useState } from "react";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="form-container">
      <div className="col col-2">
        <div className="btn-box">
          <button
            className={`btn ${isLogin ? "btn-1" : ""}`}
            onClick={() => setIsLogin(true)}
          >
            Sign In
          </button>
          <button
            className={`btn ${!isLogin ? "btn-1" : ""}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>
        {isLogin ? <Login /> : <Register />}
      </div>
    </div>
  );
};

export default AuthPage;