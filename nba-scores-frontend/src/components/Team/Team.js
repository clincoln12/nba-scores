import React from 'react';
import { connect } from 'react-redux';
import { fetchTeamGames } from '../../redux/asyncActions';

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
  }

  render() {
    return(
      <div>
        {this.whatToRender()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  teamGames: state.teamGames
})

export default connect(mapStateToProps)(Team)