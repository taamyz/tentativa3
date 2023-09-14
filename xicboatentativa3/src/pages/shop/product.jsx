import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Link } from 'react-router-dom';

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;

    const {addToCart, cartItems} = useContext(ShopContext);

    const cartItemAmount = cartItems[id]
    
    return ( <div className="product">
        <img src={productImage} />
                    <div className="description">
                        <p><b>{productName}</b></p>
                        <p>R${price}</p>
                    </div>
                        <button className="addToCartBttn" onClick={() => addToCart(id)}>
                            Adicionar ao carrinho {cartItemAmount > 0 && <> ({cartItemAmount})</>}
                        </button>
                        <Link to ={`/detail/${id}`}><button className="addToCartBttn">Ver detalhes
                        </button></Link></div>
        );
    };