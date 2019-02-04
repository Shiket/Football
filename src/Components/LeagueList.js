import React from 'react';
import League from './League';

class LeagueList extends React.Component {
    render() {
        alert(this.props.name)
        return (
            <div>
                {this.props.leagues.map(leagues => <League {...leagues} />)}
            </div>
        );
    }
}

export default LeagueList;