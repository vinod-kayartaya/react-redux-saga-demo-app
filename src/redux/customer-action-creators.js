import {
  DELETE_CUSTOMER,
  DELETE_CUSTOMER_FAILURE,
  DELETE_CUSTOMER_SUCCESS,
  FETCH_CUSTOMERS,
  FETCH_CUSTOMERS_SUCCESS,
} from './action-types';

export const fetchCustomers = () => ({
  type: FETCH_CUSTOMERS,
});

export const fetchCustomersSuccess = (customers) => ({
  type: FETCH_CUSTOMERS_SUCCESS,
  payload: customers,
});

export const fetchCustomersFailure = (error) => ({
  type: FETCH_CUSTOMERS,
  payload: error,
});

export const deleteCustomer = (id) => ({
  type: DELETE_CUSTOMER,
  payload: id,
});

export const deleteCustomerSuccess = (id) => ({
  type: DELETE_CUSTOMER_SUCCESS,
  payload: id,
});

export const deleteCustomerFailure = (err) => ({
  type: DELETE_CUSTOMER_FAILURE,
  payload: err,
});
