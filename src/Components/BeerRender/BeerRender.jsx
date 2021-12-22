import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Buttons from "../Buttons/Buttons";
import Modal from "../Modal/Modal";
import beer from "../../assets/images/beer.png";
import styles from "../../Pages/style.module.scss";

const BeerRender = () => {
  const { beers } = useSelector((state) => state);

  const [modalActive, setModalActive] = useState(false);
  const [modalBeerId, setModalBeerId] = useState();

  function modalActivated(id) {
    setModalActive(true);
    setModalBeerId(id);
  }

  const getCurrentBeer = () => {
    return beers.find((item) => item.id === modalBeerId);
  };

  return (
    <div className={styles.pageWrapper}>
      <Buttons />
      {beers.map((item) => {
        return (
          <div
            key={item.id}
            onClick={(beeritem) => modalActivated(item.id)}
            className={styles.beerWrapper}
          >
            <img
              className={styles.beerPicture}
              src={item.image_url || beer}
              alt="beer Picture"
            />
            <h1>{item.name}</h1>
            <h3>{item.abv}</h3>
          </div>
        );
      })}

      <Modal
        active={modalActive}
        setActive={setModalActive}
        currentBeer={getCurrentBeer()}
      ></Modal>
    </div>
  );
};

export default BeerRender;
