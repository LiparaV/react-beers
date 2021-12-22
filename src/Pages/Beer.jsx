import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { uploadBeersRequest } from "../Reducers/beerSlice";
import BeerRender from "../Components/BeerRender/BeerRender";

const Beer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(uploadBeersRequest(1));
  }, []);

  return (
    <div>
      <BeerRender />
    </div>
  );
};

export default Beer;
