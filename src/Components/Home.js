import React, { Component } from 'react';
import './components.css';
import Gtrophy from './img/g-tro.png'
import Strophy from './img/s-tro.png'
import SerieA from './img/serieA.png'
import LaLiga from './img/laLiga.png'
import PremierLeague from './img/premierLeague.png'
import Eredivisie from './img/erediv.png'
import Bundesliga from './img/bundesLiga.png'
import Ligue1 from './img/ligue1.png'

class Home extends Component {
    render() {
        return (
            <div>
                <div className="row mt-5 d-flex align-items-center">
                    <div className="offset-1"></div>
                    <div className="col-1">
                        <img src={PremierLeague} alt="LeagueLogo" width="90" height="90"></img></div>
                    <div className="col-9">
                        <div className="leagueBox">
                            <div className="row">
                                <div className="container d-flex pt-3">
                                    <div className="col-3"><h5>PremierLeague</h5></div>
                                    <div className="col-3"><h5>ENGLAND</h5></div>
                                    <div className="firstPlace col-3">
                                        <img className="mr-3" src={Gtrophy} alt="goldTrophy" width="27" height="27"></img>
                                        <h5>FC Liverpool</h5>
                                    </div>

                                    <div className="firstPlace col-3">
                                        <img className="mr-3" src={Strophy} alt="silverTrophy " width="27" height="27"></img>
                                        <h5>Manchester City</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offset-1"></div>
                </div>
            </div>

        );
    }
}


export default Home;