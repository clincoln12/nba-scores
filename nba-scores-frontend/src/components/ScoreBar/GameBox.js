import moment from 'moment';
import React from 'react';
import { GameBoxTeam } from './GameBoxTeam';
import './stylesheets/game-box.scss';

export default class GameBox extends React.Component {
  render() {
    console.log(this.props.game)
    return(
      <div className="game-box">
        <div className="game-box-status">
          {this.props.game.status === 'Scheduled' ? 
            moment(this.props.game.game_time).format('h:mm a') : 
           this.props.game.status
          }
        </div>

        <GameBoxTeam 
          logoUrl={this.props.game.away_team.logo}
          teamName={this.props.game.away_team.short_name}
          score={this.props.game.away_team_score}
          teamId={this.props.game.away_team_id}
        />

        <GameBoxTeam 
          logoUrl={this.props.game.home_team.logo}
          teamName={this.props.game.home_team.short_name}
          score={this.props.game.home_team_score}
          teamId={this.props.game.home_team_id}
        />
      </div>
    )
  }
}