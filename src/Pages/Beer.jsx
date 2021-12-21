import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadBeersRequest } from "../Reducers/beerSlice";
import styles from "./style.module.scss";
import beer from "../assets/images/beer.png";
import Modal from "../Components/Modal/Modal";
import Buttons from "../Components/Buttons/Buttons";

const Beer = () => {
  const { beers } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(uploadBeersRequest(1));
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
  console.log(beers);
  return (
    <div className={styles.pageWrapper}>
 
      <Buttons />
      {beers.map((item) => {
        return (
          <div
            key = {item.id}
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

export default Beer;
