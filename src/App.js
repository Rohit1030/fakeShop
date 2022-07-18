import React from 'react';
import './App.css';
import ProductDetails from './pages/product-details-page/product-details';
import Home from './pages/home/home';
import { Routes, Route } from 'react-router-dom';

function App() { 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='product-details' element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
