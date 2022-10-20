import './App.css'
import {BrowserRouter,Routes,Route,NavLink,Outlet} from 'react-router-dom'
import Products from './Components/Products';
import Carts from './Components/Carts';
import {getQty} from './store/actionsFunc'
import { useSelector } from 'react-redux';
import {Cart} from './types'

function App() {
  const cartItems=useSelector<Cart[],Cart[]>(state=>state);
  
  return (
    <BrowserRouter>
      <div className='App'>
          <header>
              <nav>
                <NavLink to={"/"}>Products</NavLink>
                <NavLink to={"/carts"}>Carts: {getQty(cartItems)} </NavLink>
              </nav>
          </header>
          <Outlet/>
      </div>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/carts' element={<Carts/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
