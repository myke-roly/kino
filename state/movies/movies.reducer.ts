import { initialState, InitialStateI } from '../types';
import { GetMoviesTypes, MoviesI, TYPES } from './movies.types';

const initialStateAuth = {
  getMovies: initialState,
  getTrendingMovies: initialState,
  searchMovies: initialState,
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

const reducer = (state = initialStateAuth, action: GetMoviesTypes): MoviesI => {
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
    default:
      return state;
  }
};

export default reducer;
