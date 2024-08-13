import React from "react";
import "./NftCard.css";
import { useState } from "react";

const NftCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Функция для переключения состояния модального окна
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="nft">
      <div className={`nft-img ${isModalOpen ? "modal-open" : ""}`}>
        <img src="../../src/assets/images/anim-10.webp" alt="" />
      </div>
      <div
        className={`nft-img-modal ${
          isModalOpen ? "modal-open" : "modal-close"
        }`}
      >
        <button>buy now</button>
        <button>place a bid</button>
      </div>
      <div className="nft-texts">
        <div className="nft-name">
          <p>Defraudmet</p>
          <p>...</p>
        </div>
        <div className="nft-price">
          <p>0.09etc</p>
          <button onClick={toggleModal}>...</button>{" "}
        </div>
      </div>
    </div>
  );
};

export default NftCard;
