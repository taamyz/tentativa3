import React from 'react'; 
import { Link } from 'react-router-dom';
import { Coffee } from "phosphor-react";
import "./navbar.css"
import Logo from "../../assets/logo.svg"

export const Navbar = () => {
    return (
        <div className="navbar">  
            <div className="links">
                <Link to ="/"><div className='logo'><img src={Logo} alt="logo"/></div></Link>
                <Link to ="/cart"><Coffee size={32}></Coffee></Link>
            </div>
        </div>);
};