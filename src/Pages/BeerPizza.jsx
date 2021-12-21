import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uploadPizzaRequest } from "../Reducers/beerSlice";
import styles from "./style.module.scss";
import beer from "../assets/images/beer.png";
import Modal from "../Components/Modal/Modal";
import Buttons from "../Components/Buttons/Buttons";

const BeerPizza = () => {
  const { beers } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(uploadPizzaRequest(1));
  }, []);

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

export default BeerPizza;
