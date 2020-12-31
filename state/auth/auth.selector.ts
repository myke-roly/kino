import { createSelector } from 'reselect';

const reducer = ({ authreducer }: any) => authreducer;

export const signupSelector = createSelector([reducer], (Auth) => Auth?.signup);
export const signinSelector = createSelector([reducer], (Auth) => Auth?.signin);
