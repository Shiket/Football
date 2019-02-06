import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Header from './Components/Header';
import League from './Components/League';
import Gallery from './Components/Gallery';
import FavTeams from './Components/FavTeams';
import Axios from 'axios';
// import SerieA from './Components/img/serieA.png'
// import LaLiga from './Components/img/laLiga.png'
import PremierLeague from './Components/img/premierLeague.png'
// import Eredivisie from './Components/img/erediv.png'
// import Bundesliga from './Components/img/bundesLiga.png'
// import Ligue1 from './Components/img/ligue1.png'


class App extends Component {
  state = {
    leagues: [],
  }

  componentDidMount() {
    let config = {
      headers: { 'X-Auth-Token': 'a98f54234b9e4c41ad81f5858f8766cd' },
      url: 'https://api.football-data.org/v2/competitions/',
      dataType: 'json',
      type: 'GET',
    }

    Axios.get(config.url + 'PL/standings?standingType=TOTAL', config)
      .then(res => {
        let tmp = [];

        tmp.push({
          name: res.data.competition.name,
          country: res.data.competition.area.name,
          logo: { PremierLeague },
          firstPlace: res.data.standings[0].table[0].team.name,
          secondPlace: res.data.standings[0].table[1].team.name
        })

        this.setState ({
          leagues: [...tmp]
        })
      })
  }

  render() {
    if (this.state.leagues.length === 0) return <div>Loading</div>
    return (
      <Router className="App">
        <div className="row">
          <div className="col-12"><Header /></div>
          <div className="col-2"><FavTeams /></div>
          <div className="col-10">
            <Route exact path="/" render={() => <League teamObj={{ team: this.state.leagues }} />} />
            <Route path="/Components/Gallery" component={Gallery} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
