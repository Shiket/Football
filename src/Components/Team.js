import React from 'react';
import { Link } from 'react-router-dom';
import larrow from './img/larrow.png'
import axios from 'axios'

class Team extends React.Component {
  state = {
    team: [],
    matches: []
  }

  async componentDidMount() {
    let config = {
      headers: { 'X-Auth-Token': 'a98f54234b9e4c41ad81f5858f8766cd' },
      url: 'https://api.football-data.org/v2/',
      dataType: 'json',
      type: 'GET',
    }

    let id = this.props.fav.find(a => a[0].split(' ').join('') === this.props.match.params.team)

    await axios.get(`${config.url}teams/${id[2]}`, config)
      .then(res =>
        this.setState({
          team: {
            name: res.data.name,
            logo: res.data.crestUrl,
            country: res.data.area.name,
            league: res.data.activeCompetitions[0].name,
            founded: res.data.founded,
            stadium: res.data.venue,
            website: res.data.website,
            coach: res.data.squad.slice(-1)[0].name
          }
        }));

    await axios.get(`${config.url}teams/${id[2]}/matches?status=SCHEDULED`, config)
      .then(res2 =>
        this.setState({
          matches: {
            next: res2.data.matches
          }
        }));
  }

  render() {
    console.log(this.state.team.next)
    if (this.state.team.length === 0) return <div>Loading..</div>
    return (
      <div>
        <div className="table-header d-flex align-items-center">
          <Link to={`/Football/`}>
            <img className="mr-4" src={larrow} alt="arrow" width="40" height="40"></img>
          </Link>
          <h4>{this.state.team.name}</h4>
        </div>

        <div className="row pt-5">
          <div className="col-2">
            <div className="ml-5">
              <img src={this.state.team.logo} alt="logo" width="180" height="180"></img>
            </div>
          </div>
          <div className="col-8 ml-3">
            <h5 className="teamInfo"><b>LEAGUE:  </b> {this.state.team.league}</h5>
            <h5 className="teamInfo"><b>COUNTRY: </b> {this.state.team.country}</h5>
            <h5 className="teamInfo"><b>FOUNDED: </b> {this.state.team.founded}</h5>
            <h5 className="teamInfo"><b>STADIUM: </b> {this.state.team.stadium}</h5>
            <h5 className="teamInfo"><b>COACH:   </b> {this.state.team.coach}</h5>
            <h5 className="teamInfo"><b>WEBSITE: </b> <a href={this.state.team.website}>{(this.state.team.website).slice(11)}</a></h5>
          </div>
          <div className="col-2">
            <h2 className="mx-auto d-block">Need more api calls ;c</h2>
          </div>
          <div className="offset-1"></div>
        </div>
      </div>
    );
  }
}

export default Team;