
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Home from './components/Navbar/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Signup from './components/Signup/Signup';
import RequireAuth from './RequireAuth'
import CheckOutPage from './components/CheckOutPage/CheckOutPage'
import PurchaseSinglePage from './components/PurchaseSinglePage/PurchaseSinglePage';
import MyOrders from './components/MyOrders/MyOrders';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import AddReview from './components/AddReview/AddReview';
import MyProfile from './components/Navbar/Home/MyProfile/MyProfile';
import { ToastContainer } from 'react-toastify';
import Dashboard from './components/Dashboard/Dashboard';
const stripePromise = loadStripe('pk_test_51L0j5UHw1ppVQWndFtGKSCw5rDU15PD6vBHX3o3Oi9OAtC6BF1Xak8n06YD4S8LxEl78IpklBsg7ZGrfku1vAymo00XYkGq7Yt');
function App() {

  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<Signup></Signup>}></Route>

        <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route path='my-profile' element={<RequireAuth><MyProfile></MyProfile></RequireAuth>}></Route>
          <Route index element={<RequireAuth><MyOrders></MyOrders></RequireAuth>}></Route>
          <Route path='add-review' element={<RequireAuth><AddReview></AddReview></RequireAuth>}></Route>
        </Route>
        <Route path='purchase/:id' element={<RequireAuth><PurchaseSinglePage></PurchaseSinglePage></RequireAuth>}></Route>


        <Route path='checkout/:paymentID' element={<RequireAuth><Elements stripe={stripePromise}>
          <CheckOutPage />
        </Elements></RequireAuth>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div >
  );
}

export default App;
