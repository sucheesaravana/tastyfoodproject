// import React, { useState } from "react";
// import "./Write.css";
// import b2 from "../assets/b2.png"; 

// function Write  ()  {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div
//       className="write"
//       style={{ backgroundImage: `url(${b2})` }}
//     >
//       <div className="w-overlay">
//         <div className="write-card">

//           <h2>“Welcome Back, Food Lover!”</h2>
//           <p className="w-subtitle">
//             Discover, cook, and share delicious recipes.
//           </p>

//           <h3>Login To Your Account</h3>

//           <input
//             type="text"
//             placeholder="Enter User name or Email Id"
//           />

//           <div className="w-password-box">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Enter Password"
//             />
//             <span
//               className="eye"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               👁
//             </span>
//           </div>

//           <p className="forgot">Forgot Password?</p>

//           <button className="login-btn">Login</button>

//           <p className="register">
//             Don’t have an account? <span>Register</span>
//           </p>

//           <hr />

//           <button className="google-btn">
//             Continue With Google
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Write;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";   // ✅ ADD THIS
import "./Write.css";
import b2 from "../assets/b2.png"; 

function Write() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();   // ✅ INIT NAVIGATION

  const handleLogin = () => {
    // later you can validate username/password
    navigate("/profile");   // ✅ REDIRECT TO PROFILE PAGE
  };

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

          <input type="text" placeholder="Enter User name or Email Id" />

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

          {/* ✅ UPDATED BUTTON */}
          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>

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
}

export default Write;