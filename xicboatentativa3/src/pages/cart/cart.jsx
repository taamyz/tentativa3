import React, { useContext } from "react";
import { PRODUCTS } from "../shop/products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cartItem";
import "../cart/cart.css"

export const Cart = () => {

    const { cartItems, getTotalCartAmount } = useContext(ShopContext);

    const totalAmount = getTotalCartAmount()

    const isCartEmpty = () => {
        for (let id in cartItems) {
            if (cartItems[id] !== 0) {
                return false;
            }
        }
        return true;
    }

    return (
        <div className="cart">
            <div>
                <h1>Itens no Carrinho</h1>
            </div>
    
            {isCartEmpty() ? (
                <p>Carrinho vazio, café frio</p>
            ) : (
                <div className="cartItems">
                    {PRODUCTS.map((product) => {
                        if (cartItems[product.id] !== 0) {
                            return <CartItem data={product} key={product.id} />;
                        }
                        return null;
                    })}
                    <div className="checkout">
                        <p>Subtotal: R${totalAmount}</p>
                        <button>Continue Comprando</button>
                        <button>Concluir Compra</button>
                    </div>
                </div>
            )}
        </div>
    );


};