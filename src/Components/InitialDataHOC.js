import React from 'react'
import axios from 'axios'
import PremierLeagueLogo from './img/premierLeague.png'
import EredivisieLogo from './img/erediv.png'
import BundesligaLogo from './img/bundesLiga.png'
import Ligue1Logo from './img/ligue1.png'
import SerieALogo from './img/serieA.png'
import LaLigaLogo from './img/laLiga.png'
import placeholder from './img/logo-placeholder.png'
import { TeamContext } from './ContextApi'

export default (WrappedComponent) => {
    return class InitialData extends React.Component {
        state = {
            leagues: [],
            tables: [],
            favourites: [],
            addFavourite: (data) => (this.state.favourites.length === 0 || this.state.favourites.every(a => a[0] !== data[0])) ?
                    this.setState({
                        favourites: [...this.state.favourites, data]
                    }) : alert('Team is already on you list')
        }

        async componentDidMount() {
            const leagueIco = [PremierLeagueLogo, SerieALogo, BundesligaLogo, Ligue1Logo, LaLigaLogo, EredivisieLogo];
            const config = {
                headers: { 'X-Auth-Token': process.env.REACT_APP_API_KEY },
                url: 'https://api.football-data.org/v2/competitions/',
                url2: '/standings?standingType=TOTAL',
                dataType: 'json',
                type: 'GET',
            }

            const data = await axios.all([
                axios.get(`${config.url}PL${config.url2}`, config),
                axios.get(`${config.url}SA${config.url2}`, config),
                // axios.get(`${config.url}BL1${config.url2}`, config),
                // axios.get(`${config.url}FL1${config.url2}`, config),
                // axios.get(`${config.url}PD${config.url2}`, config),
                // axios.get(`${config.url}DED${config.url2}`, config),
            ])

            const leaguesData = data.map((res, i) => ({
                name: res.data.competition.name,
                country: res.data.competition.area.name,
                logo: leagueIco[i],
                firstPlace: res.data.standings[0].table[0].team.name,
                secondPlace: res.data.standings[0].table[1].team.name,
            }));

            const teamData = data.map(res => ({
                league: res.data.competition.name.split(' ').join(''),
                team: res.data.standings[0].table.map(a =>
                    [a.team.name, a.won, a.draw, a.lost, a.points, a.playedGames,
                    a.team.crestUrl == null || a.team.crestUrl === '' ? placeholder : a.team.crestUrl, a.team.id])
            }));

            this.setState({
                leagues: [...leaguesData],
                tables: [...teamData],
            })
        }

        render() {
            if ((this.state.leagues.length === 0) || this.state.tables === 0) return <div>Loading..</div>
            return (
                <TeamContext.Provider value={this.state}>
                    <WrappedComponent {...this.props}
                        leagues={this.state.leagues}
                        tables={this.state.tables}
                        favourites={this.state.favourites} />
                </TeamContext.Provider>
            );
        }
    }
}
