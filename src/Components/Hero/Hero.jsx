import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";
import img1 from "../../assets/hero-1.jpg";
import img2 from "../../assets/hero-2.jpg";
import img3 from "../../assets/hero-3.jpg";
import img4 from "../../assets/hero-5.png";
import img5 from "../../assets/hero-6.png";
import img6 from "../../assets/hero-7.png";

const Hero = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === images.length - 1) {
        // Temporarily disable transition to reset to the first image
        setIsTransitioning(false);
        setCurrentIndex(0);
        setTimeout(() => {
          setIsTransitioning(true);
        }, 50); // Small timeout to avoid abrupt transition
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="hero-section">
      <div
        ref={sliderRef}
        className="slider-wrapper"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="slider-image">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="hero-content">
        <h1>Limited Time Deal</h1>
        <p>Don't miss out, grab it now!</p>
        <button className="shop-now-btn">Shop Now</button>
      </div>
    </div>
  );
};

export default Hero;
