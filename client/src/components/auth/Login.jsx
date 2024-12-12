import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", formData);
      login(response.data.token);
    } catch (err) {
      console.error(err.response?.data?.message || "Error during login");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="form-title">Iniciar Sesión</div>
      <div className="form-inputs">
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit" className="input-submit">
          Sign In
        </button>
      </div>
    </form>
  );
};

export default Login;