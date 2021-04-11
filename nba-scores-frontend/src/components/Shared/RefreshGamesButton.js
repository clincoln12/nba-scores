import React from 'react';

export default class RefreshGamesButton extends React.Component {
  refreshApiCall() {
    fetch('http://localhost:6969/games/all', {
      method: 'PUT'
    })
    .then(response => response.json())
    .then(json => json.success ? window.location.reload() : null)
  }

  render() {
    return(
      <div>
        <button onClick={this.refreshApiCall}>Refresh all games</button>
      </div>
    )
  }
}