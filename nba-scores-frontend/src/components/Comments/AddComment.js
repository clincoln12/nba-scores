import React, { Component } from 'react';
import { postComment } from "../../redux/asyncActions";
import { connect } from 'react-redux';

class AddComment extends Component {
  state = {
    comment: '',
    userName: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const params = new URLSearchParams(window.location.search)
    
    this.props.dispatch(postComment(params.get('id'), this.state.userName, this.state.comment))

    this.setState({
      comment: '',
      userName: ''
    })
    
  }

  handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    
    this.setState({
    [name]: value
    })
  }

  render() {
    return (
      <div className="comments-form-container">
        <form>
          <label>Username:
            <input onChange={this.handleChange} type="text" name="userName" value={this.state.userName} />
          </label>
          &nbsp;
          <label>Comment:
            <input onChange={this.handleChange}type="text" name="comment" value={this.state.comment} />
          </label>

          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}


export default connect()(AddComment);