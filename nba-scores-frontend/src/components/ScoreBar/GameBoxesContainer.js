import React from 'react';
import { connect } from 'react-redux';
import GameBox from './GameBox';

class GameBoxesContainer extends React.Component {
  render() {
    return(
      <GameBox />
    )
  }
}

const mapStateToProps = (state) => ({
  selectedDate: state.selectedDate
})

export default connect(mapStateToProps)(GameBoxesContainer)