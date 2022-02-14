import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Loading } from '../Loading/Loading';
import { Card } from '../Card/Card';
import { addedToCart, fetchSaddles } from '../../store/actions/actions';

export const CardsList = () => {

   const { saddles, loading, error } = useSelector(state => state.saddles)
   const dispatch = useDispatch()

   React.useEffect(() => {
      dispatch(fetchSaddles())
   }, [dispatch])

   const addToCart = (saddle) => {
      dispatch(addedToCart(saddle))
   }

   let arr = useSelector(state => state.cart.items)

   const countInCart = (saddle) => {
      let el = arr.find(el => el.id === saddle.id)
      if (el) {
         return el.count
      }
      return
   }

   if (loading) return <Loading />

   if (error) return <div>Refresh the page</div>

   return (
      <>
         {saddles.map(saddle => {
            let count = countInCart(saddle)
            return <Card key={saddle.id} {...saddle} added={count} addToCart={() => addToCart(saddle)} />
         })
         }
      </>
   );
};
