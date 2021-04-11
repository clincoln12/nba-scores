import { fetchScheduleError, fetchSchedulePending, fetchScheduleSuccess, fetchGamesError, fetchGamesPending, fetchGamesSuccess } from './actions';

export const fetchSchedule = () => {
  return function (dispatch) {
    dispatch(fetchSchedulePending())

    fetch(`http://localhost:6969/schedule`)
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
  return function (dispatch) {
    dispatch(fetchGamesPending())

    fetch(`http://localhost:6969/games?date=${date}`)
      .then(response => response.json())
      .then(result => {
        if (result.error) {
          return (dispatch(fetchGamesError(result.error)))
        }

        dispatch(fetchGamesSuccess(result))
      })
  }
}