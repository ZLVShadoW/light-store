import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../Card/Card';

export const CartPage = () => {

   const { items, total } = useSelector(state => state.cart)

   return (
      <>
         {items.map(item => (<Card key={item.id} {...item} />))}
         <div>{total}</div>
      </>
   )
}
