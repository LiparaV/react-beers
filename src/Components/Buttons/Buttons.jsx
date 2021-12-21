import React from "react";
import {
  beerSorterAsc,
  beerSorterDes,
  beerSorterNameAsc,
  beerSorterNameDes,
  uploadBeersRequest,
} from "../../Reducers/beerSlice";
import { useDispatch } from "react-redux";
import styles from "./style.module.scss";
const Buttons = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.buttonsWrapper}>
        <p className={styles.sortBy}>SORT BY</p>
      <button
        className={styles.myButton}
        onClick={() => dispatch(beerSorterAsc())}
      >
        abv ⇧
      </button>
      <button
        className={styles.myButton}
        onClick={() => dispatch(beerSorterDes())}
      >
        abv ⇩
      </button>
      <button
        className={styles.myButton}
        onClick={() => dispatch(beerSorterNameAsc())}
      >
        name ⇧
      </button>
      <button
        className={styles.myButton}
        onClick={() => dispatch(beerSorterNameDes())}
      >
        name ⇩
      </button>
    </div>
  );
};

export default Buttons;
