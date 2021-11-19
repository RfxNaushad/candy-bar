import React from 'react';
import './Header.css';
import logo from '../../logox2.png';
const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt=''></img>
            <nav>
                <a href="/Home">Home</a>
                <a href="/Products">Products</a>
                <a href="/Blog">Blog</a>
            </nav>
        </div>
    );
};

export default Header;