import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { fetchSchedule } from '../../redux/asyncActions';
import './stylesheets/schedule.scss';

class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.props.dispatch(fetchSchedule())
  }

  whatToRender() {
    if (this.props.schedule.loading) {
      return (<div>Loading...</div>)
    }

    let scheduleDates = []

    for (const date in this.props.schedule) {
      console.log(this.props.schedule[date][0])
      let gameDivs = this.props.schedule[date].map((game) => (
        <div key={game.id}>
          <div className="league-schedule-game">
            <img src={game.away_team.logo} /> {game['away_team']['full_name']} at <img src={game.home_team.logo} /> {game['home_team']['full_name']} [{moment(game['game_time']).format('h:mm a')}]
          </div>
        </div>
      ))

      scheduleDates.push(
          <div key={date}>
            <div className="league-schedule-header">
              <h2>
              {moment(date).format('dddd, MMM DD')}
              </h2>
            </div>

            {gameDivs}
          </div>
      )
    }

    return(scheduleDates)
  }

  render() {
    return (
      <div className="league-schedule-container">
        {this.whatToRender()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  schedule: state.schedule
})

export default connect(mapStateToProps)(Schedule)