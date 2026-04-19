import React from "react";
import "./Recipes.css"
import b4 from "../assets/b4.png";
import AllRecipes from "../Sessions/AllRecipes";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

import a17 from "../assets/a17.jpg";
import a16 from "../assets/a16.jpg";
import a12 from "../assets/a12.jpg";
import a15 from "../assets/a15.jpg";
import a19 from "../assets/a19.jpg";
import b6 from "../assets/b6.png";

function Recipes() {
  const dataa = [
    {
      img: a17,
      title: "Avocado Toast with Poached Egg",
      time: "15 min",
      level: "Easy",
      desc: "The perfect brunch staple. Crispy sourdough, creamy avocado mash, and a perfectly runny poached egg.",
      author: "Sara Jenkins",
      rating: "4.5",
    },
    {
      img: a12,
      title: "Grilled Salmon with Asparagus",
      time: "30 min",
      level: "Medium",
      desc: "Healthy and flavorful grilled salmon served with crisp lemon-garlic asparagus.",
      author: "Chef khan",
      rating: "4.5",
    },
    {
      img: a16,
      title: "Decadent Chocolate Lava Cake",
      time: "40 min",
      level: "Hard",
      desc: "A rich chocolate cake with a molten center that flows out when you cut into it.",
      author: "Isabella cristia",
      rating: "4.5",
    },
    {
      img: a19,
      title: "Cheesy Margherita Pizza",
      time: "40 min",
      level: "Hard",
      desc: "A Classic Itallian Pizza topped with fresh mozzarella, basil leaves, rich tomatos sauce on crispy crust.",
      author: "Daniel Russo",
      rating: "4.5",
    },
    {
      img: a15,
      title: "Fresh Mediterrian Salad",
      time: "14 min",
      level: "Easy",
      desc: "Crisp Vegetables, Olives and feta tossed in a light lemon dressing.",
      author: "Isabella cristia",
      rating: "4.5",
    },
  ];

 return (
    <div className="recipe-page">
      <div className="r-banner"
            style={{ backgroundImage: `url(${b4})` }}>
        <h1>Explore Tasty Recipes</h1>
        <p>From quick meal to gourmet delights,Find the perfect recipes for every occation.</p>
      </div>

       <div className="recipee">
            <div className="recipe-header">
              <h2>Most Popular Recipe Collection</h2>
            </div>
                      
            <div className="r-cards">
              {dataa.map((item, index) => (
                <div className="r-card" key={index}>
                  
                  {/* Image */}
                  <div className="r-card-img">
                    <img src={item.img} alt="" />
                    <span className="r-tag">Recipe</span>
      
                    <div className="r-rating">
                      <FaStar /> {item.rating}
                    </div>
                  </div>
      
                  {/* Content */}
                  <div className="r-card-content">
                    <div className="r-meta">
                      <span><FiClock /> {item.time}</span>
                      <span>{item.level}</span>
                    </div>
      
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
      
                    <div className="r-card-footer">
                      <span className="author">{item.author}</span>
                      <FaRegHeart className="r-heart" />
                    </div>
                  </div>
      
                </div>
              ))}
            </div>
          </div>

        <div className="r-hero">
      <img src={b6} alt="Food ingredients" className="r-hero-img" />

      <div className="r-hero-overlay">
        <p className="r-hero-subtitle">Get Started</p>
        <h1>
          10 Ingredients. <br /> hundreds of Recipes
        </h1>
        <p className="r-hero-desc">
          All you need is 10 staple ingredients to make hundreds of authentic
          dishes. Start your cooking journey!
        </p>

        <button className="r-hero-btn">Browse Guide</button>
      </div>
    </div>
    <AllRecipes />
    </div>

 )
}
 export default Recipes;