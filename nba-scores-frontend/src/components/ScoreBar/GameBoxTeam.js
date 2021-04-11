export const GameBoxTeam = (props) => {
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