import React from "react";
import "./Blogs.css";
import { useNavigate } from "react-router-dom";
import a7 from "../assets/a7.png";
import a13 from "../assets/a13.jpg";
import a3 from "../assets/a3.jpg";
import a6 from "../assets/a6.jpg";
import b4 from "../assets/b4.png";
import a30 from "../assets/a30.jpg";

const Blogs = () => {
  const navigate = useNavigate();
  const posts = [
    {
      id: 1,
      date: "Feb 24, 2026",
      title: "Creamy Spinach & Mushroom Pasta",
      desc: "A comforting vegetarian pasta dish loaded with fresh spinach, mushrooms, and creamy sauce.",
      author: "Charles",
      time: "5 min",
      img: a7
    },
    {
      id: 2,
      date: "Feb 24, 2026",
      title: "Veggie Delight Bowl",
      desc: "Healthy bowl packed with nutrients and vibrant vegetables.",
      author: "Charles",
      time: "5 min",
      img: a13
    },
    {
      id: 3,
      date: "Feb 24, 2026",
      title: "Grilled Chicken Special",
      desc: "Juicy grilled chicken with herbs and spices.",
      author: "Charles",
      time: "5 min",
      img: a3
    },
    {
      id: 4,
      date: "Feb 24, 2026",
      title: "Fresh Juice Mix",
      desc: "Refreshing fruit juice blend to energize your day.",
      author: "Charles",
      time: "5 min",
      img: a6
    }
  ];

  return (
    <div className="blog-page">

      {/* Banner */}
      <div className="b-banner"
            style={{ backgroundImage: `url(${b4})` }}>
        <h1>Our Food Blog</h1>
        <p>Discover cooking tips, trending recipes, and kitchen inspiration.</p>
      </div>

      {/* Category */}
      <div className="b-category-bar">
        <select>
          <option>Categories</option>
          <option>Desserts</option>
          <option>Quick Meals</option>
          <option>Vegetarian</option>
          <option>Non Veg</option>
          <option>Drinks</option>
        </select>
      </div>

      {/* Content */}
      <div className="b-content">

        {/* Left */}
        <div className="b-left">
          {posts.map((post) => (
            <div className="b-card" key={post.id}>
              <img src={post.img} alt="food" />

              <div className="b-card-content">
                <span className="b-date">{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.desc}</p>

                <div className="b-meta">
                  <span>📖 Read {post.time}</span>
                  <span>By: {post.author}</span>
                </div>

                <button
                  className="b-read-btn"
                  onClick={() => {
                    if (post.title === "Creamy Spinach & Mushroom Pasta") {
                      navigate("/Pastha");
                    }
                  }}
                >
                  Read Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right */}
        <div className="b-right">
          <div className="b-sidebar-box">
            <h3>Join the TastyBites Community</h3>
            <p>
              Love delicious recipes? Don’t miss out on our latest food blogs and cooking tips!
            </p>
            <button className="b-primary-btn">Subscribe Now</button>
            <p>Our email newsletter delivers our new recipes and latest updates.Its always free and you can unsubscribe any time.</p>
          </div>

          <div className="b-sidebar-box">
            <div className="b-sidebar-image">
                    <img src={a30} alt="logo" />
                  </div>
            <h3>Hi i'm Lindsay</h3>
            <h2> Nice to Meet You </h2>
            <p>
              I'm a 4th grade teacher. Now I'm a blogger. My husband bjork and i live in Minnisota. Favorite thing include by Camera, lake days and daek chocolate.
            </p>
            <button className="b-secondary-btn">Learn More</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blogs;