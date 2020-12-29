import { InitialStateI } from '../types';

export enum TYPES {
  SIGNUP_REQUEST = 'SIGNUP_REQUEST',
  SIGNUP_SUCCESS = 'SIGNUP_SUCCESS',
  SIGNUP_FAILED = 'SIGNUP_FAILED',

  SIGNIN_REQUEST = 'SIGNIN_REQUEST',
  SIGNIN_SUCCESS = 'SIGNIN_SUCCESS',
  SIGNIN_FAILED = 'SIGNIN_FAILED',

  LOGOUT = 'LOGOUT',
}
export interface AuthI {
  auth: InitialStateI;
  signin: InitialStateI;
}

export interface UserI {
  username: 'string';
  email: 'string';
  password: 'string';
}

interface SignupActionRequest {
  type: typeof TYPES.SIGNUP_REQUEST;
}

interface SignupActionSucess {
  type: typeof TYPES.SIGNUP_SUCCESS;
  payload: {} | [] | any;
}

interface SignupActionFailed {
  type: typeof TYPES.SIGNUP_FAILED;
}

interface SigninActionRequest {
  type: typeof TYPES.SIGNIN_REQUEST;
}

interface SigninActionSucess {
  type: typeof TYPES.SIGNIN_SUCCESS;
  payload: {} | [] | any;
}

interface SigninActionFailed {
  type: typeof TYPES.SIGNIN_FAILED;
}

interface LogoutpAction {
  type: typeof TYPES.LOGOUT;
}

export type AuthActionsTypes =
  | SignupActionRequest
  | SignupActionSucess
  | SignupActionFailed
  | LogoutpAction
  | SigninActionRequest
  | SigninActionSucess
  | SigninActionFailed;
