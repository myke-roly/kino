import { InitialStateI } from '../types';

export enum TYPES {
  GET_MOVIES_REQUEST = 'GET_MOVIES_REQUEST',
  GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS',
  GET_MOVIES_FAILED = 'GET_MOVIES_FAILED',

  GET_MOVIE_REQUEST = 'GET_MOVIE_REQUEST',
  GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS',
  GET_MOVIE_FAILED = 'GET_MOVIE_FAILED',

  GET_TRENDING_MOVIES_REQUEST = 'GET_TRENDING_MOVIES_REQUEST',
  GET_TRENDING_MOVIES_SUCCESS = 'GET_TRENDING_MOVIES_SUCCESS',
  GET_TRENDING_MOVIES_FAILED = 'GET_TRENDING_MOVIES_FAILED',

  SEARCH_MOVIES_REQUEST = 'SEARCH_MOVIES_REQUEST',
  SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS',
  SEARCH_MOVIES_FAILED = 'SEARCH_MOVIES_FAILED',

  SAVE_MOVIE_REQUEST = 'SAVE_MOVIE_REQUEST',
  SAVE_MOVIE_SUCCESS = 'SAVE_MOVIE_SUCCESS',
  SAVE_MOVIE_FAILED = 'SAVE_MOVIE_FAILED',
}

export interface MoviesI {
  getMovies: InitialStateI;
  getTrendingMovies: InitialStateI;
  searchMovies: InitialStateI;
  saveMovie: InitialStateI;
  getMovie: InitialStateI;
}

// getActions
interface GetMoviesActionRequest {
  type:
    | typeof TYPES.GET_MOVIES_REQUEST
    | typeof TYPES.GET_TRENDING_MOVIES_REQUEST
    | typeof TYPES.SEARCH_MOVIES_REQUEST
    | typeof TYPES.GET_MOVIE_REQUEST;
}

interface GetMoviesActionSucess {
  type:
    | typeof TYPES.GET_MOVIES_SUCCESS
    | typeof TYPES.GET_TRENDING_MOVIES_SUCCESS
    | typeof TYPES.SEARCH_MOVIES_SUCCESS
    | typeof TYPES.GET_MOVIE_SUCCESS;
  payload: any;
}

interface GetMoviesActionFailed {
  type:
    | typeof TYPES.GET_MOVIES_FAILED
    | typeof TYPES.GET_TRENDING_MOVIES_FAILED
    | typeof TYPES.SEARCH_MOVIES_FAILED
    | typeof TYPES.GET_MOVIE_FAILED;
  payload: any;
}

// postActions
interface PostMoviesActionRequest {
  type: typeof TYPES.SAVE_MOVIE_REQUEST;
}

interface PostMoviesActionSucess {
  type: typeof TYPES.SAVE_MOVIE_SUCCESS;
  payload: any;
}

interface PostMoviesActionFailed {
  type: typeof TYPES.SAVE_MOVIE_FAILED;
  payload: any;
}

export type MoviesTypes =
  | GetMoviesActionRequest
  | GetMoviesActionSucess
  | GetMoviesActionFailed
  | PostMoviesActionRequest
  | PostMoviesActionSucess
  | PostMoviesActionFailed;
