import React, { Component } from 'react';
import logo from './img/ball.png'
import './components.css';

class Header extends Component {
    render() {
        return (
            <header className="d-flex pl-3 pt-3">
                    <img className="logo-img" src={logo} width="40" height="40" alt="ball"></img>
                    <h4 className="logo-name">Football App</h4>
                    <h1 className="caption mt-1 text-center mx-auto">SELECT YOUR FAVORITE LEAGUE</h1>
            </header>
        );
    }
}


export default Header;