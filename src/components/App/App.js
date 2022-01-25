import { Header } from '../Header/Header';
import im from './../../assets/goods-img/small/1.jpg';


function App() {
   return (
      <>
         <Header />
         <div>hello from app</div>
         <img src={im} />
      </>
   );
}

export default App;
