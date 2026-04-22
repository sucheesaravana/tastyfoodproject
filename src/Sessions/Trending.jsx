import React from "react";
import "./Trending.css";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import a17 from "../assets/a17.jpg";
import a16 from "../assets/a16.jpg";
import a12 from "../assets/a12.jpg";

function Trending() {
  const navigate = useNavigate();
  const data = [
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
  ];

  return (
    <div className="trending">
      <div className="trending-header">
        <h2><FaArrowTrendUp className="trend-icon" /> Trending Now</h2>
        <span 
  className="view-all"
  onClick={() => navigate("/Recipes")}
  style={{ cursor: "pointer" }}
>
  View all →
</span>
      </div>

      <p className="sub-text">
        Most loved recipes by our community this week.
      </p>

      <div className="cards">
        {data.map((item, index) => (
          <div className="card" key={index}>
            
            {/* Image */}
            <div className="card-img">
              <img src={item.img} alt="" />
              <span className="tag">Recipe</span>

              <div className="rating">
                <FaStar /> {item.rating}
              </div>
            </div>

            {/* Content */}
            <div className="card-content">
              <div className="meta">
                <span><FiClock /> {item.time}</span>
                <span>{item.level}</span>
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              <div className="card-footer">
                <span className="author">{item.author}</span>
                <FaRegHeart className="heart" />
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;