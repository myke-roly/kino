import httpModules from '../../api';
import { Methods, TYPES as typeRequest } from '../../api/utils';
import { UserI } from './auth.types';

interface PayloadI {
  user: UserI;
}

export async function signup(payload: PayloadI): Promise<any> {
  const options = {
    url: 'auth/signup',
    method: Methods.post,
    payload: payload.user,
    type: typeRequest.json,
  };
  return await httpModules.post(options);
}

export async function signin(payload: PayloadI): Promise<any> {
  console.log(payload.user);
  const options = {
    url: 'auth/signin',
    method: Methods.post,
    payload: payload.user,
    type: typeRequest.json,
  };

  return await httpModules.post(options);
}
