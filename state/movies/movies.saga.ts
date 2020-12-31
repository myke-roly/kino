import { takeLatest } from 'redux-saga/effects';
import { makeWorker } from '../utils';
import * as service from './movies.services';
import { TYPES } from './movies.types';

const watcherGetMovies = makeWorker(service.getMovies, {
  success: TYPES.GET_MOVIES_SUCCESS,
  failed: TYPES.GET_MOVIES_FAILED,
  retry: TYPES.GET_MOVIES_REQUEST,
});

const watcherGetTrendingMovies = makeWorker(service.getTrendingMovies, {
  success: TYPES.GET_TRENDING_MOVIES_SUCCESS,
  failed: TYPES.GET_TRENDING_MOVIES_FAILED,
  retry: TYPES.GET_TRENDING_MOVIES_REQUEST,
});

const watcherSearchMovies = makeWorker(service.searchMovies, {
  success: TYPES.SEARCH_MOVIES_SUCCESS,
  failed: TYPES.SEARCH_MOVIES_FAILED,
  retry: TYPES.SEARCH_MOVIES_REQUEST,
});

const watcherSaveMovie = makeWorker(service.saveMovie, {
  success: TYPES.SAVE_MOVIE_SUCCESS,
  failed: TYPES.SAVE_MOVIE_FAILED,
  retry: TYPES.SAVE_MOVIE_REQUEST,
});

const watcherGetMovie = makeWorker(service.getMovie, {
  success: TYPES.GET_MOVIE_SUCCESS,
  failed: TYPES.GET_MOVIE_FAILED,
  retry: TYPES.GET_MOVIE_REQUEST,
});

function* moviesSaga() {
  yield takeLatest<any>(TYPES.GET_MOVIES_REQUEST, watcherGetMovies);
  yield takeLatest<any>(TYPES.GET_TRENDING_MOVIES_REQUEST, watcherGetTrendingMovies);
  yield takeLatest<any>(TYPES.SEARCH_MOVIES_REQUEST, watcherSearchMovies);
  yield takeLatest<any>(TYPES.SAVE_MOVIE_REQUEST, watcherSaveMovie);
  yield takeLatest<any>(TYPES.GET_MOVIE_REQUEST, watcherGetMovie);
}

export default moviesSaga;
