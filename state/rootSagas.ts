import { SagaMiddleware } from 'redux-saga';
import { all } from 'redux-saga/effects';

import authSaga from './auth/auth.saga';
import moviesSaga from './movies/movies.saga';

export default function* rootSaga() {
  yield all([authSaga(), moviesSaga()]);
}
