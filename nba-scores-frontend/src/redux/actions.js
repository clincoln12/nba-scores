export const FETCH_GAMES_PENDING = 'FETCH_GAMES_PENDING';
export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS';
export const FETCH_GAMES_ERROR = 'FETCH_GAMES_ERROR';

export const fetchGamesPending = () => ({
  type: FETCH_GAMES_PENDING
})

export const fetchGamesSuccess = (games) => ({
  type: FETCH_GAMES_PENDING,
  games: games
})

export const fetchGamesError = (error) => ({
  type: FETCH_GAMES_PENDING,
  error: error
})