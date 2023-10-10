import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "../../service/firebase";
import { ShopContext } from "../../context/shop-context";

function ProductDetail() {
    const { id } = useParams();
    const [thisProduct, setThisProduct] = useState(null);
    const firestore = getFirestore(app);
    const { addToCart, removeFromCart } = useContext(ShopContext);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productRef = doc(firestore, "produtos", id);
                const productDoc = await getDoc(productRef);

                if (productDoc.exists()) {
                    setThisProduct(productDoc.data());
                } else {
                    console.error("Não encontrei seu café");
                }
            } catch (error) {
                console.error("Não estamos funcionando agora", error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!thisProduct) {
        return <div>Carregando...</div>;
    }

    return (
       <div>
            
            <h1>{thisProduct.title}</h1>

            
            {thisProduct.image ? (
                <img src={`/src/assets/${thisProduct.image}`} alt={thisProduct.title} />
            ) : (
                <p>Imagem não disponível</p>
            )}

            <p>R${thisProduct.price}</p>
            <p>{thisProduct.description}</p>
        
            <div className="item-controls">
                <button onClick={() => removeFromCart(id)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => {
                    addToCart(id);
                    setQuantity(quantity + 1); 
                }}>+</button>
            </div>
        </div>
    );
}

export default ProductDetail;
