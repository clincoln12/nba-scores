import React from 'react';
import GameBoxesContainer from './GameBoxesContainer';
import ScoreBarDateDropdown from './ScoreBarDateDropdown';
import { connect } from 'react-redux';

class ScoreBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <ScoreBarDateDropdown />
        <GameBoxesContainer />
      </div>
    )
  }
}

export default connect()(ScoreBar);