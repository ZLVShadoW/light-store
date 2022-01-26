import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApiService } from '../../api';
import { fetchSaddles } from '../../store/actions/actions';
import { Cart } from '../Cart/Cart';
import { Header } from '../Header/Header';
import cl from './App.module.scss'

// import im from './../../assets/goods-img/big/1-a.jpg';
// <img src={im} />

console.log('im');

function App() {
   // const [items, setItems] = React.useState([])

   const saddles = useSelector(state => state.saddles.saddles)
   const dispatch = useDispatch()

   React.useEffect(() => {
      dispatch(fetchSaddles())
   }, [])
   return (
      <>
         <Header />
         <div className={cl.container}>
            {saddles.map(item => <Cart key={item.id} {...item} />)}
         </div>
      </>
   );
}

export default App;
