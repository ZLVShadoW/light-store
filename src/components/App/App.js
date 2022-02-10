import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchSaddles } from '../../store/actions/actions';
import { CartPage } from '../CartPage/CartPage';

import { CardsList } from '../CardsList/CardsList';
import { Header } from '../Header/Header';
import { Loading } from '../Loading/Loading';

import cl from './App.module.scss'
import { About } from '../About/About';

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
            <Routes>
               <Route path='/' element={<CardsList saddles={saddles} />} />
               <Route path='/about' element={<About />} />
               <Route path='/cart' element={<CartPage />} />
            </Routes>
         </div>
      </>
   );
}

export default App;
