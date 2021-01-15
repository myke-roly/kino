import { TYPES, UserI } from './auth.types';

interface PayloadI {
  user: UserI;
}

export const SigninRequest = (payload: PayloadI) => ({ type: TYPES.SIGNIN_REQUEST, payload: payload });
export const SigninSuccess = () => ({ type: TYPES.SIGNIN_SUCCESS });
export const SigninFailed = () => ({ type: TYPES.SIGNIN_FAILED });

export const SignupRequest = (payload: PayloadI) => ({ type: TYPES.SIGNUP_REQUEST, payload: payload });
export const SignupSuccess = () => ({ type: TYPES.SIGNUP_SUCCESS });
export const SignupFailed = () => ({ type: TYPES.SIGNUP_FAILED });
