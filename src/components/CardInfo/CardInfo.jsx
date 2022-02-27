import React from 'react';


import cn from './CardInfo.module.scss';

export const CardInfo = ({ src, title, weight, description }) => {
   return (
      <div className={cn.card}>
         <div className={cn.card__img}>
            <img src={src} alt={title} />
         </div>
         <div className={cn.card__info}>
            <div className={cn.card__title}>{title}</div>
            <div className={cn.card__opt}>{weight}</div>
            <div className={cn.card__description}>{description}</div>
         </div>
      </div>
   )
}
