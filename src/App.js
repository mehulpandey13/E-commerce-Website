import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from './pages/OurStore';
import Blog from './pages/blog';
import Login from './pages/Login';
import Wishlist from './pages/Wishlist';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermsAndCondition from './pages/TermsAndCondition';
import SingleProduct from './pages/SingleProduct';
import Checkout from './pages/Checkout';


function App() {
  return ( 
  <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout />}>
          <Route index element = {<Home />} />
          <Route path='About' element = {<About />} />
          <Route path='Contact' element = {<Contact />} />
          <Route path='store' element = {<OurStore/>} />
          <Route path='store/:id' element = {<SingleProduct/>} />
          <Route path='blogs' element = {<Blog/>} />
          <Route path='login' element = {<Login/>} />
          <Route path='forgot-password' element = {<Forgotpassword/>} />
          <Route path='signup' element = {<Signup/>} />
          <Route path='reset-password' element = {<Resetpassword/>} />
          <Route path='wishlist' element = {<Wishlist/>} />
          <Route path='privacy-policy' element = {<PrivacyPolicy/>} />
          <Route path='refund-policy' element = {<RefundPolicy/>} />
          <Route path='shipping-policy' element = {<ShippingPolicy/>} />
          <Route path='terms-and-condition-policy' element = {<TermsAndCondition/>} />
          <Route path='checkout' element = {<Checkout/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
};

export default App;
