import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hero_image.png";
import { useGlobalContext } from "../../Context/context.jsx";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const { fetchTrendingBooks } = useGlobalContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchTrendingBooks();
    navigate("/trending-books");
  };

  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New & Trending</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            {/* hand icon image */}
          </div>
          <p>books</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <button onClick={handleSubmit}>Explore Now</button>
          {/* arrow icon */}
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};
