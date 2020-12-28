import { combineReducers } from 'redux';
import authreducer from './auth/auth.reducer';

const rootReducer = combineReducers({
  authreducer,
});

export default rootReducer;
