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

class App extends Component {

  render() {
    return (
      <Router className="App">
        <div className="row">
          <div className="col-12"><Header /></div>
          <div className="col-2"><FavTeams /></div>
          <div className="col-10">
            <Route exact path="/" component={League} />
            <Route path="/Components/Gallery" component={Gallery} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;