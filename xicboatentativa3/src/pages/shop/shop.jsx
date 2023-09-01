import React from "react";
import { PRODUCTS } from "./products.js";
import { Product } from "./product.jsx"
import "../shop/shop.css";

export const Shop = () => {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Compre os melhores cafés!</h1>
            </div>
            <div className="products">
                {PRODUCTS.map(product => <Product key={product.id} data={product} />)}
            </div>
        </div>
    );
};


