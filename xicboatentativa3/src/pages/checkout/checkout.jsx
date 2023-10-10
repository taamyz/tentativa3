// src/pages/checkout/checkout.jsx

import React, { useState, useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Checkout = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');

    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const firestore = getFirestore();

    const handleCheckout = async () => {
        if (email !== confirmEmail) {
            alert("Emails do not match!");
            return;
        }

        const orderData = {
            name,
            surname,
            phone,
            email,
            cartItems,
            total: getTotalCartAmount()
        };

        try {
            const docRef = await addDoc(collection(firestore, "orders"), orderData);
            alert(`Your order has been placed! Order ID: ${docRef.id}`);
        } catch (e) {
            console.error("Error placing order:", e);
        }
    };

    return (
        <div className="checkout-container">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" />
            <input value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="Sobrenome" />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefone" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
            <input value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} placeholder="Confirme o E-mail" />
            <button onClick={handleCheckout}>Finalizar Compra</button>
        </div>
    );    
};

export default Checkout;
