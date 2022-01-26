import React from 'react';
import cl from './Header.module.scss';

// one of the ways to import svg 
import { ReactComponent as Svg } from './../../assets/img/cart.svg';

export const Header = () => {
   return (
      <header className={cl.header}>
         <div className={cl.container}>
            <div className={cl.logo}>BikeStore</div>
            <div className={cl.info}>
               <div className={cl.info__item}><a href='#'>О магазине</a></div>
               <div className={cl.info__item}><a href='#'><Svg className={cl.cart} /></a></div>
            </div>
         </div>
      </header>
   );
};
