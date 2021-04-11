import moment from 'moment';
import React from 'react';
import { GameBoxTeam } from './GameBoxTeam';
import './stylesheets/game-box.scss';

export default class GameBox extends React.Component {
  render() {
    return(
      <div className="game-box">
        <div className="game-box-status">
          {this.props.game.status === 'Scheduled' ? 
            moment(this.props.game.game_time).format('h:mm a') : 
           'Final'
          }
        </div>

        <GameBoxTeam 
          logoUrl={this.props.game.away_team.logo}
          teamName={this.props.game.away_team.short_name}
          score={this.props.game.away_team_score}
        />

        <GameBoxTeam 
          logoUrl={this.props.game.home_team.logo}
          teamName={this.props.game.home_team.short_name}
          score={this.props.game.home_team_score}
        />
      </div>
    )
  }
}

