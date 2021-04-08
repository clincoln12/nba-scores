import React from 'react';
import GameBox from './GameBox';
import { connect } from 'react-redux';
import { fetchGames } from '../../redux/asyncActions';

const mapStateToProps = (state) => {
  console.log('down')
  console.log(state)
  console.log('up')
  return { games: state.games }
}

class ScoreBar extends React.Component {
  render() {
    return(
      <div>
        <GameBox />

        DELETE THIS AFTER EXPLAINING REDUX

        <button onClick={() => console.log('test')}>Test</button>

        <button onClick={() => this.props.dispatch(fetchGames())}>
          Fetch Games
         </button>
      </div>
    )
  }
}

export default connect()(ScoreBar);