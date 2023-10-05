import createSagaMiddleware from '@redux-saga/core';
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import rootSaga from '../saga/root-saga';
import customerReducer from './customer-reducer';

const rootReducer = combineReducers({
  customerReducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
