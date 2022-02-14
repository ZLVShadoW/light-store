import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../Button/Button';
import cl from './Card.module.scss'

// export const Cart = ({ src, title, price, addToCart, added }) => {
export const Card = ({ src, title, price, addToCart, added }) => {

   return (
      <div className={cl.card}>
         <div className={cl.card__img}>
            <img src={src} alt={title} />
         </div>
         <div className={cl.card__title}>{title}</div>
         <div className={cl.card__footer}>
            <div className={cl.card__price}>price: <span>{price}</span></div>
            <div className={cl.btnplus}>
               <Button onClick={addToCart} disabled={added ? true : false}>
                  {added ? 'In cart' : 'Add to cart'}
               </Button>
               {added && <Link to={'/cart'}><div className={cl.link}>Moove</div></Link>}
            </div>
         </div>
      </div>
   );
};