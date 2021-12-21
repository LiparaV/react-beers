import React from "react";
import "./modal.css";
import beer from "../../assets/images/beer.png"
const Modal = ({ active, setActive, currentBeer }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "content active" : "content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modalWrapper">
          <img className="modalImg" src={currentBeer ? currentBeer.image_url || beer : ""} alt="beer Picture" />
          <div className="modalText">
          <h1 className="modalName">{currentBeer ? currentBeer.name : ""}</h1>
          <p className="modalTagLine">{currentBeer ? currentBeer.tagline : ""}</p>
          <p className="modalAbv">{currentBeer ? currentBeer.abv : ""}</p>
          <p className="modalDescription">{currentBeer ? currentBeer.description : ""}</p>
          <p className="modalFoodPairing">{currentBeer ? currentBeer.food_pairing + "" : ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal