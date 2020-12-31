import { takeLatest } from 'redux-saga/effects';
import { TYPES } from './auth.types';
import * as service from './auth.services';
import { makeWorker } from '../utils';

const watcherSignin = makeWorker(service.signin, {
  success: TYPES.SIGNIN_SUCCESS,
  failed: TYPES.SIGNIN_FAILED,
  retry: TYPES.SIGNIN_REQUEST,
});

const watcherSignup = makeWorker(service.signup, {
  success: TYPES.SIGNUP_SUCCESS,
  failed: TYPES.SIGNUP_FAILED,
  retry: TYPES.SIGNIN_REQUEST,
});

function* authSaga() {
  yield takeLatest<any>(TYPES.SIGNUP_REQUEST, watcherSignup);
  yield takeLatest<any>(TYPES.SIGNIN_REQUEST, watcherSignin);
}

export default authSaga;
