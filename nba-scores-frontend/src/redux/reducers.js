import { FETCH_GAMES_SUCCESS, FETCH_GAMES_PENDING, FETCH_GAMES_ERROR } from "./actions";

export const initialState = {};

const nbaScoresReducer = (state = initialState, action) => {
  switch (action.type) { 
    case FETCH_GAMES_PENDING:
      return({...state, games: {loading: true}})

    case FETCH_GAMES_SUCCESS:
      console.log('fetch games successful. games:')
      console.log(action.games)
      return({...state, games: action.games})

    case FETCH_GAMES_ERROR:
      return({...state, games: action.error})
  }
}

export default nbaScoresReducer;