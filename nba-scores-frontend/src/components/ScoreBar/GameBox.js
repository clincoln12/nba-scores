import React from 'react';
import './stylesheets/game-box.scss';

export default class GameBox extends React.Component {
  render() {
    return(
      <div className="game-box">
        <div className="game-box-status">
           Final 
        </div>

        <GameBoxTeam 
          logoUrl="https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Philadelphia_76ers_logo.svg/1200px-Philadelphia_76ers_logo.svg.png"
          teamName="PHI"
          score="106"
        />

        <GameBoxTeam 
          logoUrl="https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/1200px-Boston_Celtics.svg.png"
          teamName="BOS"
          score="96"
        />
      </div>
    )
  }
}

const GameBoxTeam = (props) => {
  return(
    <div className="game-box-team-score">
      <div className="game-box-team-score-image-wrapper">
        <img src={props.logoUrl} />
      </div>

      <div className="game-box-team-score-name">
        {props.teamName}
      </div>

      <div>
        {props.score}
      </div>
    </div>
  )
}