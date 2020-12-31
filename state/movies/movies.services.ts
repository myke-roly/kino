import httpModules from '../../api';
import { Methods, TYPES as typeRequest } from '../../api/utils';

interface PayloadI {
  page?: number;
  movie?: string | number;
  query?: string;
  movieId?: string;
}

export async function getMovies(payload: PayloadI): Promise<any> {
  const options = {
    url: 'discover/movie',
    method: Methods.get,
    payload: null,
    type: typeRequest.json,
    movies: true,
    params: `page=${payload.page}`,
  };

  return await httpModules.get(options);
}

export async function getTrendingMovies(): Promise<any> {
  const options = {
    url: 'trending/moview/week',
    method: Methods.get,
    payload: null,
    type: typeRequest.json,
    movies: true,
    params: 'page=1',
  };

  return await httpModules.get(options);
}

export async function searchMovies(payload: PayloadI): Promise<any> {
  const options = {
    url: 'search/movie',
    method: Methods.get,
    payload: null,
    type: typeRequest.json,
    movies: true,
    params: `page=1&query=${payload.query}`,
  };

  return await httpModules.get(options);
}

export async function saveMovie(payload: PayloadI): Promise<any> {
  const options = {
    url: 'movies/save',
    method: Methods.post,
    payload: payload.movieId,
    type: typeRequest.json,
  };

  return await httpModules.post(options);
}

export async function getMovie(payload: PayloadI): Promise<any> {
  const options = {
    url: `movie/${payload.movieId}`,
    method: Methods.post,
    payload: null,
    type: typeRequest.json,
  };
  return await httpModules.get(options);
}
