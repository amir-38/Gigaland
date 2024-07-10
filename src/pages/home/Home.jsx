// import React, { useState, useEffect, useCallback } from "react";
// import SimpleSlider from "../../components/carousel/Carousel";
// import "./Home.css";
// import CircleCard from "../../components/circleCard/CircleCard";

// const Home = () => {
//   const [animatedCards, setAnimatedCards] = useState(new Set());

//   const checkCards = useCallback(() => {
//     const cards = document.querySelectorAll(".wallet-card");
//     const triggerBottom = window.innerHeight * 0.8;
//     const newAnimatedCards = new Set(animatedCards);

//     cards.forEach((card, index) => {
//       const cardTop = card.getBoundingClientRect().top;
//       if (cardTop < triggerBottom && !newAnimatedCards.has(index)) {
//         card.classList.add("show");
//         newAnimatedCards.add(index);
//       }
//     });

//     if (newAnimatedCards.size !== animatedCards.size) {
//       setAnimatedCards(newAnimatedCards);
//     }
//   }, [animatedCards]);

//   useEffect(() => {
//     window.addEventListener("scroll", checkCards);
//     checkCards();

//     return () => {
//       window.removeEventListener("scroll", checkCards);
//     };
//   }, [checkCards]);

//   return (
//     <>
//       <section className="hero">
//         <div className="hero-content">
//           <div className="texts">
//             <h1>
//               Explore, collect, and sell extraordinary <span>NFTs</span>
//             </h1>
//             <p>
//               Welcome to the future, you can buy and sell awesome artworks from
//               here. The world's largest digital marketplace for non-fungible
//               tokens.
//             </p>
//             <div className="hero-btns">
//               <button className="first">Explore</button>
//               <button className="second">Sell</button>
//             </div>
//           </div>
//           <div className="owl">
//             <SimpleSlider />
//           </div>
//         </div>
//       </section>
//       <section className="wallets">
//         <div className="first wallet-card">
//           <div className="wallet-img">
//             <img src="../../../src/assets/images/1.png" alt="wallet-icon" />
//           </div>
//           <p>Metamask</p>
//         </div>
//         <div className="second wallet-card">
//           <div className="wallet-img">
//             <img src="../../../src/assets/images/2.png" alt="wallet-icon" />
//           </div>
//           <p>Bitski</p>
//         </div>
//         <div className="third wallet-card">
//           <div className="wallet-img">
//             <img src="../../../src/assets/images/3.png" alt="wallet-icon" />
//           </div>
//           <p>Fortmatic</p>
//         </div>
//         <div className="fourth wallet-card">
//           <div className="wallet-img">
//             <img src="../../../src/assets/images/4.png" alt="wallet-icon" />
//           </div>
//           <p>WalletConnect</p>
//         </div>
//         <div className="fifth wallet-card">
//           <div className="wallet-img">
//             <img src="../../../src/assets/images/5.png" alt="wallet-icon" />
//           </div>
//           <p>Coinbase Wallet</p>
//         </div>
//         <div className="sixth wallet-card">
//           <div className="wallet-img">
//             <img src="../../../src/assets/images/6.png" alt="wallet-icon" />
//           </div>
//           <p>Arcane</p>
//         </div>
//       </section>
//       <section className="circle-list">
//         <div className="circle-list-cont">
//           <div className="select-date">
//             <h3>Top sellers in 1 day</h3>
//           </div>
//           <div className="circle-users-card">
//             <CircleCard />
//             <CircleCard />
//             <CircleCard />
//             <CircleCard />
//             <CircleCard />
//             <CircleCard />
//             <CircleCard />
//             <CircleCard />
//             <CircleCard />
//             <CircleCard />
//             <CircleCard />
//             <CircleCard />
//             <CircleCard />
//             <CircleCard />
//             <CircleCard />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;

import React, { useState, useEffect, useCallback } from "react";
import SimpleSlider from "../../components/carousel/Carousel";
import "./Home.css";
import CircleCard from "../../components/circleCard/CircleCard";
import axios from "axios"; // Импортируйте axios для запросов

const Home = () => {
  const [animatedCards, setAnimatedCards] = useState(new Set());
  const [users, setUsers] = useState([]); // Добавьте состояние для пользователей

  const checkCards = useCallback(() => {
    const cards = document.querySelectorAll(".wallet-card");
    const triggerBottom = window.innerHeight * 0.8;
    const newAnimatedCards = new Set(animatedCards);

    cards.forEach((card, index) => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerBottom && !newAnimatedCards.has(index)) {
        card.classList.add("show");
        newAnimatedCards.add(index);
      }
    });

    if (newAnimatedCards.size !== animatedCards.size) {
      setAnimatedCards(newAnimatedCards);
    }
  }, [animatedCards]);

  useEffect(() => {
    window.addEventListener("scroll", checkCards);
    checkCards();

    return () => {
      window.removeEventListener("scroll", checkCards);
    };
  }, [checkCards]);

  useEffect(() => {
    // Запрос на JSON сервер для получения данных пользователей
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);

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
      <section className="circle-list">
        <div className="circle-list-cont">
          <div className="select-date">
            <h3>Top sellers in 1 day</h3>
          </div>
          <div className="circle-users-card">
            {users.map((user) => (
              <CircleCard
                key={user.id} // Уникальный идентификатор для ключа
                id={user.id} // Передача ID пользователя
                name={user.name}
                eth="3.2ETH" // Укажите фактическую ETH или удалите это поле
                username={`@${user.username}`}
                balance="$4,823" // Укажите фактический баланс или удалите это поле
                image={user.image || "../../../src/assets/images/author-1.jpg"} // Укажите фактическое изображение или путь по умолчанию
              />
            ))}
          </div>
        </div>
      </section>
      {/* <ProfilePage /> */}
    </>
  );
};

export default Home;
