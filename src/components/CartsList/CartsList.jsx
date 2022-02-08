import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Cart } from '../Cart/Cart';
import { addedToCart } from '../../store/actions/actions';

export const CartsList = ({ saddles }) => {

   const dispatch = useDispatch();
   const addToCart = (saddle) => {
      dispatch(addedToCart(saddle))
   }

   let arr = useSelector(state => state.cart.items)

   const countInCart = (saddle) => {
      let el = arr.find(el => el.id === saddle.id)
      if (el) {
         return el.count
      }
      return
   }

   return (
      <>
         {saddles.map(saddle => {
            let count = countInCart(saddle)
            return <Cart key={saddle.id} {...saddle} isAdded={count} addToCart={() => addToCart(saddle)} />
         })
         }
      </>
   );
};
