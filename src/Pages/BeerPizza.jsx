import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uploadPizzaRequest } from '../Reducers/beerSlice';
const BeerPizza = () => {
    const { beers } = useSelector((state) => state);
  

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(uploadPizzaRequest(1));
  }, []);

  return (
    <div>
      {beers.map((item) => {
        return <h3>{item.name}</h3>;
        
        
      })}
    </div>
  );
};

export default BeerPizza;