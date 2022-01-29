import React from 'react';
import { useDispatch } from 'react-redux';

import { Cart } from '../Cart/Cart';
import { addedToCart } from '../../store/actions/actions';

export const CartsList = ({ saddles }) => {

   const dispatch = useDispatch();
   const addToCart = (saddle) => {
      dispatch(addedToCart(saddle))
   }
   return (
      <>
         {saddles.map(saddle => <Cart key={saddle.id} {...saddle} addToCart={() => addToCart(saddle)} />)}
      </>
   );
};
