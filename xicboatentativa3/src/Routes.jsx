import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { PageAdmin } from "./pages/admin/admin";
import ProductDetail from './pages/detail/detail';
import Checkout from './pages/checkout/checkout';

const AppRoutes = () => (
  <Routes>
    <Route path="/admin" element={<PageAdmin />} />
    <Route path="/" element={<Shop />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/detail/:id" element={<ProductDetail />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
);

export default AppRoutes;