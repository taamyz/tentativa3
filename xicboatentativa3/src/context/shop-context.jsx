import React, { createContext, useState, useEffect } from 'react';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../service/firebase.js"

export const ShopContext = createContext(null);

const firestore = getFirestore(app);

export const ShopContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({}); // Initializes cartItems as an empty object
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsCollection = collection(firestore, "produtos");
            const productsSnapshot = await getDocs(productsCollection);

            const fetchedProducts = productsSnapshot.docs.map((doc) => ({
                id: doc.id, ...doc.data()
            }));

            setProducts(fetchedProducts);
        };

        fetchProducts();
    }, []);

    const getTotalCartAmount = () => {
        return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
            const product = products.find(p => p.id === itemId);
            return total + (product?.price || 0) * quantity;
        }, 0);
    }

    const modifyCart = (itemId, change) => {
        setCartItems(prev => {
            const updatedQuantity = (prev[itemId] || 0) + change;

            const updatedCart = { ...prev };
            if (updatedQuantity <= 0) {
                delete updatedCart[itemId]; // Removes the product from the cart if its quantity is 0 or negative
            } else {
                updatedCart[itemId] = updatedQuantity;
            }

            return updatedCart;
        });
    }

    const addToCart = (itemId) => modifyCart(itemId, 1);
    const removeFromCart = (itemId) => modifyCart(itemId, -1);

    return (
        <ShopContext.Provider value={{ cartItems, products, getTotalCartAmount, addToCart, removeFromCart }}>
            {children}
        </ShopContext.Provider>
    );
};
