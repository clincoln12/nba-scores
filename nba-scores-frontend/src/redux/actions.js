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

export const fetchTeamGamesPending = () => ({
  type: 'FETCH_TEAM_GAMES_PENDING'
})

export const fetchTeamGamesSuccess = (teamGames) => ({
  type: 'FETCH_TEAM_GAMES_SUCCESS',
  teamGames: teamGames
})

export const fetchTeamGamesError = (error) => ({
  type: 'FETCH_TEAM_GAMES_ERROR',
  error: error
})

export const setScoresDate = (scoresDate) => ({
  type: 'SET_SCORES_DATE',
  scoresDate: scoresDate
})