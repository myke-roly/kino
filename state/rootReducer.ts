import { combineReducers } from 'redux';
import authreducer from './auth/auth.reducer';
import moviesReducer from './movies/movies.reducer';

const rootReducer = combineReducers({
  authreducer,
  moviesReducer,
});

export default rootReducer;
