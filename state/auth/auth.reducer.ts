import { AuthActionsTypes, AuthI, TYPES } from './auth.types';
import { initialState } from '../types';

const initialStateAuth = {
  auth: initialState,
  signin: initialState,
};

const reducer = (state = initialStateAuth, action: AuthActionsTypes): AuthI => {
  switch (action.type) {
    case TYPES.SIGNUP_REQUEST:
      return {
        ...state,
        auth: {
          data: null,
          isLoading: true,
          error: null,
        },
      };
    case TYPES.SIGNUP_SUCCESS:
      return {
        ...state,
        auth: {
          data: action.payload.data,
          isLoading: false,
          error: null,
        },
      };
    case TYPES.SIGNUP_FAILED:
      return {
        ...state,
        auth: {
          data: null,
          isLoading: false,
          error: 'ERROR EN LA PETICION',
        },
      };
    case TYPES.SIGNIN_REQUEST:
      return {
        ...state,
        signin: {
          data: null,
          isLoading: true,
          error: null,
        },
      };
    case TYPES.SIGNIN_SUCCESS:
      return {
        ...state,
        signin: {
          data: action.payload.data,
          isLoading: false,
          error: null,
        },
      };
    case TYPES.SIGNIN_FAILED:
      return {
        ...state,
        signin: {
          data: null,
          isLoading: false,
          error: 'ERROR EN LA PETICION',
        },
      };

    default:
      return { ...state };
  }
};

export default reducer;
