import React, { useEffect, useState, useContext } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../service/firebase.js";
import { ShopContext } from "../../context/shop-context"; 
import { 
    ContainerFutureProducts, 
    ListProducts, 
    Product, 
    NameProduct, 
    DescriptionProduct, 
    PriceProduct, 
    AddToCartButton, 
    ProductDetailLink 
} from "./style";
import "../shop/shop.css";

export const Shop = () => {
    const [productList, setProductList] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const { addToCart, cartItems } = useContext(ShopContext); 

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const produtosCollection = collection(getFirestore(app), "produtos");
                const produtosSnapshot = await getDocs(produtosCollection);
    
                setProductList(produtosSnapshot.docs.map((doc) => ({
                    id: doc.id, 
                    title: doc.data().title, 
                    price: doc.data().price,
                    description: doc.data().description,
                    image: doc.data().image,
                })));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
    
        fetchProdutos();
    }, []);

    if (loading) return <p>Carregando produtos...</p>;
    if (error) return <p>Pior do que pilão, nenhum produto aqui não {error}</p>;

    return (
        <ContainerFutureProducts>
            <h1>Compre os melhores cafés!</h1>
            <ListProducts>
                {productList.map(product => (
                    <Product key={product.id}>
                        <img src={`src/assets/${product.image}`} alt={product.productName} />
                        <NameProduct>{product.productName}</NameProduct>
                        <PriceProduct>R${product.price}</PriceProduct>
                        <DescriptionProduct>{product.description}</DescriptionProduct> 
                        <AddToCartButton onClick={() => addToCart(product.id)}>
                            Adicionar ao carrinho 
                            {cartItems[product.id] > 0 && <> ({cartItems[product.id]})</>}
                        </AddToCartButton>
                        <ProductDetailLink to={`/detail/${product.id}`}>Ver detalhes</ProductDetailLink>
                    </Product>
                ))}
            </ListProducts>
        </ContainerFutureProducts>
    );
};