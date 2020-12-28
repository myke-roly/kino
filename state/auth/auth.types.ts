export enum TYPES {
  SIGNUP_REQUEST = 'SIGNUP_REQUEST',
  SIGNUP_SUCCESS = 'SIGNUP_SUCCESS',
  SIGNUP_FAILED = 'SIGNUP_FAILED',

  SIGNUP_LOGOUT = 'SIGNUP_LOGOUT',
}

export interface InitialStateI {
  loading: boolean;
  error: null | string;
  data: null | {} | [];
}

export const initialState: InitialStateI = {
  loading: false,
  error: null,
  data: null,
};

export interface AuthI {
  auth: InitialStateI;
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

interface LogoutpAction {
  type: typeof TYPES.SIGNUP_LOGOUT;
}

export type AuthActionsTypes = SignupActionRequest | SignupActionSucess | SignupActionFailed | LogoutpAction;
