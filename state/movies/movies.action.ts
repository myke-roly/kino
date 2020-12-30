import httpModules from '../../api';
import { Methods, TYPES as typeRequest } from '../../api/utils';

export async function getMovies(page: number): Promise<any> {
  const options = {
    url: 'discover/movie',
    method: Methods.get,
    payload: null,
    type: typeRequest.json,
    movies: true,
    params: `page=${page}`,
  };

  try {
    const data = await httpModules.get(options);
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return error.message;
  }
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

  try {
    const data = await httpModules.get(options);
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

export async function searchMovies(query: string): Promise<any> {
  const options = {
    url: 'search/movie',
    method: Methods.get,
    payload: null,
    type: typeRequest.json,
    movies: true,
    params: `page=1&query=${query}`,
  };

  try {
    const data = await httpModules.get(options);
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return error.message;
  }
}
