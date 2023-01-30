import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import ProductDisplayPage from './pages/ProductDisplayPage';
import { useSelector } from 'react-redux';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

function App() {
  const cartState = useSelector((state) => state.cartReducer);
  const user = localStorage.getItem('user').toString()
  return (
    <div className='p-4'>
      <div className='flex px-4 justify-between bg-[#05b514] py-4'>
      <Link to="/">
      <h1 className="font-bold text-2xl text-center text-gray-100">Mini E-commerce</h1>
      </Link>
      <div>
      <div className='flex'>
        <button className='px-2'>
            <Link
              to="/cart"
              className="text-center text-gray-700 hover:text-gray-50 transition relative items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
              <div className="absolute -right-3 -top-1 w-4 h-4 rounded-full flex justify-center bg-red-500 text-white text-xs">
              {cartState?.cartItems?.length}
              </div>
            </Link>
        </button>    
        <button className='px-2'>
          <Link
          to={user?'/dashboard':'/login'}
          className='text-center text-gray-700 hover:text-gray-50 transition relative items-center '
          >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          </Link>
        </button>  
      </div>
      </div>
      </div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/product/:id' element={<ProductDisplayPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
