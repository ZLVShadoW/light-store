import React from 'react';
import { ApiService } from '../../api';
import { Cart } from '../Cart/Cart';
import { Header } from '../Header/Header';
import cl from './App.module.scss'

// import im from './../../assets/goods-img/big/1-a.jpg';
// <img src={im} />

console.log('im');
let api = new ApiService;

function App() {
   const [items, setItems] = React.useState([])

   React.useEffect(() => {
      api.getSaddles().then(res => setItems(res))
   }, [])
   return (
      <>
         <Header />
         <div className={cl.container}>
            {items.map(item => <Cart key={item.id} {...item} />)}
         </div>
      </>
   );
}

export default App;
