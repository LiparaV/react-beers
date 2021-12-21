import React from 'react';
import { beerSorterAsc, beerSorterDes, beerSorterNameAsc, beerSorterNameDes, uploadBeersRequest } from "../../Reducers/beerSlice";
import { useDispatch } from 'react-redux';
import styles from "./style.module.scss"
const Buttons = () => {
    const dispatch = useDispatch();
    return (
        <div className={styles.buttonsWrapper}>
          <button className={styles.myButton} onClick={() => dispatch(beerSorterAsc())}>abv asc</button>
      <button className={styles.myButton} onClick={() => dispatch(beerSorterDes())}>abv desc</button>
      <button className={styles.myButton} onClick={() => dispatch(beerSorterNameAsc())}>name ascending</button>
      <button className={styles.myButton} onClick={() => dispatch(beerSorterNameDes())}>name descending</button>   
        </div>
    );
};

export default Buttons;