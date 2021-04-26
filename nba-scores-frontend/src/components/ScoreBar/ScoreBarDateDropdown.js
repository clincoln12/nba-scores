import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { setScoresDate } from '../../redux/actions';
import { fetchGames } from '../../redux/asyncActions';
import './stylesheets/date-dropdown.scss';

class ScoreBarDateDropdown extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchGames(this.props.scoresDate))
  }

  render() {
    return(
      <div>
        <select 
          value={this.props.scoresDate}
          onChange={(event) => {
            console.log('a')
            this.props.dispatch(setScoresDate(event.target.value))
            this.props.dispatch(fetchGames(event.target.value))
            console.log('g')
          }}
        >

          <option value={moment().subtract(1, 'days').format('YYYY-MM-DD')}>
            {moment().subtract(1, 'days').format('MMM Do')}
          </option>

          <option value={moment().format('YYYY-MM-DD')}>
            {moment().format('MMM Do')}
          </option>
          
          <option value={moment().add(1, 'days').format('YYYY-MM-DD')}>
            {moment().add(1, 'days').format('MMM Do')} 
          </option>
        </select>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  scoresDate: state.scoresDate
})

export default connect(mapStateToProps)(ScoreBarDateDropdown)