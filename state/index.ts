import { httpModules } from '../api';
import { TYPES, Methods } from '../api/utils';
import { UserSigninI, UserSignupI } from '../types';

export const createAccount = async (payload: UserSignupI): Promise<any> => {
  return await httpModules.post({
    url: 'auth/signup',
    token: null,
    method: Methods.post,
    payload: payload,
    type: TYPES.json,
  });
};

export const login = async (payload: UserSigninI): Promise<any> => {
  return await httpModules.post({
    url: 'auth/sigin',
    token: null,
    method: Methods.post,
    payload: payload,
    type: TYPES.json,
  });
};
