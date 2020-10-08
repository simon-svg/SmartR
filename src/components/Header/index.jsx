import React from 'react';
import ReactDOM from 'react-dom';

// css
import './header.css';

// components
import Logo from './Logo';
import Nav from './Nav'


function Header(){
    return(
        <div className="header">
            <div className="wrapper">
                <div className="header__cont">
                    <Logo />
                    <Nav />
                </div>
            </div>
        </div>
    )
}

export default Header;