import moment from "moment";

export const initialState = { 
  games: [],
  scoresDate: moment().format('YYYY-MM-DD')
};

const nbaScoresReducer = (state = initialState, action) => {
  console.log(action)

  switch (action.type) { 
    case 'FETCH_GAMES_PENDING':
      return({...state, games: { loading: true }})

    case 'FETCH_GAMES_SUCCESS':
      return({...state, games: action.games})

    case 'FETCH_GAMES_ERROR':
      return({...state, games: action.error})

    case 'SET_SCORES_DATE':
      return({...state, scoresDate: action.scoresDate})

    default:
      return(state)
  }
}

export default nbaScoresReducer;