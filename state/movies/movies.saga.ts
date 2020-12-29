import { call, put, takeEvery } from 'redux-saga/effects';
import { TYPES } from './movies.types';

function* watcherGetMovies() {
  try {
    const data = yield call(() => {});
    console.log(data);
    yield put({ type: TYPES.GET_MOVIES_SUCCESS, payload: data });
  } catch (error) {
    console.error(error);
    yield put({ type: TYPES.GET_MOVIES_FAILED });
  }
}

function* moviesSaga() {
  yield takeEvery<any>(TYPES.GET_MOVIES_REQUEST, watcherGetMovies);
}

export default moviesSaga;
