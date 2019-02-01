import React, { Component } from 'react';
import './style.css';
import Team from './img/team.png'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class FavTeams extends Component {
    render() {
        return (
            <div className="content d-block">
                
                <div className="bghead">
                    <img className="arrow" src={Team} alt="arrow" width="22" height="22" ></img>
                    <h3 className="caption">YOUR TEAMS</h3>
                </div>
                
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Components/Gallery">Gallery</Link></li>
                </ul>

            </div>
        );
    }
}

export default FavTeams;