import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { DELETE_CUSTOMER, FETCH_CUSTOMERS } from '../redux/action-types';
import {
  deleteCustomerFailure,
  deleteCustomerSuccess,
  fetchCustomersFailure,
  fetchCustomersSuccess,
} from '../redux/customer-action-creators';

const baseUrl = 'http://localhost:8080/customers/';

function* CustomerSaga() {
  yield takeLatest(FETCH_CUSTOMERS, onFetchCustomers);
  yield takeLatest(DELETE_CUSTOMER, onDeleteCustomer);
}

const fetchCustomers = async () => {
  return await axios.get(baseUrl);
};

const deleteCustomer = async (id) => {
  return await axios.delete(baseUrl + id);
};

function* onFetchCustomers(action) {
  try {
    const resp = yield call(fetchCustomers);
    // dispatch the FETCH_CUSTOMERS_SUCCESS
    yield put(fetchCustomersSuccess(resp.data));
  } catch (err) {
    yield put(fetchCustomersFailure(err.response.data));
  }
}

function* onDeleteCustomer(action) {
  try {
    yield call(deleteCustomer, action.payload);
    yield put(deleteCustomerSuccess(action.payload));
  } catch (err) {
    yield put(deleteCustomerFailure(err.response.data));
  }
}

export default CustomerSaga;
