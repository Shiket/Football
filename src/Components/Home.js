import React, { Component } from 'react';
import './style.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
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
                <div className="row">
                    <div className="col-4">

                        <div className="box mt-5">
                            <div className="half" >
                                <img className="float-left mt-3" src={PremierLeague} width="180" height="180" alt="Premier League logo"></img>
                            </div>

                            <div className="description pt-2">
                                <h5 className="pl-2  pb-1 text-center">PremierLeauge</h5>
                                <h5 className="text-center mt-4">ENGLAND</h5>
                                <p className="mt-5 text-center"> 1. Liverpool <br />
                                    2. Manchester City <br />
                                    3. Chelsea
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">

                        <div className="box mt-5">
                            <div className="half" >
                                <img className="float-left mt-3" src={LaLiga} width="180" height="180" alt="Premier League logo"></img>
                            </div>

                            <div className="description pt-2">
                                <h5 className="pl-2  pb-1 text-center">LaLiga</h5>
                                <h5 className="text-center mt-4">Spain</h5>
                                <p className="mt-5 text-center"> 1. Fc Barcelona <br />
                                    2. Atletico M. <br />
                                    3. Sevilla</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">

                        <div className="box mt-5 mb-5">
                            <div className="half" >
                                <img className="float-left mt-3" src={SerieA} width="173" height="170" alt="Premier League logo"></img>
                            </div>

                            <div className="description pt-2">
                                <h5 className="pl-2  pb-1 text-center">PremierLeauge</h5>
                                <h5 className="text-center mt-4">ENGLAND</h5>
                                <p className="mt-5 text-center"> 1. Liverpool <br />
                                    2. Manchester City <br />
                                    3. Chelsea
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">

                        <div className="box mt-5">
                            <div className="half" >
                                <img className="float-left mt-3" src={Bundesliga} width="180" height="180" alt="Premier League logo"></img>
                            </div>

                            <div className="description pt-2">
                                <h5 className="pl-2  pb-1 text-center">PremierLeauge</h5>
                                <h5 className="text-center mt-4">ENGLAND</h5>
                                <p className="mt-5 text-center"> 1. Liverpool <br />
                                    2. Manchester City <br />
                                    3. Chelsea
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">

                        <div className="box mt-5">
                            <div className="half" >
                                <img className="float-left mt-3" src={Eredivisie} width="180" height="180" alt="Premier League logo"></img>
                            </div>

                            <div className="description pt-2">
                                <h5 className="pl-2  pb-1 text-center">PremierLeauge</h5>
                                <h5 className="text-center mt-4">ENGLAND</h5>
                                <p className="mt-5 text-center"> 1. Liverpool <br />
                                    2. Manchester City <br />
                                    3. Chelsea
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">

                        <div className="box mt-5">
                            <div className="half" >
                                <img className="float-left mt-3" src={Ligue1} width="180" height="180" alt="Premier League logo"></img>
                            </div>

                            <div className="description pt-2">
                                <h5 className="pl-2  pb-1 text-center">PremierLeauge</h5>
                                <h5 className="text-center mt-4">ENGLAND</h5>
                                <p className="mt-5 text-center"> 1. Liverpool <br />
                                    2. Manchester City <br />
                                    3. Chelsea
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}


export default Home;