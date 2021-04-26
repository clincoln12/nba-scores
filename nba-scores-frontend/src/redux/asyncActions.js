import { fetchTeamCommentsPending, fetchTeamCommentsSuccess, fetchTeamCommentsError, postCommentSuccess, postCommentError, postCommentPending, fetchTeamGamesPending, fetchTeamGamesSuccess, fetchTeamGamesError, fetchScheduleError, fetchSchedulePending, fetchScheduleSuccess, fetchGamesError, fetchGamesPending, fetchGamesSuccess } from './actions';

export const fetchTeamGames = (teamId) => {
  return function (dispatch) {
    dispatch(fetchTeamGamesPending())

    fetch(`http://localhost:3001/teams/${teamId}/games`)
      .then(response => response.json())
      .then(result => {
        if (result.error) {
          return (dispatch(fetchTeamGamesError(result.error)))
        }

        dispatch(fetchTeamGamesSuccess(result))
      })
  }
}

export const fetchTeamComments = (teamId) => {
  console.log('team id ')
  console.log(teamId)
  return function (dispatch) {
    dispatch(fetchTeamCommentsPending())

    fetch(`http://localhost:3001/teams/${teamId}/comments`)
      .then(response => response.json())
      .then(result => {
        if (result.error) {
          return (dispatch(fetchTeamCommentsError(result.error)))
        }

console.log('result here')
console.log(result)

        dispatch(fetchTeamCommentsSuccess(result))
      })
  }
}

export const fetchSchedule = () => {
  return function (dispatch) {
    dispatch(fetchSchedulePending())

    fetch(`http://localhost:3001/schedule`)
      .then(response => response.json())
      .then(result => {
        if (result.error) {
          return (dispatch(fetchScheduleError(result.error)))
        }

        dispatch(fetchScheduleSuccess(result))
      })
  }
}

export const fetchGames = (date) => {
  console.log('b')
  return dispatch => {
    console.log('c')
    dispatch(fetchGamesPending())

    fetch(`http://localhost:3001/games?date=${date}`)
      .then(response => response.json())
      .then(result => {
        if (result.error) {
          return (dispatch(fetchGamesError(result.error)))
        }
        console.log('d')
        dispatch(fetchGamesSuccess(result))
      })
    console.log('e')
  }
  console.log('f')
}

export const postComment = (teamId, userName, comment) => {
  return dispatch => {
    dispatch(postCommentPending())

    const commentData = {
      userName,
      comment
    }

    fetch(`http://localhost:3001/teams/${teamId}/comments`,  {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentData) // body data type must match "Content-Type" header
    })
    .then(response => response.json())
    .then(result => {
      if (result.error) {
        return (dispatch(postCommentError()))
      }
      dispatch(postCommentSuccess(result))
    })
  }
}