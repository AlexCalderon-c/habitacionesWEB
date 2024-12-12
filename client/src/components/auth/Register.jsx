import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/register", formData);
      alert("Registration successful");
    } catch (err) {
      console.error(err.response?.data?.message || "Error during registration");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <div className="form-title">Crear Cuenta</div>
      <div className="form-inputs">
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
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
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default Register;