import nbaScoresReducer, { initialState } from './reducers';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

const store = createStore(nbaScoresReducer, initialState, applyMiddleware(thunk));

export default store;