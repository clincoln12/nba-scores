import React from 'react';
import { connect } from 'react-redux';
import GameBox from './GameBox';
import './stylesheets/game-box-container.scss';

class GameBoxesContainer extends React.Component {

  whatToRender() {
    if (this.props.games.loading) {
      return (
        <div>
          Loading...
        </div>
      )
    }

    if (Array.isArray(this.props.games)) {
      return this.props.games.map((g) => (
        <GameBox 
          key={g.id}
          game={g}
        />
      ))
    }
  }

  render() {
    return(
      <div className="game-box-container">
        {this.whatToRender()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  scoresDate: state.scoresDate,
  games: state.games
})

export default connect(mapStateToProps)(GameBoxesContainer)