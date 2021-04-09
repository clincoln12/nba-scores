import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { setScoresDate } from '../../redux/actions';

class ScoreBarDateDropdown extends React.Component {
  render() {
    return(
      <div>
        <select 
          value={this.props.scoresDate}
          onChange={(event) => this.props.dispatch(setScoresDate(event.target.value))}
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