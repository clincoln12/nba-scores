import React from 'react';

export default class Team extends React.Component {
  getTeamIdFromParam() {
    // Found this way to parse URL parameters online
    const urlParams = new URLSearchParams(window.location.search);

    return urlParams.get('id')
  }

  render() {
    return(
      <div>

      </div>
    )
  }
}