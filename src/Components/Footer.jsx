import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import b1 from "../assets/b1.png";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      {/* Top Newsletter Section */}
      <div className="newsletter">
        <h2>Stay Updated with Fresh Recipes</h2>
        <p>
          Get delicious recipes, cooking tips, and trending food ideas delivered
          straight to your inbox. No spam, just tasty inspiration.
        </p>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter Email Address" />
          <button>Subscribe Now</button>
        </div>
        <small>
          We respect your privacy. Unsubscribe anytime.
        </small>
      </div>
      {/* Footer Main */}
      <footer className="footer">
        <div className="footer-container">
          
          {/* Logo + Contact */}
          <div className="footer-col">
            <img src={b1} alt="logo" />
            <p>Email: support@gmail.com</p>
            <p>Phone: +91 XXXXX XXXXX</p>
            <p>Location: Chennai, India</p>
          </div>
          {/* Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>Blog</li>
              <li>Recipes</li>
              <li>Write</li>
            </ul>
          </div>
          {/* Categories */}
          <div className="footer-col">
            <h3>Categories</h3>
            <ul>
              <li>Desserts</li>
              <li>Quick Meals</li>
              <li>Vegetarian</li>
              <li>Non-Vegetarian</li>
              <li>Drinks</li>
            </ul>
          </div>
          {/* Newsletter Small */}
          <div className="footer-col">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Get fresh recipes and cooking inspiration every week.</p>
            <div className="footer-input">
              <input type="email" placeholder="Enter Email Address" />
              <button>Subscribe Now</button>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
             2026 Your Website Name. All rights reserved. <br />
            Privacy Policy | Terms & Conditions
          </p>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            <FaTwitter />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;