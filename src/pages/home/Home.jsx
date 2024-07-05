import React from "react";
import SimpleSlider from "../../components/carousel/Carousel";
import "./Home.css";
const Home = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="texts">
          <h1>
            Explore, collect, and sell extraordinary <span>NFTs</span>
          </h1>
          <p>
            {" "}
            Welcome to the future, you can buy and sell awesome artworks form
            here. The world largest digital marketplace for non-fungible tokens.
          </p>
          <div className="hero-btns">
            <button className="first">Explore</button>
            <button className="second">Sell</button>
          </div>
        </div>
        <div className="owl">
          <SimpleSlider />
        </div>{" "}
      </div>
    </section>
  );
};

export default Home;
