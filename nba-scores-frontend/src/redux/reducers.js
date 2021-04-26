import moment from "moment";

export const initialState = {
  games: { loading: true },
  schedule: { loading: true },
  teamGames: { loading: true },
  scoresDate: moment().format('YYYY-MM-DD'),
  teamComments: { loading: true }
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

    case 'FETCH_TEAM_COMMENTS_PENDING':
      return ({ ...state, teamComments: { loading: true } })
  
    case 'FETCH_TEAM_COMMENTS_SUCCESS':
      return ({ ...state, teamComments: action.teamComments })
  
    case 'FETCH_TEAM_COMMENTS_ERROR':
      return ({ ...state, teamComments: action.error })

    case 'FETCH_TEAM_GAMES_PENDING':
      return ({ ...state, teamGames: { loading: true } })

    case 'FETCH_TEAM_GAMES_SUCCESS':
      return ({ ...state, teamGames: action.teamGames })

    case 'FETCH_TEAM_GAMES_ERROR':
      return ({ ...state, teamGames: action.error })

    case 'POST_COMMENT_PENDING':
      return ({ ...state, teamComments: { loading: true } })

    case 'POST_COMMENT_SUCCESS':
      return ({ ...state, teamComments: action.teamComments })

    case 'POST_COMMENT_ERROR':
      return ({ ...state, teamComments: action.error })

    case 'SET_SCORES_DATE':
      return ({ ...state, scoresDate: action.scoresDate })

    default:
      return (state)
  }
}

export default nbaScoresReducer;