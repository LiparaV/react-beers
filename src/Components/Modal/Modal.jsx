import React from "react";
import beer from "../../assets/images/beer.png"
import styles from "./styles.module.scss"

const Modal = ({ active, setActive, currentBeer }) => {
  return (
    <div
      className={active ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? `${styles.content} ${styles.active}` : styles.content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalWrapper}>
          <img className={styles.modalImg} src={currentBeer ? currentBeer.image_url || beer : ""} alt="beer Picture" />
          <div className={styles.modalText}>
          <h1 className={styles.modalName}>{currentBeer ? currentBeer.name : ""}</h1>
          <p className={styles.modalTagLine}>{currentBeer ? currentBeer.tagline : ""}</p>
          <p className={styles.modalAbv}>{currentBeer ? currentBeer.abv : ""}</p>
          <p className={styles.modalDescription}>{currentBeer ? currentBeer.description : ""}</p>
          <p className={styles.modalFoodPairing}>{currentBeer ? currentBeer.food_pairing + "" : ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal