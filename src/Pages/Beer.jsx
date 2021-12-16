import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadBeersRequest } from "../Reducers/beerSlice";
const Beer = () => {
  const { beers } = useSelector((state) => state);
  console.log(beers);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(uploadBeersRequest(1));
  }, []);

  return (
    <div>
      {beers.map((item) => {
        return <h3>{item.name}</h3>;
      })}
    </div>
  );
};

export default Beer;
