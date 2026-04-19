import React from "react";
import "./AllRecipes.css";

import a23 from "../assets/a23.webp";
import a5 from "../assets/a5.webp";
import a24 from "../assets/a24.webp";
import a9 from "../assets/a9.webp";
import a8 from "../assets/a8.webp";
import a4 from "../assets/a4.webp";
import a18 from "../assets/a18.webp";
import a14 from "../assets/a14.webp";

function AllRecipes() {
  const recipes = [
    { id: 1, img: a23, title: "Peruvian Chicken Thighs" },
    { id: 2, img: a5, title: "Beef with Mushrooms" },
    { id: 3, img: a24, title: "Spring Rolls" },
    { id: 4, img: a9, title: "Chow Har Kew" },
    { id: 5, img: a8, title: "Broccoli Stir Fry" },
    { id: 6, img: a4, title: "Braised Pork Belly" },
    { id: 7, img: a18, title: "Spicy Eggplant" },
    { id: 8, img: a14, title: "Veg Noodles" },
  ];

  return (
    <div className="all-recipes">
      <h2>All Recipes</h2>

      <div className="recipe-grid">
        {recipes.map((item) => (
          <div className="recipe-card" key={item.id}>
            <img src={item.img} alt={item.title} />

            <div className="ar-overlay">
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllRecipes;