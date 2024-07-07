import React, { useState, useEffect } from "react";
import SimpleSlider from "../../components/carousel/Carousel";
import "./Home.css";

const Home = () => {
  const [animatedCards, setAnimatedCards] = useState([]);

  useEffect(() => {
    const cards = document.querySelectorAll(".wallet-card");

    const checkCards = () => {
      const triggerBottom = window.innerHeight * 0.8;
      let newAnimatedCards = [...animatedCards];

      cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom && !newAnimatedCards.includes(index)) {
          card.classList.add("show");
          newAnimatedCards.push(index);
        }
      });

      setAnimatedCards(newAnimatedCards);
    };

    window.addEventListener("scroll", checkCards);
    checkCards(); // чтобы проверить сразу после загрузки страницы

    return () => {
      window.removeEventListener("scroll", checkCards);
    };
  }, [animatedCards]);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="texts">
            <h1>
              Explore, collect, and sell extraordinary <span>NFTs</span>
            </h1>
            <p>
              Welcome to the future, you can buy and sell awesome artworks from
              here. The world's largest digital marketplace for non-fungible
              tokens.
            </p>
            <div className="hero-btns">
              <button className="first">Explore</button>
              <button className="second">Sell</button>
            </div>
          </div>
          <div className="owl">
            <SimpleSlider />
          </div>
        </div>
      </section>
      <section className="wallets">
        <div className="first wallet-card">
          <div className="wallet-img">
            <img src="../../../src/assets/images/1.png" alt="wallet-icon" />
          </div>
          <p>Metamask</p>
        </div>
        <div className="second wallet-card">
          <div className="wallet-img">
            <img src="../../../src/assets/images/2.png" alt="wallet-icon" />
          </div>
          <p>Bitski</p>
        </div>
        <div className="third wallet-card">
          <div className="wallet-img">
            <img src="../../../src/assets/images/3.png" alt="wallet-icon" />
          </div>
          <p>Fortmatic</p>
        </div>
        <div className="fourth wallet-card">
          <div className="wallet-img">
            <img src="../../../src/assets/images/4.png" alt="wallet-icon" />
          </div>
          <p>WalletConnect</p>
        </div>
        <div className="fifth wallet-card">
          <div className="wallet-img">
            <img src="../../../src/assets/images/5.png" alt="wallet-icon" />
          </div>
          <p>Coinbase Wallet</p>
        </div>
        <div className="sixth wallet-card">
          <div className="wallet-img">
            <img src="../../../src/assets/images/6.png" alt="wallet-icon" />
          </div>
          <p>Arcane</p>
        </div>
      </section>
    </>
  );
};

export default Home;
