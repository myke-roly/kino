import { InitialStateI } from '../types';

export enum TYPES {
  GET_MOVIES_REQUEST = 'GET_MOVIES_REQUEST',
  GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS',
  GET_MOVIES_FAILED = 'GET_MOVIES_FAILED',
}

export interface MoviesI {
  getMovies: InitialStateI;
}

interface GetMoviesActionRequest {
  type: typeof TYPES.GET_MOVIES_REQUEST;
}

interface GetMoviesActionSucess {
  type: typeof TYPES.GET_MOVIES_SUCCESS;
  payload: [] | null;
}

interface GetMoviesActionFailed {
  type: typeof TYPES.GET_MOVIES_FAILED;
}

export type GetMoviesTypes = GetMoviesActionRequest | GetMoviesActionSucess | GetMoviesActionFailed;
