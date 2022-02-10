import React from 'react';
import cl from './Header.module.scss';

// one of the ways to import svg 
import { ReactComponent as Svg } from './../../assets/img/cart.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
   return (
      <header className={cl.header}>
         <div className={cl.container}>
            <div className={cl.logo}><Link to={'/'} className={cl.logo}>BikeStore</Link></div>
            <div className={cl.info}>
               <div className={cl.info__item}><Link to={'/about'}>О магазине</Link></div>
               <div className={cl.info__item}><Link to={'/cart'}><Svg className={cl.cart} /></Link></div>
            </div>
         </div>
      </header>
   );
};
