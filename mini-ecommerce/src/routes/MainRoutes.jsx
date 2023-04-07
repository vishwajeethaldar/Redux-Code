import { Routes, Route } from "react-router-dom";
import {Product, Cart, Order, ProdDetails} from '../pages'
import React from 'react'

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Product/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/order" element={<Order/>}/>
            <Route path="/product/:id" element={<ProdDetails/>}/>
        </Routes>
    )
}
