import React, { useState } from "react";
import "./Write.css";
import b2 from "../assets/b2.png"; 
const Write = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="write"
      style={{ backgroundImage: `url(${b2})` }}
    >
      <div className="w-overlay">
        <div className="write-card">

          <h2>“Welcome Back, Food Lover!”</h2>
          <p className="w-subtitle">
            Discover, cook, and share delicious recipes.
          </p>

          <h3>Login To Your Account</h3>

          <input
            type="text"
            placeholder="Enter User name or Email Id"
          />

          <div className="w-password-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
            />
            <span
              className="eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁
            </span>
          </div>

          <p className="forgot">Forgot Password?</p>

          <button className="login-btn">Login</button>

          <p className="register">
            Don’t have an account? <span>Register</span>
          </p>

          <hr />

          <button className="google-btn">
            Continue With Google
          </button>

        </div>
      </div>
    </div>
  );
};

export default Write;