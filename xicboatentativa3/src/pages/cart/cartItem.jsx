import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = ({ data }) => {
    const { id, title, price, image } = data;
    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

    const quantity = cartItems[id] || 0;

    return (
        <div className="cart-item">
            <img src={`src/assets/${image}`} alt={title} />
            <div className="item-details">
                <p>{title}</p>
                <p>R${price}</p>
            </div>
            <div className="item-controls">
                <button onClick={() => removeFromCart(id)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    );
};
