import React from 'react';
import GameBoxesContainer from './GameBoxesContainer';
import ScoreBarDateDropdown from './ScoreBarDateDropdown';
import { connect } from 'react-redux';
import RefreshGamesButton from '../Shared/RefreshGamesButton';

class ScoreBar extends React.Component {
  constructor(props) {
    super(props);
  }

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

export default connect()(ScoreBar);