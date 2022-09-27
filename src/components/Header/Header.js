import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="anchor">
                <a href="/order">Order</a>
                <a className='anchor-2' href="/Order Review">
                    Review
                </a>
                <a className='anchor-3' href="/Inventory">
                    Inventory
                </a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;