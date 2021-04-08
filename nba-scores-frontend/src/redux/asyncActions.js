import { fetchGamesError, fetchGamesPending, fetchGamesSuccess } from './actions';

export const fetchGames = () => {
  return function(dispatch) {
    dispatch(fetchGamesPending)

    fetch('http://localhost:6969/games')
    .then(response => response.json())
    .then(result => {
      if (result.error) {
        return(dispatch(fetchGamesError(result.error)))
      }

      dispatch(fetchGamesSuccess(result))
    })
  }
}