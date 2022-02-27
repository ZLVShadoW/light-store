import React from 'react'
import { useSelector } from 'react-redux'
import { CardInfo } from '../CardInfo/CardInfo';

import cn from './CartPage.module.scss';

export const CartPage = () => {

   const { items, total } = useSelector(state => state.cart)

   return (
      <>
         {items.map(item => (<CardInfo key={item.id} {...item} />))}
         <div className={cn.wrapper}>{total}</div>
      </>
   )
}
