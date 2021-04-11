import React from 'react';
import ScoreBar from './ScoreBar/ScoreBar';
import Schedule from './Schedule/Schedule';
import { Route, Switch } from 'react-router-dom';

export default class NbaScores extends React.Component {
  render() {
    return(
      <div>
        <Switch>
           <Route path="/" component={ScoreBar} exact />
           <Route path="/schedule" component={Schedule} />
           <Route component={() => (
             <div>Invalid path. Please go to a valid link.</div>
           )}/>
        </Switch>
      </div>
    )
  }
}