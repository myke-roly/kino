import { initialState } from '../types';
import { GetMoviesTypes, MoviesI, TYPES } from './movies.types';

const initialStateAuth = {
  getMovies: initialState,
};

const reducer = (state = initialStateAuth, action: GetMoviesTypes): MoviesI => {
  switch (action.type) {
    case TYPES.GET_MOVIES_REQUEST:
      return {
        ...state,
        getMovies: {
          data: null,
          loading: true,
          error: null,
        },
      };
    case TYPES.GET_MOVIES_SUCCESS:
      return {
        ...state,
        getMovies: {
          data: [],
          loading: false,
          error: null,
        },
      };
    case TYPES.GET_MOVIES_FAILED:
      return {
        ...state,
        getMovies: {
          data: null,
          loading: false,
          error: 'ERROR EN LA PETICION',
        },
      };
    default:
      return state;
  }
};

export default reducer;
