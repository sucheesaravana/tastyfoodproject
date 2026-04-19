import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import b1 from "../assets/b1.png";


function Navbar() {
  return (
    <nav className="navbar">
      
        <div className="navbar-logo">
        <img src={b1} alt="logo" />
      </div>

      <div className="navbar-search">
        <input type="text" placeholder="🔍 Search here..." />
         </div>

      {/* Nav Links */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/write">Write</Link></li>
      </ul>

      {/* Right Section */}
      <div className="navbar-right">
         <span>Account</span>
        <Link to="/subscribe">
          <button className="subscribe-btn">Subscribe</button></Link>
      </div>
     
    </nav>
  );
}

export default Navbar;