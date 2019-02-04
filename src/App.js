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
import SerieA from './Components/img/serieA.png'
import LaLiga from './Components/img/laLiga.png'
import PremierLeague from './Components/img/premierLeague.png'
import Eredivisie from './Components/img/erediv.png'
import Bundesliga from './Components/img/bundesLiga.png'
import Ligue1 from './Components/img/ligue1.png'


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
      .then(resp => {
        let tmp = [];
        tmp.push({
          name: resp.data.competition.name,
          country: resp.data.competition.area.name,
          ico: {PremierLeague},
          firstPlace: resp.data.standings[0].table[0].team.name,
          secondPlace: resp.data.standings[0].table[1].team.name
        })
        this.setState(state => {
         const leagues = state.leagues.concat(tmp);
          return {
            leagues
          };
        });
      })
alert(this.state.leagues)
  }


  render() {
    return (
      <Router className="App">
        <div className="row">
          <div className="col-12"><Header /></div>
          <div className="col-2"><FavTeams /></div>
          <div className="col-10">
            <Route exact path="/" component={League} />
            <Route path="/Components/Gallery" component={Gallery}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
