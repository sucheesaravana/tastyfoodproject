import React, { useState, useEffect } from "react";
import "./Home.css";
import Trending from "../Sessions/Trending";
import Latest from "../Sessions/Latest";
import Popular from "../Sessions/Popular";
import WhyJoin from "../Sessions/WhyJoin";
// import Footer from "../Components/Footer";
import b2 from "../assets/b2.png";
import b3 from "../assets/b3.png";
import b4 from "../assets/b4.png";

function Home() {
  const images = [b2, b3, b4];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div
      className="hero"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="overlay">
        <h1>Discover Delicious Recipes Every Day</h1>
        <p>
          Simple ingredients. Amazing flavors. Cook with confidence and joy.
        </p>

        <div className="hero-buttons">
          <button className="explore-btn">Explore Blog</button>
          <button className="write-btn">Write a Blog</button>
        </div>

        {/* Dots indicator */}
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? "dot active" : "dot"}
            ></span>
          ))}
        </div>
      </div>
    </div>
    <Trending />
    <Latest />
    <Popular />
    <WhyJoin />
    {/* <Footer /> */}
    </>
  );
  
}

export default Home;