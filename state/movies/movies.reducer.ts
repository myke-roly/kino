import { initialState, InitialStateI } from '../types';
import { MoviesI, MoviesTypes, TYPES } from './movies.types';

const initialStateAuth = {
  getMovies: initialState,
  getTrendingMovies: initialState,
  searchMovies: initialState,
  saveMovie: initialState,
};

const request = (): InitialStateI => ({
  data: null,
  isLoading: true,
  error: null,
});

const failed = (error: string): InitialStateI => ({
  data: null,
  isLoading: false,
  error: error,
});

const reducer = (state = initialStateAuth, action: MoviesTypes): MoviesI => {
  switch (action.type) {
    case TYPES.GET_MOVIES_REQUEST:
      return {
        ...state,
        getMovies: request(),
      };
    case TYPES.GET_MOVIES_SUCCESS:
      return {
        ...state,
        getMovies: {
          data: action.payload,
          isLoading: false,
          error: null,
        },
      };
    case TYPES.GET_MOVIES_FAILED:
      return {
        ...state,
        getMovies: failed('error en la peticion'),
      };
    case TYPES.GET_TRENDING_MOVIES_REQUEST:
      return {
        ...state,
        getTrendingMovies: request(),
      };
    case TYPES.GET_TRENDING_MOVIES_SUCCESS:
      return {
        ...state,
        getTrendingMovies: {
          data: action.payload,
          isLoading: false,
          error: null,
        },
      };
    case TYPES.GET_TRENDING_MOVIES_FAILED:
      return {
        ...state,
        getTrendingMovies: failed('error en la peticion'),
      };
    case TYPES.SEARCH_MOVIES_REQUEST:
      return {
        ...state,
        searchMovies: request(),
      };
    case TYPES.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        searchMovies: {
          data: action.payload,
          isLoading: false,
          error: null,
        },
      };
    case TYPES.SEARCH_MOVIES_FAILED:
      return {
        ...state,
        searchMovies: failed('error en la peticion'),
      };
    case TYPES.SAVE_MOVIE_REQUEST:
      return {
        ...state,
        saveMovie: request(),
      };
    case TYPES.SAVE_MOVIE_SUCCESS:
      return {
        ...state,
        saveMovie: {
          data: action.payload,
          isLoading: false,
          error: null,
        },
      };
    case TYPES.SAVE_MOVIE_FAILED:
      return {
        ...state,
        saveMovie: failed('error en la peticion'),
      };
    default:
      return state;
  }
};

export default reducer;
