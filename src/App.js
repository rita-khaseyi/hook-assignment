

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import ProductsPage from './Hooks/ProductPage';
import ProductDetailsPage from './Hooks/ProductDetailsPage';
import AddProductForm from './Hooks/AddProductForm';
import LoginPage from './Hooks/LoginPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="navbar">
      <nav className='nav'>
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/add-product">Add Product</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      </div>

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:productId" element={<ProductDetailsPage />} />
        <Route path="/add-product" element={<AddProductForm />} />
        <Route path="*" element={<Navigate to="/products" />} />
      </Routes>
    </Router>
  );
};

export default App;

