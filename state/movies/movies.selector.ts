import { createSelector } from 'reselect';

const reducer = ({ moviesReducer }: any) => moviesReducer;

export const moviesSelector = createSelector([reducer], (Movies) => Movies?.getMovies);

export const trendingMoviesSelector = createSelector([reducer], (Movies) => Movies?.getTrendingMovies);

export const searchMovieSelector = createSelector([reducer], (Movies) => Movies?.searchMovies);
