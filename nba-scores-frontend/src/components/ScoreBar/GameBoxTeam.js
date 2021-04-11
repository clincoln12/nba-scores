import { Link } from 'react-router-dom';

export const GameBoxTeam = (props) => {
  return(
    <div className="game-box-team-score">
      <div className="game-box-team-score-image-wrapper">
        <img src={props.logoUrl} />
      </div>

      <div className="game-box-team-score-name">
        <Link to={`/team?id=${props.teamId}`}>
           {props.teamName}
        </Link>
      </div>

      <div>
        {props.score}
      </div>
    </div>
  )
}