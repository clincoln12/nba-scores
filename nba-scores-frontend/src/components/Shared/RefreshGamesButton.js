import React from 'react';
import { LoadingCircle } from './LoadingCircle';
import './stylesheets/refresh-button.scss';

export default class RefreshGamesButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: false }
    this.refreshApiCall = this.refreshApiCall.bind(this);
  }

  refreshApiCall() {
    this.setState( { loading: true })
    document.getElementById('refresh-button').innerText = 'Please wait...'

    fetch('http://localhost:3001/games/all', {
      method: 'PUT'
    })
    .then(response => response.json())
    .then(json => json.success ? window.location.reload() : null)
  }

  render() {
    return(
      <div>
        <button id="refresh-button" class="button button-refresh" onClick={this.refreshApiCall}>Update Scores</button>
        {this.state.loading ? <LoadingCircle /> : null}
      </div>
    )
  }
}