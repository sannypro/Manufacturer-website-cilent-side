
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Home from './components/Navbar/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Signup from './components/Signup/Signup';
import RequireAuth from './RequireAuth'

import PurchaseSinglePage from './components/PurchaseSinglePage/PurchaseSinglePage';
import MyOrders from './components/MyOrders/MyOrders';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<Signup></Signup>}></Route>
        <Route path='my-orders' element={<RequireAuth><MyOrders></MyOrders></RequireAuth>}></Route>
        <Route path='purchase/:id' element={<RequireAuth><PurchaseSinglePage></PurchaseSinglePage></RequireAuth>}></Route>
      </Routes>
      <Footer></Footer>
    </div >
  );
}

export default App;
