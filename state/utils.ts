import { call, put } from 'redux-saga/effects';
import { UserI } from './auth/auth.types';
import { TYPES } from './movies/movies.types';

interface PayloadI {
  type: string;
  payload: {
    user: UserI;
    retry: number;
  };
}
interface ActionsWatcher {
  success: string;
  failed: string;
  retry: string;
}

export function makeWorker(service: any, actions: ActionsWatcher) {
  return function* searchWorker({ payload }: PayloadI) {
    try {
      const { response, data } = yield call(service, payload);

      switch (response.status) {
        case 200:
        case 201:
        case 204:
          yield put({ type: actions.success, payload: { reqData: payload, data: data } });
          break;
        case 401:
          console.log('retry...');
          if ((payload?.retry ? payload.retry + 1 : 1) < 4) {
            yield put({ type: actions.retry, payload: { ...payload, retry: payload?.retry ? payload.retry + 1 : 1 } });
          } else yield put({ type: actions.failed, paylod: { data: data, response: response } });
          break;
        case 409:
        case 400:
          yield put({ type: actions.failed, payload: { data: data, reponse: response } });
          break;
        default:
          yield put({ type: actions.failed, payload: { data: data, reponse: response } });
          break;
      }
    } catch (error) {
      yield put({ type: actions.failed });
    }
  };
}
