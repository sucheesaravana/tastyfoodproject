import React from "react";
import "./Latest.css";

import a7 from "../assets/a7.png";
import a2 from "../assets/a2.jpg";
import a10 from "../assets/a10.webp";
import a22 from "../assets/a22.webp";

function Latest() {
  const blogs = [
    {
      img: a7,
      tag: "Quick Meals",
      title: "Creamy Garlic Butter Pasta",
      desc: "A rich and comforting pasta recipe made with fresh garlic, butter, and parmesan — ready in just 20 minutes.",
    },
    {
      img: a2,
      tag: "Desserts",
      title: "Classic Chocolate Lava Cake",
      desc: "Warm, gooey chocolate cake with a molten center that melts in your mouth. Perfect for special evenings.",
    },
    {
      img: a10,
      tag: "Non-veg",
      title: " Spicy Grilled Chicken Skewers",
      desc: "Juicy grilled chicken skewers packed with spices and flavor. A perfect for weedend dinners",
    },
    {
      img: a22,
      tag: "Healthy",
      title: "Avacado Quinoa Power Bowl",
      desc: "A nutricious bowl packed with quinoa, fresh veggies and creamy avacado for  balanced and energies meal.",
    },
  ];

  return (
    <div className="latest">
      <h2>Latest Blogs</h2>

      <div className="blog-grid">
        {blogs.map((item, index) => (
          <div className="blog-card" key={index}>
            
            {/* Image */}
            <div className="blog-img">
              <img src={item.img} alt="" />
              <span className="tag">{item.tag}</span>
            </div>

            {/* Content */}
            <div className="blog-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="read-more">Read More →</span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Latest;