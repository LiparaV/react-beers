import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadBeersRequest } from "../Reducers/beerSlice";
import styles from "./style.module.scss";
import beer from "../assets/images/beer.png";
import ModalUnstyled from "@mui/base/ModalUnstyled";

const Beer = () => {
  const { beers } = useSelector((state) => state);

  console.log(beers);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(uploadBeersRequest(1));
  }, []);

  return (
    <div className={styles.pageWrapper}>
      {beers.map((item) => {
        return (
          <div onClick={() => alert("hi")} className={styles.beerWrapper}>
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

export default Beer;
