import React from "react";
import "./Pastha.css";
import a7 from "../assets/a7.png"
import c1 from "../assets/c1.png"; 
import c2 from "../assets/c2.png"; 
import c3 from "../assets/c3.png"; 
import c4 from "../assets/c4.png"; 
import c5 from "../assets/c5.png"; 
import c6 from "../assets/c6.png"; 
import a29 from "../assets/a29.jpg";
import a27 from "../assets/a27.jpg";

import { useNavigate } from "react-router-dom";

const Pastha = () => {
    const navigate = useNavigate();
  return (
     <div>

      {/* TOP HEADER */}
      
        <div className="pastha-hero">

  {/* BACK */}
  <button 
    className="back-btn"
    onClick={() => navigate("/blogs")}
  >
    ← Back
  </button>

  {/* TEXT CENTER */}
  <div className="pastha-hero-text">
    <h1>Creamy Spinach & Mushroom Pasta</h1>

    <p className="meta">
      <span>• Vegetarian</span>
      <span>• By Charles</span>
      <span>• Feb 24, 2026</span>
      <span>• 15 min (For prepare)</span>
    </p>
  </div>

  {/* FULL IMAGE */}
  <div className="pastha-hero-img">
    <img src={a7} alt="Pasta" />
  </div>

</div>


        <div className="recipe-container">

      {/* LEFT SIDE */}
      <div className="recipe-left">
        <p className="recipe-text">
          Creamy Spinach & Mushroom Pasta is the perfect combination of comfort and elegance on a plate.
          This dish brings together tender pasta coated in a rich, velvety cream sauce, balanced beautifully
          with the earthy flavor of sautéed mushrooms and the freshness of vibrant green spinach.
          Every bite is smooth, flavorful, and deeply satisfying.
        </p>

        <img src={c1} alt="Pasta" className="recipe-image" />

  
        <p className="recipe-text">
          The magic of this recipe begins with perfectly cooked pasta, boiled until al dente so it holds
          its shape while absorbing the creamy sauce. In a separate pan, onions and garlic are gently sautéed
          in butter and olive oil, releasing a warm aroma. Mushrooms are then added and cooked until golden brown,
          creating a rich base for the sauce.
          
        </p>
        <div className="recipe-steps-container">
  <div className="steps-left">
    <div className="steps-grid">
      <img src={c2} alt="step1" />
      <img src={c3} alt="step2" />
      <img src={c4} alt="step3" />
      <img src={c5} alt="step4" />
      <img src={c6} alt="step5" />
    </div>
    <p className="steps-text">
      When the cooked pasta is tossed into this creamy mixture, it becomes fully coated,
      allowing the flavors to blend perfectly. A splash of reserved pasta water can be
      added to achieve a smooth and glossy consistency. The final touch is a sprinkle
      of freshly ground black pepper, chili flakes, and chopped parsley.
    </p>
  </div></div>
  <div className="comments-section">
  <h2>Comment</h2>
  <div className="comment-item">
    <img src={a29} alt="user" />
    <div className="comment-content">
      <h4>Priya Sharma</h4>
      <span className="comment-date">Posted: 20 Days ago</span>
      <p>
        “I tried this pasta yesterday and it turned out so creamy and flavorful!
        The mushrooms added such a rich taste. My whole family loved it.”
      </p>
      <div className="comment-actions">
        <span>👍 0</span>
        <span>👎 0</span>
      </div>
      <button className="reply-btn">Reply</button>
    </div>
  </div>
  <div className="comment-reply">
    <img src={a27} alt="author" />
    <div className="comment-content">
     <h4>
        Charles <span className="author-badge">Author</span>
      </h4>
      <span className="comment-date">
        Reply to Priya Sharma • Posted: 20 Days ago
      </span>
      <p>
        “Thank you so much, Priya! I’m so happy your family enjoyed it.
        Mushrooms really do make the sauce extra special 😊”
      </p>
      <button className="reply-btn">Reply</button>
    </div>
  </div>
</div>
      </div>





     




      <div className="recipe-right">
         <div className="recipe-box">
          <h2>Ingredients</h2>
          <ol>
            <li>250g pasta (penne or fettuccine)</li>
            <li>2 cups fresh spinach (washed)</li>
            <li>1 cup mushrooms (sliced)</li>
            <li>3 cloves garlic (minced)</li>
            <li>1 small onion (finely chopped)</li>
            <li>1 cup fresh cream</li>
            <li>½ cup grated parmesan cheese</li>
            <li>1 tbsp olive oil</li>
            <li>1 tbsp butter</li>
            <li>Salt to taste</li>
            <li>Black pepper to taste</li>
            <li>Chili flakes (optional)</li>
            <li>Fresh parsley for garnish</li>
          </ol>
        </div>

         <div className="recipe-box">
          <h2>Why You’ll Love This Recipe</h2>
          <ul>
            <li>Simple and easy to make</li>
            <li>Perfect for quick dinners</li>
            <li>Rich, creamy, and satisfying</li>
            <li>Made with fresh ingredients</li>
            <li>Restaurant-style taste at home</li>
          </ul>
        </div>
  <div className="steps-right">
    <div className="video-box">
      <h3>Watch Video</h3>
      <div className="video-thumbnail">
        <img src={a7} alt="video" />
        <div className="play-btn">▶</div>
      </div>
    </div>
    <div className="comment-box">
      <h3>Leave a Reply</h3>
      <p>Your email address will not be published. Required fields are marked *</p>
        <textarea placeholder="Write comment..." rows="5"></textarea>
        <input type="text" placeholder="Name" />
<input type="email" placeholder="Enter Email" />        
      <button className="post-btn">Post Comment</button>
    </div>










  </div>
</div>
      </div>
    </div>
    // </div>
  );
};

export default Pastha;