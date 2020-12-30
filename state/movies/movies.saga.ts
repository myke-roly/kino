import { call, put, takeLatest } from 'redux-saga/effects';
import * as service from './movies.action';
import { TYPES } from './movies.types';

interface PauloadI {
  page: number;
}

function* watcherGetMovies(payload: PauloadI) {
  try {
    const data = yield call(service.getMovies, payload.page);
    yield put({ type: TYPES.GET_MOVIES_SUCCESS, payload: data.data });
  } catch (error) {
    console.error(error);
    yield put({ type: TYPES.GET_MOVIES_FAILED });
  }
}

function* watcherGetTrendingMovies() {
  try {
    const data = yield call(service.getTrendingMovies);
    yield put({ type: TYPES.GET_TRENDING_MOVIES_SUCCESS, payload: data.data });
  } catch (error) {
    console.error(error);
    yield put({ type: TYPES.GET_TRENDING_MOVIES_FAILED });
  }
}

interface PayloadI {
  query: string;
}

function* watcherSearchMovies(payload: PayloadI) {
  try {
    const data = yield call(service.searchMovies, payload.query);
    yield put({ type: TYPES.SEARCH_MOVIES_SUCCESS, payload: data.data });
  } catch (error) {
    console.error(error);
    yield put({ type: TYPES.SEARCH_MOVIES_FAILED });
  }
}

function* moviesSaga() {
  yield takeLatest<any>(TYPES.GET_MOVIES_REQUEST, watcherGetMovies);
  yield takeLatest<any>(TYPES.GET_TRENDING_MOVIES_REQUEST, watcherGetTrendingMovies);
  yield takeLatest<any>(TYPES.SEARCH_MOVIES_REQUEST, watcherSearchMovies);
}

export default moviesSaga;
