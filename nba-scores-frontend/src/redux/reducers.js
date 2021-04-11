import moment from "moment";

export const initialState = {
  games: { loading: true },
  schedule: { loading: true },
  scoresDate: moment().format('YYYY-MM-DD')
};

const nbaScoresReducer = (state = initialState, action) => {
  console.log(action)

  switch (action.type) {
    case 'FETCH_GAMES_PENDING':
      return ({ ...state, games: { loading: true } })

    case 'FETCH_GAMES_SUCCESS':
      return ({ ...state, games: action.games })

    case 'FETCH_GAMES_ERROR':
      return ({ ...state, games: action.error })

    case 'FETCH_SCHEDULE_PENDING':
      return ({ ...state, schedule: { loading: true } })

    case 'FETCH_SCHEDULE_SUCCESS':
      return ({ ...state, schedule: action.schedule })

    case 'FETCH_SCHEDULE_ERROR':
      return ({ ...state, schedule: action.error })

    case 'SET_SCORES_DATE':
      return ({ ...state, scoresDate: action.scoresDate })

    default:
      return (state)
  }
}

export default nbaScoresReducer;