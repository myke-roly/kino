import { TYPES } from './movies.types';

interface PayloadI {
  page?: number;
  query?: string;
  movieId?: string | number;
}

export const getMovies = (payload: PayloadI) => ({ type: TYPES.GET_MOVIES_REQUEST, payload: payload });

export const getTrendingMovies = () => ({ type: TYPES.GET_TRENDING_MOVIES_REQUEST });

export const searchMovie = (payload: PayloadI) => ({ type: TYPES.SEARCH_MOVIES_REQUEST, payload: payload });

export const getMovie = (payload: PayloadI) => ({ type: TYPES.GET_MOVIE_REQUEST, payload: payload });
