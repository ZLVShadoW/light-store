import React from 'react'
import { useSelector } from 'react-redux'
import { CardInfo } from '../CardInfo/CardInfo';

import cn from './CartPage.module.scss';

export const CartPage = () => {

   const { items, total } = useSelector(state => state.cart)

   return (
      <div className={cn.wrapper}>
         {items.map(item => (<CardInfo key={item.id} {...item} />))}
         <div>{total}</div>
      </div>
   )
}
