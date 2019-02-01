import React, { Component } from 'react';

import logo from './img/ball.png'
import './style.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo pl-3 pt-3 mx-auto">
                    <img className="logo-img" src={logo} width="40" height="40" alt="ball"></img>
                    <h4 className="logo-name">Football App</h4>
                    <h1 className="caption text-center mt-2">SELECT YOUR FAVORITE LEAGUE</h1>
                </div>
            </header>
        );
    }
}


export default Header;