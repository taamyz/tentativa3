import React, { useEffect, useState, useContext } from "react"; 
import "../shop/shop.css";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../service/firebase.js";
import morango1 from '../../assets/morango1.jpg';
import { 
    ContainerFutureProducts, 
    ListProducts, 
    Product, 
    NameProduct, 
    DescriptionProduct, 
    PriceProduct, 
    AddToCartButton,
    ProductDetailLink
} from "./style.js";
import { ShopContext } from "../../context/shop-context"; 

export const Shop = () => {

    const [productList, setProductList] = useState([]); 
    
    const { addToCart, cartItems } = useContext(ShopContext); 
    
    const firestore = getFirestore(app);

    useEffect(() => {
        const fetchProdutos = async () => {
            const produtosCollection = collection(firestore, "produtos");
            const produtosSnapshot = await getDocs(produtosCollection);

            setProductList(produtosSnapshot.docs.map((doc) => ({
                id: doc.id, ...doc.data()
            })));
        };
        
        fetchProdutos();
    }, [firestore]);

    return (
        <ContainerFutureProducts>
            <h1>Compre os melhores cafés!</h1>
            <ListProducts>
                {productList.map(product => (
                    <Product key={product.id}>
                        <img src={`src/assets/${product.image}`} alt={product.title} />
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