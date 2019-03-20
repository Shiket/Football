import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Header from './Components/Header'
import League from './Components/League'
import FavTeams from './Components/FavTeams'
import LeagueStandings from './Components/LeagueStandings'
import InitialData from './Components/InitialDataHOC'
import Team from './Components/Team'

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App row">
        <div className="col-12"><Header /></div>
        <div className="col-2"><FavTeams /></div>
        <div className="col-10">
            <Route exact path="/Football/" render={() => <League leagues={this.props.leagues} />} />
            <Route path="/Football/standings/:league" render={props => <LeagueStandings {...props} table={this.props.tables} />} />
            <Route path="/Football/fav/:team" render={props => <Team {...props} fav={this.props.favourites} />} />
        </div>
      </div>
    );
  }
}

export default InitialData(App);