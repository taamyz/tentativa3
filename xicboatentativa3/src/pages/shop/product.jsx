import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = ({ data }) => {
    const { id, title, price, image, description } = data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id] || 0;

    return (
        <div className="product">
            <img src={`src/assets/${image}`} alt={title} />
            <div className="description">
                <p><b>{title}</b></p>
                <p>R${price}</p>
                <p>{description}</p>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
                Adicionar ao carrinho {cartItemAmount > 0 && <> ({cartItemAmount})</>}
            </button>
            <Link to={`/detail/${id}`}>
                <button className="addToCartBttn">Ver detalhes</button>
            </Link>
        </div>
    );
};
