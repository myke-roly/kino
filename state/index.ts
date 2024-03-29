import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import rootReducer from './rootReducer';
import rootSaga from './rootSagas';
import { initialApp } from '../firebase';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger({ collapsed: true });

const middleware = [sagaMiddleware, loggerMiddleware];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

initialApp();

sagaMiddleware.run(rootSaga);

export default store;
