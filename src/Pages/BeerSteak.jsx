import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uploadSteakRequest } from "../Reducers/beerSlice";
import styles from "./style.module.scss";
import beer from "../assets/images/beer.png";
const BeerSteak = () => {
  const { beers } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(uploadSteakRequest(1));
  }, []);

  return (
    <div className={styles.pageWrapper}>
      {beers.map((item) => {
        return (
          <div className={styles.beerWrapper}>
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
    </div>
  );
};

export default BeerSteak;
