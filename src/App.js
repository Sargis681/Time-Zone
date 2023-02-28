// import logo from './logo.svg';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
// import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
import Home from './components/Home/Home';
// import HomeOne from './components/HomeOne/HomeOne';
import React, { useState } from "react";

import {
  // BrowserRouter,
  Routes,
  Route,
  // Link
} from 'react-router-dom';
import Error from './components/Eror/Error';
import Shop from './components/Shop/Shop';
import HomeWrapper from './Pages/HomeWrapper';
import UniqPage from './components/UniqPage/UniqPage';
import ShopWiev from './components/ShopWiew/ShopWiev';
import FormLog from './components/FormLog/FormLog';
import FormReg from './components/FormReg/FormReg';



function App() {
  const [products, setProducts] = useState([

  ])
  // console.log(products);


  const [cart, setCart] = useState([])





  // console.log(cart);


  return (
    <>
      <Routes>
        <Route path='/' element={<HomeWrapper cart={cart} />}>
          <Route index element={<Home />} />
          <Route path='about' element={<AboutUs />} />
          <Route path='shopwiew' element={<ShopWiev cart={cart} setCart={setCart} />} />
          <Route path='shop'>
            <Route index element={<Shop setProducts={setProducts} products={products} />} />
            <Route path=':id' element={<UniqPage cart={cart} setCart={setCart} products={products} />} />
          </Route>
        </Route>
        <Route path='registr' element={<FormReg />} />
        <Route path='*' element={<Error />} />
        <Route path='Login' element={<FormLog />} />
      </Routes>
    </>
  )
}

export default App;
