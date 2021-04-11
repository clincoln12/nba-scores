import React from 'react';
import { connect } from 'react-redux';
import { fetchSchedule } from '../../redux/asyncActions';

class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.props.dispatch(fetchSchedule())
  }

  whatToRender() {
    if (this.props.schedule.loading)
  }

  render () {
    return(
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