import React, { Component } from 'react';
import logo from './img/ball.png'
import './components.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo pl-3 pt-3">
                    <img className="logo-img" src={logo} width="40" height="40" alt="ball"></img>
                    <h4 className="logo-name">Football App</h4>
                </div>
                    <h1 className="caption mt-4 text-center mx-auto">SELECT YOUR FAVORITE LEAGUE</h1>
            </header>
        );
    }
}


export default Header;