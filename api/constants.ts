export const URL_BASE_AUTH = 'http://localhost:8080';
const token = 'bf7a0d7e84fbc649f8d6f2819491a0d6';
export const URL_BASE_MOVIES = 'https://api.themoviedb.org/3';
//https://api.themoviedb.org/3/discover/movie?api_key=bf7a0d7e84fbc649f8d6f2819491a0d6&page=1

export const getFinalUrl = (url: string | undefined, movies?: boolean, params?: string) => {
  return movies ? `${URL_BASE_MOVIES}/${url}?${params}&api_key=${token}` : URL_BASE_AUTH + url;
};
