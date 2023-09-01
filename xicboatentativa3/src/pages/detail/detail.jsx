import React from "react";
import { ShopContext } from "../../context/shop-context";
export const Detail = (props) => {
    const {id, productName, price, productImage} = props.data;

    const {addToCart, cartItems} = useContext(ShopContext);

    const cartItemAmount = cartItems[id]
    
    return ( <div className="product">
        <img src={productImage} />
        <Product data={product}/>
                    <div className="description">
                        <p><b>{productName}</b></p>
                        <p>R${price}</p>
                    </div>
                        <button className="addToCartBttn" onClick={() => addToCart(id)}>
                            Adicionar ao carrinho {cartItemAmount > 0 && <> ({cartItemAmount})</>}
                        </button>
        </div>);
};