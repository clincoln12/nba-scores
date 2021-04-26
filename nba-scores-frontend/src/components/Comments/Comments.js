import React from 'react';
import { connect } from 'react-redux';
import { fetchTeamComments } from '../../redux/asyncActions';

class Comments extends React.Component { 

  state = {
    search: ''
  }

  comments() {

    if (this.props.teamComments.loading) {
      return (
        <div>
          Loading...
        </div>
      )
    }

    if (this.props.teamComments){

      const teamComments = this.props.teamComments
    

      let filteredComments = teamComments.filter(
        (commentObj) => {
          return commentObj.comment.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }
      )

    return filteredComments.map((comment) => (
      <div className="comment">
        <strong>{comment.username}:</strong>
        &nbsp;
        {comment.comment}
      </div>
    ))
  }

  return <div>No comments</div>
  }

  componentDidMount() {
    this.props.dispatch(fetchTeamComments(this.props.teamId))
  }

  handleSearch = (e) => {
    this.setState({ search: e.target.value })
  }

  render() {
    return (
      <>
      <form>
        <label>Search Comments:
          <input type="text" onChange={this.handleSearch}></input>
        </label>
      </form>
      <div>
        {this.comments()}
      </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  teamComments: state.teamComments
})

export default connect(mapStateToProps)(Comments)