import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { uploadSteakRequest } from "../Reducers/beerSlice";
import BeerRender from "../Components/BeerRender/BeerRender";

const BeerSteak = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(uploadSteakRequest(1));
  }, []);

  return (
    <div>
      <BeerRender />
    </div>
  );
};

export default BeerSteak;
