import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { uploadPizzaRequest } from "../Reducers/beerSlice";
import BeerRender from "../Components/BeerRender/BeerRender";

const BeerPizza = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(uploadPizzaRequest(1));
  }, []);

  return (
    <div>
      <BeerRender />
    </div>
  );
};

export default BeerPizza;
