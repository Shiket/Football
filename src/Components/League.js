import React from 'react';
import './components.css';
import Gtrophy from './img/g-tro.png'
import Strophy from './img/s-tro.png'

import InitialData from './InitialDataHOC'

const League = (props) => {
    console.log(props.leagues)
    function handleClick(e){
        e.preventDefault();
        console.log('The link was clicked.');
    }

    return (
        props.leagues.map(league =>
            <div>
                <div className="row mt-5 d-flex align-items-center">
                    <div className="offset-1"></div>
                    <div className="col-1">
                        <img src={league.logo} alt="LeagueLogo" width="90" height="90"></img></div>
                    <div className="col-9">
                        <div onClick={handleClick} className="leagueBox">
                            <div className="row">
                                <div className="container d-flex pt-3">
                                    <div className="col-2"><span>{league.name}</span></div>
                                    <div className="col-2"><span className="pl-4">{league.country.toUpperCase()}</span></div>
                                    <div className="offset-1"></div>
                                    <div className="topTeams col-4">
                                        <img className="mr-3" src={Gtrophy} alt="goldTrophy" width="27" height="27"></img>
                                        <span>{league.firstPlace}</span>
                                    </div>
                                    <div className="topTeams col-4">
                                        <img className="mr-3" src={Strophy} alt="silverTrophy " width="27" height="27"></img>
                                        <span>{league.secondPlace}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offset-1"></div>
                </div>
            </div>
        )
    );
}

export default InitialData(League);