import React from "react";
import "./WhyJoin.css";
import b5 from "../assets/b5.png";

const WhyJoin = () => {
  return (
    <section className="why-join">
      <h2>Why Join?</h2>

      <div className="w-container">
        
        {/* LEFT SIDE */}
        <div className="w-left">
          <div className="w-image-grid">
            <img src={b5} alt="food" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-right">
          <p className="w-subtitle">
            Discover, cook, and share delicious recipes with thousands of food lovers around the world.
          </p>

          <div className="w-points">
            <div className="w-point">
              <span>1</span>
              <div>
                <h4>Discover New Recipes</h4>
                <p>Explore trending, seasonal, and chef-inspired dishes added daily.</p>
              </div>
            </div>

            <div className="w-point">
              <span>2</span>
              <div>
                <h4>Save Your Favorites</h4>
                <p>Bookmark recipes and create your own personalized collection.</p>
              </div>
            </div>

            <div className="w-point">
              <span>3</span>
              <div>
                <h4>Step-by-Step Guidance</h4>
                <p>Follow clear instructions with cooking tips to get perfect results every time.</p>
              </div>
            </div>

            <div className="w-point">
              <span>4</span>
              <div>
                <h4>Join a Food Lovers Community</h4>
                <p>Connect, comment, and share your cooking experiences with others.</p>
              </div>
            </div>
          </div>

          <button className="w-cta-btn">Start Cooking Today</button>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;