import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cartItem";
import { useNavigate } from 'react-router-dom';
import "../cart/cart.css";

export const Cart = () => {
    const navigate = useNavigate();
    const { cartItems, getTotalCartAmount, products } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    return (
        <div className="cart">
            <div>
                <h1>Itens no Carrinho</h1>
            </div>

            {Object.keys(cartItems).length === 0 ? (
                <p>Carrinho vazio, café frio</p>
            ) : (
                <div className="cartItems">
                    {Object.entries(cartItems).map(([itemId, quantity]) => {
                        const productData = products.find(product => product.id === itemId);
                        if(!productData) return null;
                        return (
                            <CartItem 
                                data={productData}
                                key={itemId} 
                            />
                        );
                    })}
                    <div className="checkout">
                        <p>Subtotal: R${totalAmount.toFixed(2)}</p>
                        <button onClick={() => navigate('/')}>Continue Comprando</button>
                        <button onClick={() => navigate('/checkout')}>Concluir Compra</button>
                    </div>
                </div>
            )}
        </div>
    );
};