import React from 'react'
import Axios from 'axios'
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
        }

        async componentDidMount() {
            let config = {
                headers: { 'X-Auth-Token': 'a98f54234b9e4c41ad81f5858f8766cd' },
                url: 'https://api.football-data.org/v2/competitions/',
                dataType: 'json',
                type: 'GET',
            }

            // axios.all

            const premierLeague = await Axios.get(config.url + 'PL/standings?standingType=TOTAL', config)
                .then(res => res = {
                    name: res.data.competition.name,
                    country: res.data.competition.area.name,
                    logo: PremierLeagueLogo,
                    firstPlace: res.data.standings[0].table[0].team.name,
                    secondPlace: res.data.standings[0].table[1].team.name
                })

            const serieA = await Axios.get(config.url + 'SA/standings?standingType=TOTAL', config)
                .then(res => res = {
                    name: res.data.competition.name,
                    country: res.data.competition.area.name,
                    logo: SerieALogo,
                    firstPlace: res.data.standings[0].table[0].team.name,
                    secondPlace: res.data.standings[0].table[1].team.name
                })

            const bundesLiga = await Axios.get(config.url + 'BL1/standings?standingType=TOTAL', config)
                .then(res => res = {
                    name: res.data.competition.name,
                    country: res.data.competition.area.name,
                    logo: BundesligaLogo,
                    firstPlace: res.data.standings[0].table[0].team.name,
                    secondPlace: res.data.standings[0].table[1].team.name
                })

            const ligue1 = await Axios.get(config.url + 'FL1/standings?standingType=TOTAL', config)
                .then(res => res = {
                    name: res.data.competition.name,
                    country: res.data.competition.area.name,
                    logo: Ligue1Logo,
                    firstPlace: res.data.standings[0].table[0].team.name,
                    secondPlace: res.data.standings[0].table[1].team.name
                })

            const primeraDivision = await Axios.get(config.url + 'PD/standings?standingType=TOTAL', config)
                .then(res => res = {
                    name: res.data.competition.name,
                    country: res.data.competition.area.name,
                    logo: LaLigaLogo,
                    firstPlace: res.data.standings[0].table[0].team.name,
                    secondPlace: res.data.standings[0].table[1].team.name
                })

            const eredivisie = await Axios.get(config.url + 'DED/standings?standingType=TOTAL', config)
                .then(res => res = {
                    name: res.data.competition.name,
                    country: res.data.competition.area.name,
                    logo: EredivisieLogo,
                    firstPlace: res.data.standings[0].table[0].team.name,
                    secondPlace: res.data.standings[0].table[1].team.name
                })


            this.setState({ leagues: [premierLeague, serieA, primeraDivision, bundesLiga, ligue1, eredivisie] })
        }

        render() {
            if (this.state.leagues.length === 0) return <div>Loading..</div>
            return <WrappedComponent {...this.props} leagues={this.state.leagues} />
        }
    }
}
