import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from '../Card/Card';
import { addedToCart } from '../../store/actions/actions';

export const CardsList = ({ saddles }) => {

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
            return <Card key={saddle.id} {...saddle} added={count} addToCart={() => addToCart(saddle)} />
         })
         }
      </>
   );
};
