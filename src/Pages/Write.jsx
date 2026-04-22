// // import React, { useState } from "react";
// // import "./Write.css";
// // import b2 from "../assets/b2.png"; 

// // function Write  ()  {
// //   const [showPassword, setShowPassword] = useState(false);

// //   return (
// //     <div
// //       className="write"
// //       style={{ backgroundImage: `url(${b2})` }}
// //     >
// //       <div className="w-overlay">
// //         <div className="write-card">

// //           <h2>“Welcome Back, Food Lover!”</h2>
// //           <p className="w-subtitle">
// //             Discover, cook, and share delicious recipes.
// //           </p>

// //           <h3>Login To Your Account</h3>

// //           <input
// //             type="text"
// //             placeholder="Enter User name or Email Id"
// //           />

// //           <div className="w-password-box">
// //             <input
// //               type={showPassword ? "text" : "password"}
// //               placeholder="Enter Password"
// //             />
// //             <span
// //               className="eye"
// //               onClick={() => setShowPassword(!showPassword)}
// //             >
// //               👁
// //             </span>
// //           </div>

// //           <p className="forgot">Forgot Password?</p>

// //           <button className="login-btn">Login</button>

// //           <p className="register">
// //             Don’t have an account? <span>Register</span>
// //           </p>

// //           <hr />

// //           <button className="google-btn">
// //             Continue With Google
// //           </button>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Write;




// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";   // ✅ ADD THIS
// // import "./Write.css";
// // import b2 from "../assets/b2.png"; 

// // function Write() {
// //   const [showPassword, setShowPassword] = useState(false);
// //   const navigate = useNavigate();   // ✅ INIT NAVIGATION

// //   const handleLogin = () => {
// //     // later you can validate username/password
// //     navigate("/profile");   // ✅ REDIRECT TO PROFILE PAGE
// //   };

// //   return (
// //     <div
// //       className="write"
// //       style={{ backgroundImage: `url(${b2})` }}
// //     >
// //       <div className="w-overlay">
// //         <div className="write-card">

// //           <h2>“Welcome Back, Food Lover!”</h2>
// //           <p className="w-subtitle">
// //             Discover, cook, and share delicious recipes.
// //           </p>

// //           <h3>Login To Your Account</h3>

// //           <input type="text" placeholder="Enter User name or Email Id" />

// //           <div className="w-password-box">
// //             <input
// //               type={showPassword ? "text" : "password"}
// //               placeholder="Enter Password"
// //             />
// //             <span
// //               className="eye"
// //               onClick={() => setShowPassword(!showPassword)}
// //             >
// //               👁
// //             </span>
// //           </div>

// //           <p className="forgot">Forgot Password?</p>

// //           {/* ✅ UPDATED BUTTON */}
// //           <button className="login-btn" onClick={handleLogin}>
// //             Login
// //           </button>

// //           <p className="register">
// //             Don’t have an account? <span>Register</span>
// //           </p>

// //           <hr />

// //           <button className="google-btn">
// //             Continue With Google
// //           </button>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Write;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Write.css";
// import b2 from "../assets/b2.png"; 

// function Write() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // Reset error
//     setError("");

//     // Validation
//     if (!username.trim() || !password.trim()) {
//       setError("Please enter both username/email and password.");
//       return;
//     }

//     // Optional: basic email format check
//     // const emailRegex = /\S+@\S+\.\S+/;
//     // if (!emailRegex.test(username)) {
//     //   setError("Enter a valid email address.");
//     //   return;
//     // }

//     // If all valid → redirect
//     navigate("/profile");
//   };

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
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />

//           <div className="w-password-box">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Enter Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <span
//               className="eye"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               👁
//             </span>
//           </div>

//           {/* ✅ ERROR MESSAGE */}
//           {error && <p className="error">{error}</p>}

//           <p className="forgot">Forgot Password?</p>

//           <button className="login-btn" onClick={handleLogin}>
//             Login
//           </button>

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
// }

// export default Write;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Write.css";
import b2 from "../assets/b2.png";

function Write() {
  const navigate = useNavigate();

  // Toggle Login/Register
  const [isRegister, setIsRegister] = useState(false);

  // Form States
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // Handle Submit
  const handleSubmit = () => {
    setError("");

    if (isRegister) {
      // Register Validation
      if (!email.trim() || !password.trim()) {
        setError("Please enter email and password.");
        return;
      }

      // (Later: save user data)
      navigate("/profile");
    } else {
      // Login Validation
      if (!username.trim() || !password.trim()) {
        setError("Please enter username/email and password.");
        return;
      }

      navigate("/profile");
    }
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

          {/* Dynamic Heading */}
          <h3>
            {isRegister ? "Create Account" : "Login To Your Account"}
          </h3>

          {/* Username / Email */}
          {isRegister ? (
            <input
              type="text"
              placeholder="Enter Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            <input
              type="text"
              placeholder="Enter User name or Email Id"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          )}

          {/* Password */}
          <div className="w-password-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁
            </span>
          </div>

          {/* Error */}
          {error && <p className="error">{error}</p>}

          {/* Forgot (only for login) */}
          {!isRegister && (
            <p className="forgot">Forgot Password?</p>
          )}

          {/* Button */}
          <button className="login-btn" onClick={handleSubmit}>
            {isRegister ? "Register" : "Login"}
          </button>

          {/* Toggle */}
          <p className="register">
            {isRegister
              ? "Already have an account?"
              : "Don’t have an account?"}
            <span onClick={() => setIsRegister(!isRegister)}>
              {isRegister ? " Login" : " Register"}
            </span>
          </p>

          <hr />

          {/* Google */}
          <button className="google-btn">
            Continue With Google
          </button>

        </div>
      </div>
    </div>
  );
}

export default Write;