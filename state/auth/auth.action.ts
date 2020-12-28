import httpModules from '../../api';
import { Methods, TYPES as typeRequest } from '../../api/utils';
import { UserSigninI, UserSignupI } from '../../types';
import { AuthActionsTypes, TYPES } from './auth.types';

export async function sigup(user: UserSignupI): Promise<any> {
  console.log(user);
  const options = {
    url: 'auth/signup',
    method: Methods.post,
    payload: user,
    type: typeRequest.json,
  };

  try {
    const data = await httpModules.post(options);
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

export async function sigin(user: UserSigninI): Promise<any> {
  const options = {
    url: 'auth/signin',
    method: Methods.post,
    payload: user,
    type: typeRequest.json,
  };

  try {
    const data = await httpModules.post(options);
    return data;
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

export function logout(): AuthActionsTypes {
  return {
    type: TYPES.LOGOUT,
  };
}
