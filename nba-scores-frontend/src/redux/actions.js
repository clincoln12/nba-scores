export const fetchGamesPending = () => ({
  type: 'FETCH_GAMES_PENDING'
})

export const fetchGamesSuccess = (games) => ({
  type: 'FETCH_GAMES_SUCCESS',
  games: games
})

export const fetchGamesError = (error) => ({
  type: 'FETCH_GAMES_ERROR',
  error: error
})

export const fetchSchedulePending = () => ({
  type: 'FETCH_SCHEDULE_PENDING'
})

export const fetchScheduleSuccess = (schedule) => ({
  type: 'FETCH_SCHEDULE_SUCCESS',
  schedule: schedule
})

export const fetchScheduleError = (error) => ({
  type: 'FETCH_SCHEDULE_ERROR',
  error: error
})

export const setScoresDate = (scoresDate) => ({
  type: 'SET_SCORES_DATE',
  scoresDate: scoresDate
})