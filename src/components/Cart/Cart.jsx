import React from 'react';
import cl from './Cart.module.scss'

export const Cart = ({ src, title, price }) => {
   return (
      <div className={cl.cart}>
         <div className={cl.cart__img}>
            <img src={src} alt={title} />
         </div>
         <div className={cl.cart__title}>{title}</div>
         <div className={cl.cart__footer}>
            <div className={cl.cart__price}>price: <span>{price}</span></div>
            <div>
               <button>Add</button>
            </div>
         </div>
      </div>
   );
};
