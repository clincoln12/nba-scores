import React from 'react';
import GameBoxesContainer from './GameBoxesContainer';
import ScoreBarDateDropdown from './ScoreBarDateDropdown';
import RefreshGamesButton from '../Shared/RefreshGamesButton';

class ScoreBar extends React.Component {
  render() {
    return(
      <div>
        <ScoreBarDateDropdown />
        <GameBoxesContainer />
        <RefreshGamesButton />
      </div>
    )
  }
}

export default ScoreBar;