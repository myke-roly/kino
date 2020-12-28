import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import rootSaga from './rootSagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

export default store;
