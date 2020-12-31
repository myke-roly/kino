import { AuthActionsTypes, AuthI, TYPES } from './auth.types';
import { initialState } from '../types';

const initialStateAuth = {
  signup: initialState,
  signin: initialState,
};

const reducer = (state = initialStateAuth, action: AuthActionsTypes): AuthI => {
  switch (action.type) {
    case TYPES.SIGNUP_REQUEST:
      return {
        ...state,
        signup: {
          data: null,
          isLoading: true,
          error: null,
        },
      };
    case TYPES.SIGNUP_SUCCESS:
      return {
        ...state,
        signup: {
          data: action.payload.data,
          isLoading: false,
          error: null,
        },
      };
    case TYPES.SIGNUP_FAILED:
      return {
        ...state,
        signup: {
          data: null,
          isLoading: false,
          error: action.payload.data,
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
          error: action.payload.data,
        },
      };

    default:
      return { ...state };
  }
};

export default reducer;
