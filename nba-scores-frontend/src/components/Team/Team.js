import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { fetchTeamGames } from '../../redux/asyncActions';
import AddComment from '../Comments/AddComment';
import Comments from '../Comments/Comments';
import './stylesheets/team.scss';

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
          <div className="team-schedule-header">
            <h2>{this.props.teamGames.team.full_name}</h2>
          </div>

          <div>
            {this.props.teamGames.games.map((game) => (
            <div key={game.id} className="team-schedule-game">
              <img src={game.home_team.logo} /> {game.home_team.full_name} {game.home_team_score} 
              &nbsp;-&nbsp; 
              {game.away_team_score} {game.away_team.full_name} <img src={game.away_team.logo} /> 
              &nbsp; [{moment(game.game_time).format('MMM DD')}]
            </div>
            ))}
          </div>
        </div>
      )
    }
  }

  render() {
    return(
      <>
      <div className="team-schedule-container">
        {this.whatToRender()}
      </div>

      <Comments 
        teamId={this.getTeamIdFromParam()}
      />

      <AddComment />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  teamGames: state.teamGames
})

export default connect(mapStateToProps)(Team)