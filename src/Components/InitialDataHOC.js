import React from 'react'
import axios from 'axios'
import PremierLeagueLogo from './img/premierLeague.png'
import EredivisieLogo from './img/erediv.png'
import BundesligaLogo from './img/bundesLiga.png'
import Ligue1Logo from './img/ligue1.png'
import SerieALogo from './img/serieA.png'
import LaLigaLogo from './img/laLiga.png'

export default (WrappedComponent) => {

    return class InitialData extends React.Component {
        state = {
            leagues: [],
            tables: [],
        }
        async componentDidMount() {
            let config = {
                headers: { 'X-Auth-Token': 'a98f54234b9e4c41ad81f5858f8766cd' },
                url: 'https://api.football-data.org/v2/competitions/',
                url2: '/standings?standingType=TOTAL',
                dataType: 'json',
                type: 'GET',
            }

            const leagueIco = [PremierLeagueLogo, SerieALogo, BundesligaLogo, Ligue1Logo, LaLigaLogo, EredivisieLogo];

            const data = await axios.all([
                axios.get(`${config.url}PL${config.url2}`, config),
                axios.get(`${config.url}SA${config.url2}`, config),
                //     axios.get(`${config.url}BL1${config.url2}`, config),
                //     axios.get(`${config.url}FL1${config.url2}`, config),
                //     axios.get(`${config.url}PD${config.url2}`, config),
                //     axios.get(`${config.url}DED${config.url2}`, config),
            ])

            const arr = data.map((res, i) => ({
                name: res.data.competition.name,
                country: res.data.competition.area.name,
                logo: leagueIco[i],
                firstPlace: res.data.standings[0].table[0].team.name,
                secondPlace: res.data.standings[0].table[1].team.name,
            }));


            const dataList = data.map(res => ({
                league: res.data.competition.name.split(' ').join(''),
                team: res.data.standings[0].table.map(a => [a.team.name, a.won, a.draw, a.lost])
            }));
            // ,
            //             lost: res.data.standings[0].table.map(a => a.lost),
            //                 won: res.data.standings[0].table.map(a => a.won),
            //                     draws: res.data.standings[0].table.map(a => a.draw),
            //                         teamName: res.data.standings[0].table.map(a => a.team.name),
            this.setState({
                leagues: [...arr],
                tables: [...dataList]
            })
        }

        render() {
            if ((this.state.leagues.length === 0) || this.state.tables === 0) return <div>Loading..</div>
            return <WrappedComponent {...this.props} leagues={this.state.leagues} tables={this.state.tables} />
        }
    }
}
