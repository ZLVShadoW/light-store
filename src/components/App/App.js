import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSaddles } from '../../store/actions/actions';

import { CartsList } from '../CartsList/CartsList';
import { Header } from '../Header/Header';
import { Loading } from '../Loading/Loading';

import cl from './App.module.scss'

// import im from './../../assets/goods-img/big/1-a.jpg';
// <img src={im} />

function App() {

   const { saddles, loading, error } = useSelector(state => state.saddles)
   const dispatch = useDispatch()

   React.useEffect(() => {
      dispatch(fetchSaddles())
   }, [])

   if (loading) return <Loading />

   return (
      <>
         <Header />
         <div className={cl.container}>
            <CartsList saddles={saddles} />
         </div>
      </>
   );
}

export default App;
