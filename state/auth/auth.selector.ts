import { createSelector } from 'reselect';

const reducer = ({ authreducer }: any) => authreducer;

export const signupSelector = createSelector([reducer], (Auth) => Auth?.auth);
