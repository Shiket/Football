import React, { Component } from 'react';
import './components.css';
import Team from './img/team.png'
import { Link } from 'react-router-dom';
import { TeamContext } from './ContextApi'

class FavTeams extends Component {
    render() {
        return (
            <TeamContext.Consumer>
                {({ favourites }) => (
                    <div className="leftMenu d-block">
                        <div className="bghead">
                            <img className="favteamIco" src={Team} alt="arrow" width="22" height="22" ></img>
                            <h3 className="caption">YOUR TEAMS:</h3>
                        </div>
                        <div className="teamList mt-3">
                            {favourites.map(a =>
                                <div key={a[1].toString()}>
                                    <Link to={`/Football/fav/${(a[0]).split(' ').join('')}`}>
                                        <div className="singleTeam">
                                            <img className="mr-3" src={a[1]} alt="team-logo" width="28" height="30"></img> {a[0]}
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </TeamContext.Consumer>
        );
    }
}

export default FavTeams;
