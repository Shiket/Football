import React from 'react';


const LeagueStandings = (props) => {
  console.log(props)
  return (
    <div className="liga">
      NAZWA LIGI: {props.match.params.league}
    </div>
  );
}

export default LeagueStandings