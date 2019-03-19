import React from 'react';
import { Table } from 'reactstrap';
import larrow from './img/larrow.png'
import { Link } from 'react-router-dom'
import { TeamContext } from './ContextApi'

const LeagueStandings = (props) => {
  const data = props.table.filter(a => a.league === props.match.params.league)

  return (
    <TeamContext.Consumer>
      {({ addFavourite }) => (
        <div>
          <div className="table-header d-flex align-items-center">
            <Link to={`/`}>
              <img className="mr-4" src={larrow} alt="arrow" width="40" height="40"></img>
            </Link>

            <h4>{props.match.params.league}</h4>
          </div>
          <div className="scrollable">
            <Table dark>
              <thead>
                <tr>
                  <th>lp.</th>
                  <th></th>
                  <th>Team</th>
                  <th>Points</th>
                  <th>Games</th>
                  <th>W</th>
                  <th>D</th>
                  <th>L</th>
                </tr>
              </thead>
              <tbody>
                {data[0].team.map((el, i) =>
                  <tr className="team" onClick={() => addFavourite([el[0], el[6], el[7]])} key={i}>
                    <th scope="row">{i + 1}</th>
                    <td><img src={el[6]} alt="team-logo" width="28" height="30"></img></td>
                    <td>{el[0]}</td>
                    <td>{el[4]}</td>
                    <td>{el[5]}</td>
                    <td>{el[1]}</td>
                    <td>{el[2]}</td>
                    <td>{el[3]}</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </div>
      )}
    </TeamContext.Consumer >
  );
}

export default LeagueStandings