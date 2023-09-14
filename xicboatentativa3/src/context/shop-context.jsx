import React, { createContext, useState, useEffect } from 'react';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../service/firebase.js";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const firestore = getFirestore(app);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsCollection = collection(firestore, "produtos");
                const productsSnapshot = await getDocs(productsCollection);
                const fetchedProducts = productsSnapshot.docs.map(doc => ({
                    id: doc.id, ...doc.data()
                }));
                setProducts(fetchedProducts);

                let initialCart = {};
                for (let product of fetchedProducts) {
                    initialCart[product.id] = 0;
                }
                setCartItems(initialCart);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        
        fetchProducts();
    }, []);

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find((product) => product.id === String(item));
                if(itemInfo) {
                    totalAmount += cartItems[item] * itemInfo.price;
                }
            }
        }
        return totalAmount;
    }

    const addToCart = (itemId) => {
        setCartItems(prev => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1 
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems(prev => {
            if (prev[itemId] && prev[itemId] > 0) {
                return { ...prev, [itemId]: prev[itemId] - 1 };
            }
            return prev;
        });
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems(prev => ({ ...prev, [itemId]: newAmount }));
    };

    const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount };

    return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    );
};

export default ShopContextProvider;