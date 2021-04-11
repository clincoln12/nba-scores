import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { fetchTeamGames } from '../../redux/asyncActions';

class Team extends React.Component {
  constructor(props) {
    super(props);

    this.props.dispatch(fetchTeamGames(this.getTeamIdFromParam()));
  }

  getTeamIdFromParam() {
    // Found this way to parse URL parameters online
    const urlParams = new URLSearchParams(window.location.search);

    return urlParams.get('id')
  }

  whatToRender() {
    if (this.props.teamGames.loading) {
     return <div>Loading...</div>
    }

    if (this.props.teamGames.team) {
      return(
        <div>
          <div>
            <h1>{this.props.teamGames.team.full_name}</h1>
          </div>

          <div>
            {this.props.teamGames.games.map((game) => (
            <div key={game.id}>
              {game.home_team.full_name} {game.home_team_score} 
              &nbsp;-&nbsp; 
              {game.away_team_score} {game.away_team.full_name}
              &nbsp; {moment(game.game_time).format('MMM DD')}
            </div>
            ))}
          </div>
        </div>
      )
    }
  }

  render() {
    return(
      <div>
        {this.whatToRender()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  teamGames: state.teamGames
})

export default connect(mapStateToProps)(Team)