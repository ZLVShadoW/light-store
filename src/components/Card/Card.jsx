import React from 'react';

import { Button } from '../Button/Button';
import cl from './Card.module.scss'

// export const Cart = ({ src, title, price, addToCart, added }) => {
export const Card = ({ src, title, price, addToCart, added }) => {

   return (
      <div className={cl.cart}>
         <div className={cl.cart__img}>
            <img src={src} alt={title} />
         </div>
         <div className={cl.cart__title}>{title}</div>
         <div className={cl.cart__footer}>
            <div className={cl.cart__price}>price: <span>{price}</span></div>
            <div>
               <Button onClick={addToCart} disabled={added ? true : false}>
                  {added ? 'In cart' : 'Add to cart'}
               </Button>
            </div>
         </div>
      </div>
   );
};