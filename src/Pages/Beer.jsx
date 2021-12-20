import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadBeersRequest } from "../Reducers/beerSlice";
import styles from "./style.module.scss";
import beer from "../assets/images/beer.png";
import Modal from "../Modal/Modal";

const Beer = () => {
  const { beers } = useSelector((state) => state);

  console.log(beers);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(uploadBeersRequest(1));
  }, []);

  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={styles.pageWrapper}>
      {beers.map((item) => {
        return (
          <div
            onClick={() => setModalActive(true)}
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

      <Modal active={modalActive} setActive={setModalActive}></Modal>
    </div>
  );
};

export default Beer;
