import moment from 'moment';
import React from 'react';
import { GameBoxTeam } from './GameBoxTeam';
import './stylesheets/game-box.scss';

export default class GameBox extends React.Component {
  statusText() {
    if (this.props.game.status === 'Scheduled') {
      return moment(this.props.game.game_time).format('h:mm a')
    }

    if (this.props.game.status === 'Finished') {
      return 'Final'
    }

    return this.props.game.status
  }

  isWinning(side) {
    if (this.props.game.status !== 'Finished')
      return false

    if (this.props.game.away_team_score === this.props.game.home_team_score)
      return false

    if (side === 'away') 
      return parseInt(this.props.game.away_team_score) > parseInt(this.props.game.home_team_score)
  
    if (side === 'home')
      return parseInt(this.props.game.home_team_score) > parseInt(this.props.game.away_team_score)
  }

  render() {
    console.log(this.props.game)
    return(
      <div className="game-box">
        <div className="game-box-status">
          {this.statusText()}
        </div>

        <GameBoxTeam 
          logoUrl={this.props.game.away_team.logo}
          teamName={this.props.game.away_team.short_name}
          score={this.props.game.away_team_score}
          teamId={this.props.game.away_team_id}
          winning={this.isWinning('away')}
        />

        <GameBoxTeam 
          logoUrl={this.props.game.home_team.logo}
          teamName={this.props.game.home_team.short_name}
          score={this.props.game.home_team_score}
          teamId={this.props.game.home_team_id}
          winning={this.isWinning('home')}
        />
      </div>
    )
  }
}