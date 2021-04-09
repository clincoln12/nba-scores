import { fetchGamesError, fetchGamesPending, fetchGamesSuccess } from './actions';

export const fetchGames = (date) => {
  return function(dispatch) {
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