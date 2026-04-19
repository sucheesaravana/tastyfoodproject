import React, { useState } from "react";
import "./Popular.css";

import a1 from "../assets/a1.jpg";
import a26 from "../assets/a26.webp";
import a25 from "../assets/a25.jpg";
import a11 from "../assets/a11.jpg";
import a21 from "../assets/a21.jpg";

function Popular() {
  const [hovered, setHovered] = useState(null);

  const data = [
    { img: a1, title: "Desserts" },
    { img: a26, title: "Quick Meals" },
    { img: a25, title: "Vegetarian" },
    { img: a11, title: "Non-Veg" },
    { img: a21, title: "Drinks" },
  ];

   return (
    <div className="popular">
      <h2>Popular Categories</h2>

      <div className="row">
        {data.map((item, index) => (
          <div className={`p-card ${index === 2 ? "big" : ""}`} key={index}>
            <img src={item.img} alt="" />
            <div className="p-overlay">
              <span>{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Popular;