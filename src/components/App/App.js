import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CartPage } from '../CartPage/CartPage';

import { CardsList } from '../CardsList/CardsList';
import { Header } from '../Header/Header';
// import { Loading } from '../Loading/Loading';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchSaddles } from '../../store/actions/actions';

import cl from './App.module.scss'
import { About } from '../About/About';

// import im from './../../assets/goods-img/big/1-a.jpg';
// <img src={im} />

function App() {

   return (
      <>
         <Header />
         <div className={cl.container}>
            <Routes>
               <Route path='/' element={<CardsList />} />
               <Route path='/about' element={<About />} />
               <Route path='/cart' element={<CartPage />} />
            </Routes>
         </div>
      </>
   );
}

export default App;
