import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import rootReducer from './rootReducer';
import rootSaga from './rootSagas';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger({ collapsed: true });

const middleware = [sagaMiddleware, loggerMiddleware];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

export default store;
