import React from 'react';

import { Button } from '../Button/Button';
import cl from './Cart.module.scss'

export const Cart = ({ src, title, price, addToCart, isAdded }) => {

   return (
      <div className={cl.cart}>
         <div className={cl.cart__img}>
            <img src={src} alt={title} />
         </div>
         <div className={cl.cart__title}>{title}</div>
         <div className={cl.cart__footer}>
            <div className={cl.cart__price}>price: <span>{price}</span></div>
            <div>
               <Button onClick={addToCart} disabled={isAdded ? true : false}>
                  {isAdded ? 'In cart' : 'Add to cart'}
               </Button>
            </div>
         </div>
      </div>
   );
};
