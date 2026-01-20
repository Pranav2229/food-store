import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';
import NotFound from '../pages/NotFound';
import BlogPost from '../pages/BlogPost';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import Checkout from '../pages/Checkout';
function AppRoutes(props) {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/blog" element={<BlogPost />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/login" element={<Login />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default AppRoutes