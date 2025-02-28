import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Product from '../pages/Product';
import Pages from '../pages/Pages';
import Accessories from '../pages/Accessories';
import Elements from '../pages/Elements';
import Buynow from '../pages/Buynow';
import ProductDetailPage from '../pages/CartDetails';
import Admin from '../Components/Admin';
import Dashboard from '../pages/Dashboard';
import Orders from '../pages/Orders';
import Reports from '../pages/Reports';
import EditProductModal from '../Components/EditProductModal';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pages" element={<Pages />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/elements" element={<Elements />} />
      <Route path="/buynow" element={<Buynow />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/productdetailpage/:id" element={<ProductDetailPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/edit-product/:id" element={<EditProductModal />} />
    </Routes>
  );
};

export default Router;