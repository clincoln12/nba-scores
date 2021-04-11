import { Link } from 'react-router-dom';

export const GameBoxTeam = (props) => {
  const teamName = () => {
    if (props.winning) {
      return <strong>{props.teamName}</strong>
    } else {
      return props.teamName
    }
  }

  const score = () => {
    if (props.winning) {
      return <strong>{props.score}</strong>
    } else {
      return props.score
    }
  }

  return(
    <div className="game-box-team-score">
      <div className="game-box-team-score-image-wrapper">
        <img src={props.logoUrl} />
      </div>

      <div className="game-box-team-score-name">
        <Link to={`/team?id=${props.teamId}`}>
           {teamName()}
        </Link>
      </div>

      <div>
        {score()}
      </div>
    </div>
  )
}