import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { fetchSchedule } from '../../redux/asyncActions';

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
        <div>
          <div>
            {game['away_team']['full_name']} at {game['home_team']['full_name']}
          </div>

          <div>
          {moment(game['game_time']).format('h:mm a')}
          </div>
        </div>
      ))

      scheduleDates.push(
          <div key={date}>
            <div>
              <h1>
              {moment(date).format('dddd, MMM DD')}
              </h1>
            </div>

            {gameDivs}
          </div>
      )
    }

    return(scheduleDates)
  }

  render() {
    return (
      <div>
        {this.whatToRender()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  schedule: state.schedule
})

export default connect(mapStateToProps)(Schedule)