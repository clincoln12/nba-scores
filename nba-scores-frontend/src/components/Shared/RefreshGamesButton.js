import React from 'react';
import './stylesheets/refresh-button.scss';

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
        <button class="button button-refresh" onClick={this.refreshApiCall}>Update Scores</button>
      </div>
    )
  }
}