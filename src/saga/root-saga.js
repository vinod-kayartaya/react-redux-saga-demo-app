import { all, fork } from 'redux-saga/effects';
import CustomerSaga from './customer-saga';

export default function* rootSaga() {
  yield all([fork(CustomerSaga)]);
}
