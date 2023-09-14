import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Coffee } from "phosphor-react";
import "./navbar.css"
import Logo from "../../assets/logo.svg"
import { ShopContext } from "../../context/shop-context";




export const Navbar = () => {


    const { getTotalCartAmount } = useContext(ShopContext);

    const totalAmount = getTotalCartAmount()


    return (
        <div className="navbar">  
            <div className="links">
                <Link to ="/"><div className='logo'><img src={Logo} alt="logo"/></div></Link>
                <Link to ="/cart"><div className='cartcontainer'><div className="icon"><Coffee size={32}></Coffee></div><div className="links">R$ {totalAmount}</div></div></Link>
                
            </div>
        </div>);
};