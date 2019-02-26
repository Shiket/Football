import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Header from './Components/Header'
import League from './Components/League'
import Gallery from './Components/Gallery'
import FavTeams from './Components/FavTeams'
import LeagueStandings from './Components/LeagueStandings'
import InitialData from './Components/InitialDataHOC'

class App extends Component {

  render() {
      console.log(this.props);
    return (
      <div className="App row">
          <div className="col-12"><Header /></div>
          <div className="col-2"><FavTeams /></div>
          <div className="col-10">
          <Switch>
            <Route exact path="/" render={() => <League leagues={this.props.leagues} />} />
            <Route path="/Components/Gallery" component={Gallery} />
            <Route path="/standings/:league" render={props => <LeagueStandings {...props} table={this.props.tables} />} />
          </Switch>
          </div>
        </div>
    );
  }
}

export default InitialData(App);