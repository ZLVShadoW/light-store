import React from 'react';
import cl from './Header.module.scss';
import { ReactComponent as Svg } from './../../assets/img/cart.svg';

console.log(Svg)

export const Header = () => {
   return (
      <header className={cl.header}>
         <div className={cl.logo}>BikeStore</div>
         <div className={cl.info}>
            <div className={cl.info__item}><a href='#'>О магазине</a></div>
            <div className={cl.info__item}><a href='#'><Svg className={cl.cart} /></a></div>
         </div>
      </header>
   );
};
