import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uploadSteakRequest } from '../Reducers/beerSlice';
const BeerSteak = () => {
    const { beers } = useSelector((state) => state);
  

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(uploadSteakRequest(1));
  }, []);

  return (
    <div>
      {beers.map((item) => {
        return <h3>{item.name}</h3>;
        
        
      })}
    </div>
  );
};

export default BeerSteak;