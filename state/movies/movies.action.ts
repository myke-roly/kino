import httpModules from '../../api';
import { Methods, TYPES as typeRequest } from '../../api/utils';

export async function getMovies(): Promise<any> {
  const options = {
    url: 'discover/movies',
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
