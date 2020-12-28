import { call, put, takeEvery } from 'redux-saga/effects';
import { TYPES } from './auth.types';
import * as service from '../auth/auth.action';
import { UserSignupI } from '../../types';

interface Payload {
  user: UserSignupI;
}

function* watcherSignup(payload: Payload) {
  try {
    const data = yield call(service.sigup, payload.user);
    console.log(data);
    yield put({ type: TYPES.SIGNUP_SUCCESS, payload: data });
  } catch (error) {
    console.error(error);
    yield put({ type: TYPES.SIGNUP_FAILED });
  }
}

function* authSaga() {
  yield takeEvery<any>(TYPES.SIGNUP_REQUEST, watcherSignup);
}

export default authSaga;
